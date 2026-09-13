// 사용: node apply-sync.mjs <sync-result.json>
// 업로드 결과 {"files":{"이름":"새DriveID"},"trashed":["이름"...]} 를 drive-files.json에 반영한다.
import fs from 'node:fs'
import {read, write} from './core.mjs'
const result = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))
const manifest = read('drive-files.json', {files: {}})
for (const [name, id] of Object.entries(result.files || {})) {
  if (typeof id !== 'string' || !id) throw Error('invalid id for ' + name)
  manifest.files[name] = id
}
for (const name of result.removed || []) delete manifest.files[name]
manifest.updatedAt = new Date().toISOString()
write('drive-files.json', manifest)
console.log(JSON.stringify({files: Object.keys(manifest.files).length, updated: Object.keys(result.files || {}).length, removed: (result.removed || []).length}))
