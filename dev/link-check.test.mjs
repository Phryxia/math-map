import {test} from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import {findBrokenLinks, checkRepository, localPathOf} from './link-check.mjs'

const existsIn = files => absolutePath => files.includes(path.basename(absolutePath)) || files.includes(path.relative('/docs', absolutePath))

test('본문에서 없는 문서를 가리키는 링크를 잡는다', () => {
  const text = '# a\n\n본문의 [Brun 정리](brun-theorem.md) 와 [b](b.md).\n'
  const problems = findBrokenLinks(text, '/docs', existsIn(['b.md']))
  assert.equal(problems.length, 1)
  assert.equal(problems[0].kind, 'MISSING')
  assert.equal(problems[0].target, 'brun-theorem.md')
  assert.equal(problems[0].line, 3)
})

test('없는 그림 파일과 중첩 링크를 잡는다', () => {
  const text = '![그림](figures/a-plot.svg)\n\n[[최대 절댓값 원리](m.md)](m.md)\n'
  const problems = findBrokenLinks(text, '/docs', existsIn(['m.md']))
  assert.deepEqual(problems.map(p => p.kind), ['MISSING', 'NESTED'])
})

test('외부 주소, 조각 링크, 코드와 수식 안의 대괄호는 보지 않는다', () => {
  const text = [
    '[위키](https://example.com/x.md) [절](#개요)',
    '`[x](y.md)` 와 $E[X](\\omega)$',
    '```js', 'const s = "[a](zzz.md)"', '```',
    '$$', '\\mathcal B[f](\\zeta)', '$$',
  ].join('\n')
  assert.deepEqual(findBrokenLinks(text, '/docs', () => false), [])
})

test('조각과 퍼센트 인코딩을 떼고 경로를 푼다', () => {
  assert.equal(localPathOf('a.md#%EA%B0%9C%EC%9A%94'), 'a.md')
  assert.equal(localPathOf('figures/%ED%95%9C.svg'), 'figures/한.svg')
  assert.equal(localPathOf('mailto:x@y'), null)
})

test('저장소 전체를 검사하면 README 의 docs/ 링크도 본다', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'link-check-'))
  fs.mkdirSync(path.join(root, 'docs'))
  fs.writeFileSync(path.join(root, 'docs', 'a.md'), '# a\n\n[b](b.md)\n')
  fs.writeFileSync(path.join(root, 'README.md'), '- [a](docs/a.md)\n- [c](docs/c.md)\n')
  const problems = checkRepository(root)
  assert.deepEqual(problems.map(p => `${p.file} ${p.target}`), ['docs/a.md b.md', 'README.md docs/c.md'])
  assert.deepEqual(checkRepository(root, ['a']).map(p => p.target), ['b.md'])
})
