// 사용: node merge-upload-results.mjs <group> ... → sync-result.json {"files":{name:id},"removed":[...]} 와 요약 출력
import fs from 'node:fs'
import {read, write} from './core.mjs'
const groups = process.argv.slice(2)
const files = {}, failed = [], sizeMismatch = [], removed = []
for (const g of groups) {
  const plan = read(`upload-${g}.json`, {entries: []})
  const result = read(`upload-result-${g}.json`, null)
  if (!result) { failed.push({group: g, error: 'no result file'}); continue }
  for (const entry of plan.entries) {
    const r = result.files?.[entry.name]
    if (!r) { failed.push({group: g, name: entry.name, error: 'missing in result'}); continue }
    const id = typeof r === 'string' ? r : r.id
    const size = typeof r === 'string' ? null : r.size
    if (!id) { failed.push({group: g, name: entry.name, error: 'no id'}); continue }
    if (size != null && Number(size) !== entry.size) sizeMismatch.push({name: entry.name, expected: entry.size, actual: size})
    files[entry.name] = id
  }
  for (const f of result.failed || []) failed.push({group: g, ...f})
  for (const t of result.trashed || []) if (!plan.entries.some(e => e.name === t)) removed.push(t)
}
write('sync-result.json', {files, removed})
console.log(JSON.stringify({uploaded: Object.keys(files).length, failed, sizeMismatch, removed}))
