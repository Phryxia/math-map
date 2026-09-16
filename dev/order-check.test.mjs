import {test} from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import {loadGraph} from './graph-lib.mjs'
import {checkOrder} from './order-check.mjs'

const doc = (title, parents, children) => `# ${title}\n\n# 개요\n\n# 연관 문서\n\n## 선수지식\n\n${parents.length ? parents.map(p => `- [${p}](${p}.md)`).join('\n') : '없음.'}\n\n## 더 알아보기\n\n${children.length ? children.map(c => `- [${c}](${c}.md)`).join('\n') : '아직 연결한 문서가 없다.'}\n\n#t\n`

function fixture(order) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'order-'))
  fs.writeFileSync(path.join(dir, 'root.md'), doc('root', [], order))
  fs.writeFileSync(path.join(dir, 'a.md'), doc('a', ['root'], ['b']))
  fs.writeFileSync(path.join(dir, 'b.md'), doc('b', ['root', 'a'], []))
  return dir
}

test('조상이 뒤에 오면 잡는다', () => {
  const dir = fixture(['b', 'a'])
  const bad = checkOrder(loadGraph(dir), dir)
  assert.equal(bad.length, 1)
  assert.equal(bad[0].after, 'a')
})

test('선수관계 순이면 통과한다', () => {
  const dir = fixture(['a', 'b'])
  assert.deepEqual(checkOrder(loadGraph(dir), dir), [])
})
