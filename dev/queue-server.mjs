import http from 'node:http'
import {PriorityQueue, read, write} from './core.mjs'
const queue = new PriorityQueue(read('queue.json', {next: 0, items: [], active: []}))
write('queue.json', queue.state)
http.createServer(async (req, res) => {
  try {
    let raw = ''
    for await (const part of req) { raw += part; if (raw.length > 2000000) throw Error('request too large') }
    const body = raw ? JSON.parse(raw) : {}
    let result
    if (req.method === 'GET' && req.url === '/state') result = queue.state
    else if (req.method === 'POST' && req.url === '/push') result = queue.push(body.data, body.priority)
    else if (req.method === 'POST' && req.url === '/reprioritize') result = queue.reprioritize(body.id, body.priority, body.reason)
    else if (req.method === 'POST' && req.url === '/pop') result = queue.pop()
    else if (req.method === 'POST' && req.url === '/done') result = queue.done(body.id)
    else throw Error('unknown route')
    write('queue.json', queue.state)
    res.writeHead(200, {'content-type': 'application/json; charset=utf-8'})
    res.end(JSON.stringify(result))
  } catch (error) {
    res.writeHead(400, {'content-type': 'application/json; charset=utf-8'})
    res.end(JSON.stringify({error: error.message}))
  }
}).listen(43171, '127.0.0.1', () => console.log('priority queue http://127.0.0.1:43171'))
