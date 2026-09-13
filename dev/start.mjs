import {spawn} from 'node:child_process'
import fs from 'node:fs'
import {root} from './core.mjs'
for (const [script, port] of [['queue-server.mjs',43171],['topology-server.mjs',43172]]) {
  try {
    const r = await fetch(`http://127.0.0.1:${port}/${port === 43171 ? 'state' : 'status'}`)
    if (r.ok) { console.log(`${script} already running`); continue }
  } catch {}
  const log = fs.openSync(`${root}/${script}.log`, 'a')
  const child = spawn(process.execPath, [script], {cwd:root, detached:true,stdio:['ignore',log,log]})
  child.unref()
  fs.closeSync(log)
  console.log(`${script} pid ${child.pid}`)
}
