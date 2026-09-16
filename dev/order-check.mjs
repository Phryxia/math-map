#!/usr/bin/env node
// 더 알아보기 목록이 선수관계 순인지 검사한다.
// 같은 링크 블록(연속된 링크 줄) 안에서 뒤 항목이 앞 항목의 조상이면 순서가 틀린 것이다.
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {loadGraph, ancestors, CHILDREN_HEADING} from './graph-lib.mjs'

const here = path.dirname(fileURLToPath(import.meta.url))
const docsDirDefault = () => path.join(here, '..', 'docs')
const LINK = /^- \[[^\]]*\]\(([a-z0-9][a-z0-9-]*)\.md\)\s*$/

export function checkOrder(g, docsDir) {
  const out = []
  for (const [id, d] of g.docs) {
    const text = fs.readFileSync(path.join(docsDir, `${id}.md`), 'utf8')
    const i = text.lastIndexOf(`\n${CHILDREN_HEADING}`)
    if (i < 0) continue
    const lines = text.slice(i).split('\n')
    let block = []
    const flush = () => {
      for (let a = 0; a < block.length; a++) for (let b = a + 1; b < block.length; b++) {
        if (ancestors(g, block[a]).includes(block[b])) out.push({id, before: block[a], after: block[b], message: `${id}: ${block[b]} 는 ${block[a]} 의 선수지식이므로 앞에 와야 한다`})
      }
      block = []
    }
    for (const l of lines) {
      const m = l.match(LINK)
      if (m && g.docs.has(m[1])) block.push(m[1]); else flush()
    }
    flush()
  }
  return out
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2)
  const di = args.indexOf('--docs')
  const docsDir = di >= 0 ? args[di + 1] : docsDirDefault()
  if (args.includes('help') || args.includes('--help')) {
    console.log('사용법: node dev/order-check.mjs [--json] [--docs <dir>]\n더 알아보기 목록이 선수관계 순인지 검사한다. 어긋난 곳이 있으면 종료코드 1.')
    process.exit(0)
  }
  const bad = checkOrder(loadGraph(docsDir), docsDir)
  if (args.includes('--json')) console.log(JSON.stringify(bad, null, 2))
  else { for (const b of bad) console.log(b.message); console.log(bad.length ? `${bad.length}곳의 순서가 어긋난다` : '문제 없음') }
  process.exit(bad.length ? 1 : 0)
}
