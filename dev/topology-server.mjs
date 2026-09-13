import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import {documentRoot, writeDocument, read, write, validate, render, checkBody, checkLinks, loadGraph, stripBodies} from './core.mjs'
// 본문은 docs/<id>.md 에만 저장한다. topology.json과 pending-sync.json은 구조만 담는다.
let pending = read('pending-sync.json', null)
let graph = loadGraph(read('drafts.json', []))
if (pending?.candidateGraph && graph.revision < pending.revision) {
  const drafts = read('drafts.json', [])
  const candidate = pending.candidateGraph
  for (const node of candidate.nodes) {
    if (typeof node.body === 'string') continue
    const current = graph.nodes.find(n => n.id === node.id)
    const draft = drafts.find(d => d.id === node.id)
    const file = path.join(documentRoot, node.id + '.md')
    node.body = (draft && Date.parse(draft.updatedAt || 0) >= Date.parse(node.updatedAt)) ? draft.body : fs.existsSync(file) ? loadGraph([]).nodes.find(n => n.id === node.id)?.body ?? draft?.body : draft?.body ?? current?.body
    if (typeof node.body !== 'string') throw Error('cannot recover body: ' + node.id)
  }
  validate(candidate)
  graph = candidate
}
if (pending && pending.revision !== graph.revision) throw Error('pending revision mismatch; inspect before recovery')
validate(graph)
checkLinks(graph)
for (const node of graph.nodes) writeDocument(node.id + '.md', render(node, graph))
write('topology.json', stripBodies(graph))
http.createServer(async (req, res) => {
  try {
    let raw = ''
    for await (const part of req) { raw += part; if (raw.length > 10000000) throw Error('request too large') }
    const body = raw ? JSON.parse(raw) : {}
    let result
    if (req.method === 'GET' && req.url === '/graph') result = graph
    else if (req.method === 'GET' && req.url === '/status') result = {...validate(graph), revision: graph.revision, pending}
    else if (req.method === 'GET' && req.url === '/order') result = validate(graph).order
    else if (req.method === 'POST' && req.url === '/validate') result = validate(body.graph || graph)
    else if (req.method === 'POST' && req.url === '/ack') {
      if (!pending || body.revision !== graph.revision || !body.driveTopologyId) throw Error('invalid acknowledgement')
      write('sync-receipt.json', {...body, acknowledgedAt: new Date().toISOString()})
      pending = null
      write('pending-sync.json', null)
      result = {ok: true}
    } else if (req.method === 'POST' && req.url === '/transaction') {
      if (pending) throw Error('persist current revision to Drive before next transaction')
      if (body.expectedRevision !== undefined && body.expectedRevision !== graph.revision) throw Error('revision conflict')
      const next = structuredClone(graph)
      const now = new Date().toISOString()
      const removed = new Set(body.remove || [])
      for (const id of removed) if (typeof id !== 'string' || !/^[a-z0-9][a-z0-9-]*$/.test(id)) throw Error('invalid removal id')
      next.nodes = next.nodes.filter(n => !removed.has(n.id))
      next.edges = next.edges.filter(e => !e.some(id => removed.has(id)))
      for (const input of body.upsert || []) {
        if (!/^[a-z0-9][a-z0-9-]*$/.test(input.id)) throw Error('invalid id')
        if (typeof input.title !== 'string' || !input.title.trim()) throw Error('invalid title')
        checkBody(input.body)
        const existing = next.nodes.find(n => n.id === input.id)
        const node = {...existing, ...input, createdAt: existing?.createdAt || now, updatedAt: now}
        next.nodes = next.nodes.filter(n => n.id !== input.id)
        next.nodes.push(node)
      }
      if (body.edges) next.edges = body.edges
      else {
        for (const edge of body.removeEdges || []) next.edges = next.edges.filter(e => JSON.stringify(e) !== JSON.stringify(edge))
        for (const edge of body.addEdges || []) {
          if (next.edges.some(e => JSON.stringify(e) === JSON.stringify(edge))) throw Error('duplicate edge')
          next.edges.push(edge)
        }
      }
      const validation = validate(next)
      checkLinks(next)
      const changed = []
      for (const node of next.nodes) {
        const previous = graph.nodes.find(n => n.id === node.id)
        if (!previous || render(previous, graph) !== render(node, next)) {
          node.updatedAt = now
          changed.push(node.id + '.md')
        }
      }
      next.revision++
      next.updatedAt = now
      pending = {revision: next.revision, baseRevision: graph.revision, changed, removed: [...removed], createdAt: now, candidateGraph: stripBodies(next), transferMode: 'connected Google Drive tools; not atomic'}
      write('pending-sync.json', pending)
      write('topology.json', stripBodies(next))
      graph = next
      for (const node of graph.nodes) writeDocument(node.id + '.md', render(node, graph))
      for (const id of removed) fs.rmSync(path.join(documentRoot, id + '.md'), {force: true})
      result = {...validation, ...pending}
    } else throw Error('unknown route')
    res.writeHead(200, {'content-type': 'application/json; charset=utf-8'})
    res.end(JSON.stringify(result))
  } catch (error) {
    res.writeHead(400, {'content-type': 'application/json; charset=utf-8'})
    res.end(JSON.stringify({error: error.message}))
  }
}).listen(43172, '127.0.0.1', () => console.log('topology http://127.0.0.1:43172'))
