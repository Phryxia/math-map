// 사용: node sync-plan.mjs [extraDevFile ...]
// pending-sync.json의 변경 문서와 dev 상태 파일을 Drive에 저장할 계획을 sync-plan.json에 쓴다.
// Drive 커넥터에 내용 갱신 API가 없으므로 기존 파일은 휴지통 이동 후 같은 이름으로 재생성한다.
import fs from 'node:fs'
import path from 'node:path'
import {read, write, root, documentRoot} from './core.mjs'
const pending = read('pending-sync.json', null)
const manifest = read('drive-files.json', {files: {}})
const extra = process.argv.slice(2)
const entries = []
const add = (name, folder, localPath, mimeType) => entries.push({name, folder, localPath, mimeType, existingId: manifest.files[name] || null, size: fs.statSync(localPath).size})
for (const name of pending?.changed || []) add(name, 'docs', path.join(documentRoot, name), 'text/markdown')
const removed = (pending?.removed || []).map(id => ({name: id + '.md', existingId: manifest.files[id + '.md'] || null}))
for (const name of ['topology.json', 'drafts.json', ...extra]) if (fs.existsSync(path.join(root, name))) add(name, 'dev', path.join(root, name), name.endsWith('.json') ? 'application/json' : name.endsWith('.mjs') ? 'text/javascript' : 'text/plain')
write('sync-plan.json', {revision: pending?.revision ?? null, docsFolderId: manifest.docsFolderId, devFolderId: manifest.devFolderId, entries, removed, createdAt: new Date().toISOString()})
console.log(JSON.stringify({revision: pending?.revision ?? null, docs: entries.filter(e => e.folder === 'docs').length, dev: entries.filter(e => e.folder === 'dev').length, removed: removed.length, bytes: entries.reduce((s, e) => s + e.size, 0)}))
