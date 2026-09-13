import fs from 'node:fs'
import {api, stop} from './run-api.mjs'
const [service, route, filename] = process.argv.slice(2)
try {
  const body = filename ? JSON.parse(fs.readFileSync(filename, 'utf8')) : route === 'pop' ? {} : undefined
  console.log(JSON.stringify(await api(service, route, body)))
} finally { stop() }
