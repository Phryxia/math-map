import {test} from 'node:test'
import assert from 'node:assert/strict'
import {namesOfTitle, isStandaloneMention, buildIndex, findUnlinkedMentions} from './mentions.mjs'

const doc = (title, body) => `# ${title}\n\n# 개요\n\n${body}\n\n# 연관 문서\n\n## 선수지식\n\n없음.\n\n## 더 알아보기\n\n아직 연결한 문서가 없다.\n\n#t\n`
const idsOf = report => report.findings.map(f => f.id)

test('제목에서 찾을 이름을 만든다', () => {
  assert.deepEqual(namesOfTitle('Young 의 합성곱 부등식'), ['Young 의 합성곱 부등식', 'Young 합성곱 부등식'])
  assert.deepEqual(namesOfTitle('Néron–Tate 높이와 Mordell–Weil 정리'), ['Néron–Tate 높이와 Mordell–Weil 정리', 'Néron–Tate 높이', 'Mordell–Weil 정리'])
  assert.deepEqual(namesOfTitle('최초 통과 침투'), ['최초 통과 침투'])
  assert.deepEqual(namesOfTitle('군'), [])
})

test('낱말 경계와 조사를 본다', () => {
  assert.equal(isStandaloneMention('외측도는', 1, '측도'), false)
  assert.equal(isStandaloneMention('이 측도를', 2, '측도'), true)
  assert.equal(isStandaloneMention('이 측도론', 2, '측도'), false)
  assert.equal(isStandaloneMention('Cauchy–Schwarz 정리', 7, 'Schwarz 정리'), false)
  assert.equal(isStandaloneMention('LMSE 는', 0, 'LMS'), false)
})

test('링크 없는 첫 언급을 찾고, 링크가 먼저 오면 건너뛴다', () => {
  const index = buildIndex([
    {id: 'wiener-filter', text: doc('Wiener 필터', '정의')},
    {id: 'a', text: doc('A', '잡음을 줄이려고 Wiener 필터를 쓴다.')},
    {id: 'b', text: doc('B', '[Wiener 필터](wiener-filter.md)를 쓰고 다시 Wiener 필터를 쓴다.')},
    {id: 'c', text: doc('C', '먼저 Wiener 필터를 말하고 뒤에 [Wiener 필터](wiener-filter.md)를 링크했다.')},
  ])
  const report = findUnlinkedMentions(index, 'wiener-filter')
  assert.deepEqual(idsOf(report), ['a', 'c'])
  assert.equal(report.findings[0].line, 5)
  assert.equal(report.findings[1].linkedLater, true)
})

test('헤딩, 수식, 코드, 다른 링크의 텍스트, 연관 문서 절, 더 긴 제목 안은 언급이 아니다', () => {
  const index = buildIndex([
    {id: 'fourier-transform', text: doc('Fourier 변환', '정의')},
    {id: 'fft', text: doc('고속 Fourier 변환', '정의')},
    {id: 'a', text: doc('A', '## Fourier 변환\n\n$\\text{Fourier 변환}$ 과 `Fourier 변환` 과 [Fourier 변환의 역](x.md)\n\n고속 Fourier 변환을 쓴다.').replace('없음.', '- [Fourier 변환](fourier-transform.md)')},
  ])
  assert.deepEqual(idsOf(findUnlinkedMentions(index, 'fourier-transform')), [])
  assert.deepEqual(idsOf(findUnlinkedMentions(index, 'fft')), ['a'])
})
