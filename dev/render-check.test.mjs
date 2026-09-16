import {test} from 'node:test'
import assert from 'node:assert/strict'
import {checkText, extractMath} from './render-check.mjs'

test('첨자 밑줄이 문단을 가로질러 기울임이 되면 잡는다', () => {
  const bad = checkText('$\\mathrm{GL}_n$ 에서는 좋다. 모임이 $\\Pi_\\varphi$ 다.')
  assert.equal(bad.length, 2)
  assert.equal(bad[0].kind, 'inline')
})

test('밑줄을 이스케이프하면 통과한다', () => {
  assert.deepEqual(checkText('$\\mathrm{GL}\\_n$ 에서는 좋다. 모임이 $\\Pi_\\varphi$ 다.'), [])
})

test('표 셀 안의 절댓값 기호는 잡고, 이스케이프하면 통과한다', () => {
  const tbl = h => `| a | b |\n| - | - |\n| $x$ | $e^{-${h}z${h}}$ |\n`
  assert.equal(checkText(tbl('|')).length, 1)
  assert.deepEqual(checkText(tbl('\\|')), [])
})

test('코드 펜스와 인라인 코드 안의 달러는 무시한다', () => {
  assert.deepEqual(extractMath('```py\nx = "$a_b$"\n```\n`$c_d$` 와 $e_f$'), [{line: 4, kind: 'inline', text: 'e_f'}])
})

test('블록 수식은 줄 첫머리가 리스트나 헤딩으로 읽힐 때만 잡는다', () => {
  assert.deepEqual(checkText('$$\nA_{i}=\\sum_{j} B_{j}\n$$'), [])
  assert.equal(checkText('$$\n- \\otimes N \\dashv \\mathrm{Hom}(N,-)\n$$').length, 1)
})
