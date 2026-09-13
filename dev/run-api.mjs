import {spawn} from 'node:child_process'
import {root} from './core.mjs'
const children = []
export async function api(service, route, body) {
  const port = service === 'queue' ? 43171 : 43172
  const url = `http://127.0.0.1:${port}`
  try { await fetch(url + (service === 'queue' ? '/state' : '/status')) }
  catch {
    const child = spawn(process.execPath, [service === 'queue' ? 'queue-server.mjs' : 'topology-server.mjs'], {cwd: root, stdio:['ignore','pipe','inherit']})
    children.push(child)
    await new Promise((resolve, reject) => { child.stdout.once('data', resolve); child.once('error', reject); child.once('exit', code => reject(Error(`server exited ${code}`))) })
  }
  const response = await fetch(url + '/' + route, body !== undefined ? {method:'POST', headers:{'content-type':'application/json'},body:JSON.stringify(body)} : {})
  const data = await response.json()
  if (!response.ok) throw Error(JSON.stringify(data))
  return data
}
export function stop() { for (const child of children) child.kill() }
process.on('exit', stop)
