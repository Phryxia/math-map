// 사용: node check-draft.mjs <draft.json> [planned-ids.json]
// 초안 하나를 topology 반영 전에 정적으로 검사한다. 통과하면 {ok:true,...}를 출력한다.
import fs from 'node:fs'
import {read, checkBody, bodyLinks, SECTIONS, stripFences} from './core.mjs'
const [file, plannedFile] = process.argv.slice(2)
const draft = JSON.parse(fs.readFileSync(file, 'utf8'))
const graph = read('topology.json', {nodes: [], edges: []})
const existing = new Set(graph.nodes.map(n => n.id))
const planned = new Set(plannedFile ? JSON.parse(fs.readFileSync(plannedFile, 'utf8')) : [])
const problems = []
const need = (cond, msg) => { if (!cond) problems.push(msg) }
need(typeof draft.id === 'string' && /^[a-z0-9][a-z0-9-]*$/.test(draft.id), 'id must be kebab-case ascii')
need(typeof draft.title === 'string' && draft.title.trim(), 'title required')
need(typeof draft.field === 'string' && draft.field.trim(), 'field required')
need(Array.isArray(draft.parents) && draft.parents.length >= 1, 'parents must be a non-empty array')
for (const p of draft.parents || []) {
  need(p !== draft.id, 'self parent')
  need(existing.has(p) || planned.has(p), `unknown parent ${p}`)
}
try { checkBody(draft.body) } catch (e) { problems.push('body: ' + e.message) }
for (const id of bodyLinks(draft.body || '')) need(existing.has(id) || planned.has(id) || id === draft.id, `body link to unknown document ${id}.md`)
const text = stripFences(draft.body || '')
const fences = (draft.body || '').match(/```[a-z]*/g) || []
const info = {
  id: draft.id,
  lines: (draft.body || '').split('\n').length,
  chars: Array.from(draft.body || '').length,
  mathBlocks: (text.match(/\$\$/g) || []).length / 2,
  mermaid: fences.filter(f => f === '```mermaid').length,
  code: fences.filter(f => f !== '```mermaid' && f !== '```').length,
  footnotes: (text.match(/^\[\^[^\]\s]+\]:/gm) || []).length,
  sections: SECTIONS.map(s => (text.split(s)[1] || '').split(/^# /m)[0].trim().length),
  parents: draft.parents,
  links: bodyLinks(draft.body || ''),
}
if (problems.length) { console.log(JSON.stringify({ok: false, problems, ...info}, null, 1)); process.exit(1) }
console.log(JSON.stringify({ok: true, ...info}))
