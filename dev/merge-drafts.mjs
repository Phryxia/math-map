// 사용: node merge-drafts.mjs <drafts-dir> [priority]
// 디렉토리의 *.json 초안을 drafts.json에 id 기준으로 병합하고, 큐에 없는 주제는 push한다.
import fs from 'node:fs'
import path from 'node:path'
import {api, stop} from './run-api.mjs'
import {read, write} from './core.mjs'
try {
  const [dir, basePriority = '80'] = process.argv.slice(2)
  const drafts = read('drafts.json', [])
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort()
  const state = await api('queue', 'state')
  const known = new Set([...state.items, ...state.active, ...state.completed].map(i => i.data.id))
  const merged = [], pushed = []
  let priority = Number(basePriority)
  for (const f of files) {
    const draft = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'))
    const {reason = '', depth = 0, ...rest} = draft
    const index = drafts.findIndex(d => d.id === rest.id)
    if (index >= 0) drafts[index] = rest; else drafts.push(rest)
    merged.push(rest.id)
    if (!known.has(rest.id)) {
      await api('queue', 'push', {priority, data: {id: rest.id, title: rest.title, field: rest.field, depth, reason}})
      pushed.push(rest.id)
      priority -= 0.1
    }
  }
  write('drafts.json', drafts)
  console.log(JSON.stringify({merged, pushed, draftCount: drafts.length}))
} finally { stop() }
