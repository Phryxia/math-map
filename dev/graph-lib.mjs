// 수학 지도 문서 파싱과 DAG 질의. fs 접근은 loadDocs 한 곳에만 둔다.
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

export const ID_RE = /^[a-z0-9][a-z0-9-]*$/
export const TAG_RE = /(?<=^|\s)#([a-z][a-z0-9_]*)\b/g
export const RELATED_HEADING = '# 연관 문서'
export const PARENTS_HEADING = '## 선수지식'
export const CHILDREN_HEADING = '## 더 알아보기'
export const EMPTY_PARENTS = '없음.'
export const EMPTY_CHILDREN = '아직 연결한 문서가 없다.'

export const repoRoot = () => path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
export const docsDirDefault = () => path.join(repoRoot(), 'docs')

// ---------- 파싱 ----------

export function linkTargetToId(target) {
  let t = target.trim()
  if (/^[a-z]+:\/\//.test(t)) return null
  t = t.replace(/^\.\//, '').replace(/#.*$/, '')
  if (!t.endsWith('.md')) return null
  const id = t.slice(0, -3)
  return ID_RE.test(id) ? id : null
}

export function extractTitle(text) {
  const m = text.match(/^# (.+?)\s*$/m)
  if (!m || m[1] === RELATED_HEADING.slice(2)) return null
  return m[1]
}

const stripFences = text => text.replace(/^(```|~~~)[\s\S]*?^\1[^\n]*$/gm, '')
const stripInlineCode = text => text.replace(/`[^`\n]*`/g, '')
const stripHeadings = text => text.replace(/^#{1,6}\s[^\n]*$/gm, '')
const stripUrls = text => text.replace(/https?:\/\/\S+/g, '')

export function extractTags(text) {
  const masked = stripUrls(stripHeadings(stripInlineCode(stripFences(text))))
  const tags = []
  for (const m of masked.matchAll(TAG_RE)) if (!tags.includes(m[1])) tags.push(m[1])
  return tags
}

function parseLinkList(block, section, problems) {
  const ids = []
  for (const line of block.split('\n')) {
    const m = line.match(/^\s*[-*]\s+\[[^\]]*\]\(([^)]+)\)/)
    if (!m) continue
    const id = linkTargetToId(m[1])
    if (!id) { problems.push({code: 'NON_MD_LINK', detail: `${section}: ${m[1]}`}); continue }
    if (ids.includes(id)) { problems.push({code: 'DUPLICATE_LINK', detail: `${section}: ${id}`}); continue }
    ids.push(id)
  }
  return ids
}

export function extractRelatedSection(text) {
  const problems = []
  const idx = text.lastIndexOf(`\n${RELATED_HEADING}`)
  const start = idx >= 0 ? idx + 1 : text.startsWith(RELATED_HEADING) ? 0 : -1
  if (start < 0) return {parents: [], children: [], problems: [{code: 'NO_RELATED_SECTION', detail: `${RELATED_HEADING} 절이 없다`}]}
  const related = text.slice(start)
  const pIdx = related.indexOf(`\n${PARENTS_HEADING}`)
  const cIdx = related.indexOf(`\n${CHILDREN_HEADING}`)
  if (pIdx < 0) problems.push({code: 'NO_PARENTS_SECTION', detail: `${PARENTS_HEADING} 절이 없다`})
  if (cIdx < 0) problems.push({code: 'NO_CHILDREN_SECTION', detail: `${CHILDREN_HEADING} 절이 없다`})
  let parents = [], children = []
  if (pIdx >= 0) parents = parseLinkList(related.slice(pIdx, cIdx > pIdx ? cIdx : undefined), 'parents', problems)
  if (cIdx >= 0) children = parseLinkList(related.slice(cIdx, pIdx > cIdx ? pIdx : undefined), 'children', problems)
  return {parents, children, problems}
}

export function parseDoc(id, text, file = `${id}.md`) {
  const {parents, children, problems} = extractRelatedSection(text)
  if (!ID_RE.test(id)) problems.push({code: 'BAD_ID_FORMAT', detail: id})
  if (parents.includes(id) || children.includes(id)) problems.push({code: 'SELF_LINK', detail: id})
  return {id, file, title: extractTitle(text) ?? id, parents, children, tags: extractTags(text), problems, lines: text.split('\n').length}
}

export function loadDocs(docsDir = docsDirDefault()) {
  return fs.readdirSync(docsDir).filter(f => f.endsWith('.md')).sort()
    .map(f => parseDoc(f.slice(0, -3), fs.readFileSync(path.join(docsDir, f), 'utf8'), path.join(docsDir, f)))
}

// ---------- 그래프 ----------

export function buildGraph(docs) {
  const map = new Map(docs.map(d => [d.id, d]))
  const adj = new Map(), radj = new Map()
  const ensure = id => { if (!adj.has(id)) adj.set(id, new Set()); if (!radj.has(id)) radj.set(id, new Set()) }
  for (const d of docs) ensure(d.id)
  const sources = new Map()
  const addEdge = (from, to, source) => {
    ensure(from); ensure(to)
    adj.get(from).add(to); radj.get(to).add(from)
    const key = `${from}\0${to}`
    sources.set(key, sources.has(key) && sources.get(key) !== source ? 'both' : source)
  }
  for (const d of docs) {
    for (const p of d.parents) addEdge(p, d.id, 'parents')
    for (const c of d.children) addEdge(d.id, c, 'children')
  }
  const edges = [...sources].map(([k, source]) => { const [from, to] = k.split('\0'); return {from, to, source} })
    .sort((a, b) => a.from.localeCompare(b.from) || a.to.localeCompare(b.to))
  return {docs: map, edges, adj, radj}
}

export const loadGraph = (docsDir = docsDirDefault()) => buildGraph(loadDocs(docsDir))

const sorted = set => [...set].sort()
export const hasNode = (g, id) => g.docs.has(id)
export const parentsOf = (g, id) => sorted(g.radj.get(id) ?? [])
export const childrenOf = (g, id) => sorted(g.adj.get(id) ?? [])
export const roots = g => sorted([...g.docs.keys()].filter(id => g.radj.get(id).size === 0))
export const leaves = g => sorted([...g.docs.keys()].filter(id => g.adj.get(id).size === 0))
export const isolated = g => sorted([...g.docs.keys()].filter(id => g.adj.get(id).size === 0 && g.radj.get(id).size === 0))

function bfs(next, start) {
  const seen = new Set([start]), order = [], queue = [start]
  while (queue.length) {
    const cur = queue.shift()
    for (const n of sorted(next.get(cur) ?? [])) if (!seen.has(n)) { seen.add(n); order.push(n); queue.push(n) }
  }
  return order
}
export const ancestors = (g, id) => bfs(g.radj, id)
export const descendants = (g, id) => bfs(g.adj, id)

export function topoSort(g) {
  const ids = sorted(g.adj.keys())
  const indeg = new Map(ids.map(id => [id, g.radj.get(id).size]))
  const ready = ids.filter(id => indeg.get(id) === 0)
  const order = []
  while (ready.length) {
    ready.sort()
    const id = ready.shift()
    order.push(id)
    for (const c of g.adj.get(id)) { indeg.set(c, indeg.get(c) - 1); if (indeg.get(c) === 0) ready.push(c) }
  }
  return {order, cyclic: ids.filter(id => indeg.get(id) > 0)}
}

// Tarjan SCC. 크기 2 이상 SCC와 self-loop를 한 사이클 경로로 펼쳐 돌려준다.
export function findCycles(g) {
  let index = 0
  const idx = new Map(), low = new Map(), onStack = new Set(), stack = [], sccs = []
  const strong = v => {
    idx.set(v, index); low.set(v, index); index++
    stack.push(v); onStack.add(v)
    for (const w of g.adj.get(v)) {
      if (!idx.has(w)) { strong(w); low.set(v, Math.min(low.get(v), low.get(w))) }
      else if (onStack.has(w)) low.set(v, Math.min(low.get(v), idx.get(w)))
    }
    if (low.get(v) === idx.get(v)) {
      const scc = []
      let w
      do { w = stack.pop(); onStack.delete(w); scc.push(w) } while (w !== v)
      sccs.push(scc)
    }
  }
  for (const v of sorted(g.adj.keys())) if (!idx.has(v)) strong(v)
  const cycles = []
  for (const scc of sccs) {
    if (scc.length === 1 && !g.adj.get(scc[0]).has(scc[0])) continue
    const inScc = new Set(scc)
    const start = sorted(scc)[0]
    const path = findPath(g, start, start, inScc)
    cycles.push(path ?? [start, start])
  }
  return cycles
}

// from에서 to까지 adj를 따라가는 경로. from===to 이면 from을 지나는 사이클을 찾는다.
function findPath(g, from, to, allowed = null) {
  const prev = new Map([[from, null]])
  const queue = [from]
  while (queue.length) {
    const cur = queue.shift()
    for (const n of sorted(g.adj.get(cur) ?? [])) {
      if (allowed && !allowed.has(n)) continue
      if (n === to) {
        const path = [to]
        for (let p = cur; p !== null; p = prev.get(p)) path.unshift(p)
        return path
      }
      if (!prev.has(n)) { prev.set(n, cur); queue.push(n) }
    }
  }
  return null
}

// from(선수지식) → to(후속) 간선을 더했을 때 순환이 생기는가.
export function wouldCreateCycle(g, from, to) {
  if (from === to) return {cycle: true, path: [from, from], existing: false}
  const existing = g.adj.get(from)?.has(to) ?? false
  if (!g.adj.has(to) || !g.adj.has(from)) return {cycle: false, path: [], existing}
  const back = findPath(g, to, from)
  if (back) return {cycle: true, path: [from, ...back], existing}
  return {cycle: false, path: [], existing}
}

export function validate(g) {
  const issues = []
  for (const d of g.docs.values()) {
    for (const p of d.problems) issues.push({kind: 'PARSE', doc: d.id, message: `${p.code}: ${p.detail}`})
    for (const p of d.parents) {
      if (p === d.id) continue
      if (!g.docs.has(p)) issues.push({kind: 'BROKEN_LINK', doc: d.id, target: p, section: 'parents', message: `${d.id}의 선수지식 ${p}.md가 없다`})
      else if (!g.docs.get(p).children.includes(d.id)) issues.push({kind: 'ASYMMETRIC', doc: d.id, target: p, section: 'parents', message: `${d.id}의 선수지식에 ${p}가 있으나 ${p}의 더 알아보기에 ${d.id}가 없다`, fix: `${p}.md 더 알아보기에 - [${d.title}](${d.id}.md) 추가`})
    }
    for (const c of d.children) {
      if (c === d.id) continue
      if (!g.docs.has(c)) issues.push({kind: 'BROKEN_LINK', doc: d.id, target: c, section: 'children', message: `${d.id}의 더 알아보기 ${c}.md가 없다`})
      else if (!g.docs.get(c).parents.includes(d.id)) issues.push({kind: 'ASYMMETRIC', doc: d.id, target: c, section: 'children', message: `${d.id}의 더 알아보기에 ${c}가 있으나 ${c}의 선수지식에 ${d.id}가 없다`, fix: `${c}.md 선수지식에 - [${d.title}](${d.id}.md) 추가`})
    }
    if (g.adj.get(d.id).has(d.id)) issues.push({kind: 'SELF_LOOP', doc: d.id, target: d.id, message: `${d.id}가 자기 자신을 가리킨다`})
  }
  return issues
}

// ---------- 태그 ----------

export const normalizeTag = tag => tag.replace(/^#/, '')

export function tagStats(docs) {
  const m = new Map()
  for (const d of docs) for (const t of d.tags) { if (!m.has(t)) m.set(t, []); m.get(t).push(d.id) }
  return [...m].map(([tag, ids]) => ({tag, count: ids.length, docs: ids.sort()}))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
}
export const untagged = docs => docs.filter(d => d.tags.length === 0).map(d => d.id).sort()
export const docsWithTag = (docs, tag) => { const t = normalizeTag(tag); return docs.filter(d => d.tags.includes(t)).map(d => d.id).sort() }

export function toJSON(g) {
  return {
    nodes: [...g.docs.values()].map(d => ({id: d.id, title: d.title, tags: d.tags, lines: d.lines, parents: parentsOf(g, d.id), children: childrenOf(g, d.id)})),
    edges: g.edges,
  }
}
