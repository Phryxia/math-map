import {test} from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import {writeTitleList, readTitleList} from './titles.mjs'
import {findLinkMisses, isCheckedTitle} from './link-miss.mjs'

const doc = (title, body) => `# ${title}\n\n# 개요\n\n${body}\n\n# 연관 문서\n\n## 선수지식\n\n없음.\n\n## 더 알아보기\n\n아직 연결한 문서가 없다.\n\n#t\n`

test('제목 목록 파일을 쓰고 다시 읽는다', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'titles-'))
  fs.writeFileSync(path.join(dir, 'b.md'), doc('B 정리', '본문'))
  fs.writeFileSync(path.join(dir, 'a.md'), doc('A 공식', '본문'))
  const listPath = path.join(dir, 'titles.tsv')
  writeTitleList(dir, listPath)
  assert.equal(fs.readFileSync(listPath, 'utf8'), 'a\tA 공식\nb\tB 정리\n')
  assert.deepEqual(readTitleList(listPath), [{id: 'a', title: 'A 공식'}, {id: 'b', title: 'B 정리'}])
})

test('검사 대상 제목은 예전 손 검사와 같다', () => {
  assert.equal(isCheckedTitle('Wiener 필터'), true)
  assert.equal(isCheckedTitle('평균값 정리'), true)
  assert.equal(isCheckedTitle('측도'), false)
  assert.equal(isCheckedTitle('$L^p$ 공간'), false)
})

test('링크가 없는 언급만 보고하고, strict 면 링크가 뒤에 온 언급도 보고한다', () => {
  const titles = [{id: 'wiener-filter', title: 'Wiener 필터'}, {id: 'a', title: 'A'}, {id: 'b', title: 'B'}]
  const documents = [
    {id: 'a', text: doc('A', '잡음을 줄이려고 Wiener 필터를 쓴다.')},
    {id: 'b', text: doc('B', '먼저 Wiener 필터를 말하고 뒤에 [Wiener 필터](wiener-filter.md)를 링크했다.')},
  ]
  assert.deepEqual(findLinkMisses(titles, documents).map(m => `${m.id}->${m.target}`), ['a->wiener-filter'])
  assert.deepEqual(findLinkMisses(titles, documents, {strict: true}).map(m => `${m.id}->${m.target}`), ['a->wiener-filter', 'b->wiener-filter'])
})
