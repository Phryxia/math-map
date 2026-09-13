import fs from 'node:fs'
import path from 'node:path'
export const root = path.dirname(new URL(import.meta.url).pathname)
export const documentRoot = path.resolve(root, '../docs')
export const SECTIONS = ['# 개요', '# 직관', '# 정의', '# 성질', '# 활용']
export const MAX_LINES = 1000
export const writeDocument = (name, value) => {
  if (!/^[a-z0-9][a-z0-9-]*\.md$/.test(name)) throw Error('invalid document filename')
  fs.mkdirSync(documentRoot, {recursive: true})
  const file = path.join(documentRoot, name)
  fs.writeFileSync(file + '.tmp', value)
  fs.renameSync(file + '.tmp', file)
}
export const read = (name, fallback) => fs.existsSync(path.join(root, name)) ? JSON.parse(fs.readFileSync(path.join(root, name), 'utf8')) : fallback
export const write = (name, value) => {
  const file = path.join(root, name)
  fs.writeFileSync(file + '.tmp', typeof value === 'string' ? value : JSON.stringify(value, null, 2) + '\n')
  fs.renameSync(file + '.tmp', file)
}
export class PriorityQueue {
  constructor(state = {next: 0, items: [], active: [], completed: []}) {
    this.state = structuredClone(state)
    this.state.completed ??= []
    this.state.schemaVersion = 2
    this.state.items.sort((a, b) => b.priority - a.priority || a.id - b.id)
  }
  push(data, priority) {
    if (!Number.isFinite(priority)) throw Error('priority must be finite')
    const item = {id: ++this.state.next, priority, data, queuedAt: new Date().toISOString()}
    this.state.items.push(item)
    this.state.items.sort((a, b) => b.priority - a.priority || a.id - b.id)
    return item
  }
  reprioritize(id, priority, reason) {
    if (!Number.isFinite(priority)) throw Error('priority must be finite')
    const item = this.state.items.find(item => item.id === id)
    if (!item) throw Error('unknown queued item')
    item.priority = priority
    if (reason) item.data.reason = reason
    item.reweightedAt = new Date().toISOString()
    this.state.items.sort((a, b) => b.priority - a.priority || a.id - b.id)
    return item
  }
  pop() {
    const item = this.state.items.shift()
    if (!item) return {empty: true}
    this.state.active.push({...item, startedAt: new Date().toISOString()})
    return {empty: false, item}
  }
  done(id) {
    if (!this.state.active.some(item => item.id === id)) throw Error('unknown active item')
    const item = this.state.active.find(item => item.id === id)
    this.state.completed.push({...item, completedAt: new Date().toISOString()})
    this.state.active = this.state.active.filter(item => item.id !== id)
    return {ok: true, item: this.state.completed.at(-1)}
  }
}
export function validate(graph) {
  if (!graph || !Array.isArray(graph.nodes) || !Array.isArray(graph.edges)) throw Error('invalid graph shape')
  for (const n of graph.nodes) if (!n || typeof n.id !== 'string' || !/^[a-z0-9][a-z0-9-]*$/.test(n.id)) throw Error('invalid vertex id')
  for (const e of graph.edges) if (!Array.isArray(e) || e.length !== 2 || e.some(id => typeof id !== 'string')) throw Error('invalid edge shape')
  const ids = new Set(graph.nodes.map(n => n.id))
  if (ids.size !== graph.nodes.length) throw Error('duplicate vertex')
  const indegree = new Map([...ids].map(id => [id, 0]))
  const children = new Map([...ids].map(id => [id, []]))
  const seen = new Set()
  for (const [parent, child] of graph.edges) {
    if (!ids.has(parent) || !ids.has(child)) throw Error('missing vertex')
    if (parent === child) throw Error('self loop')
    const key = JSON.stringify([parent, child])
    if (seen.has(key)) throw Error('duplicate edge')
    seen.add(key)
    indegree.set(child, indegree.get(child) + 1)
    children.get(parent).push(child)
  }
  const ready = [...ids].filter(id => indegree.get(id) === 0)
  const order = []
  for (let i = 0; i < ready.length; i++) {
    const id = ready[i]
    order.push(id)
    for (const child of children.get(id)) {
      indegree.set(child, indegree.get(child) - 1)
      if (indegree.get(child) === 0) ready.push(child)
    }
  }
  if (order.length !== ids.size) throw Error('cycle detected')
  return {valid: true, vertexCount: ids.size, edgeCount: graph.edges.length, order}
}
export function render(node, graph) {
  const link = id => {
    const target = graph.nodes.find(n => n.id === id)
    return `- [${target.title}](${target.id}.md)`
  }
  const parents = graph.edges.filter(e => e[1] === node.id).map(e => link(e[0]))
  const children = graph.edges.filter(e => e[0] === node.id).map(e => link(e[1]))
  return `# ${node.title}\n\n${node.body.trim()}\n\n# 연관 문서\n\n## 선수지식\n\n${parents.join('\n') || '없음.'}\n\n## 더 알아보기\n\n${children.join('\n') || '아직 연결한 문서가 없다.'}\n`
}
// 문서 파일에서 제목과 본문을 복원한다. render의 역함수다.
export function parseDocument(text) {
  const match = text.match(/^# (.+)\n\n([\s\S]*?)\n\n# 연관 문서\n/)
  if (!match) throw Error('unparseable document')
  return {title: match[1], body: match[2]}
}
// topology.json에는 본문을 두지 않는다. 본문은 docs/<id>.md가 유일한 저장소다.
export const stripBodies = graph => ({...graph, nodes: graph.nodes.map(({body, ...node}) => node)})
export function loadGraph(fallbackBodies = []) {
  const graph = read('topology.json', {schemaVersion: 2, revision: 0, nodes: [], edges: [], updatedAt: new Date().toISOString()})
  for (const node of graph.nodes) {
    if (typeof node.body === 'string') continue
    const file = path.join(documentRoot, node.id + '.md')
    if (fs.existsSync(file)) node.body = parseDocument(fs.readFileSync(file, 'utf8')).body
    else {
      const draft = fallbackBodies.find(d => d.id === node.id)
      if (!draft) throw Error('missing document body: ' + node.id)
      node.body = draft.body
    }
  }
  return graph
}
export const stripFences = text => text.replace(/```[\s\S]*?```/g, '')
export const isLegacyBody = body => /^## 정의$/m.test(body) && !/^# 개요$/m.test(body)
export const bodyLinks = body => [...stripFences(body).matchAll(/\]\(([a-z0-9][a-z0-9-]*)\.md\)/g)].map(m => m[1])
function checkLegacyBody(body) {
  const headings = body.split('\n').filter(line => /^#{1,6} /.test(line))
  const expected = ['## 정의', '## 성질', '## 활용', '## 기타 참고 문헌']
  if (JSON.stringify(headings) !== JSON.stringify(expected)) throw Error('legacy body headings must match')
  const withoutBlocks = body.replace(/\$\$[\s\S]*?\$\$/g, '')
  if (withoutBlocks.includes('$')) throw Error('use matched display math only')
}
export function checkBody(body, {legacy = false} = {}) {
  if (typeof body !== 'string' || !body.trim()) throw Error('invalid body')
  if ((body.match(/```/g) || []).length % 2) throw Error('unclosed code fence')
  if (body.includes('# 연관 문서')) throw Error('relations are generated')
  if (body.split('\n').length > MAX_LINES - 20) throw Error(`body exceeds ${MAX_LINES - 20} lines; split into several vertices`)
  if (legacy && isLegacyBody(body)) return checkLegacyBody(body)
  const text = stripFences(body)
  const h1 = text.split('\n').filter(line => /^# /.test(line))
  if (JSON.stringify(h1) !== JSON.stringify(SECTIONS)) throw Error('H1 sections must be exactly 개요, 직관, 정의, 성질, 활용 in this order')
  if (!text.trimStart().startsWith('# 개요')) throw Error('body must start with # 개요')
  const parts = body.split(/^# (?:개요|직관|정의|성질|활용)$/m).slice(1)
  parts.forEach((part, i) => { if (!part.replace(/^\[\^[^\]]+\]:.*$/gm, '').trim()) throw Error('empty section: ' + SECTIONS[i]) })
  const withoutMath = text.replace(/\$\$[\s\S]*?\$\$/g, '')
  if (withoutMath.includes('$')) throw Error('use matched display math ($$ blocks) only; no inline $')
  const used = new Set([...text.matchAll(/\[\^([^\]\s]+)\](?!:)/g)].map(m => m[1]))
  const defined = new Set([...text.matchAll(/^\[\^([^\]\s]+)\]:/gm)].map(m => m[1]))
  for (const u of used) if (!defined.has(u)) throw Error('undefined footnote: ' + u)
  for (const d of defined) if (!used.has(d)) throw Error('unused footnote: ' + d)
}
export function checkLinks(graph) {
  const ids = new Set(graph.nodes.map(n => n.id))
  for (const node of graph.nodes) for (const id of bodyLinks(node.body)) if (!ids.has(id)) throw Error(`dangling body link ${id}.md in ${node.id}`)
}
