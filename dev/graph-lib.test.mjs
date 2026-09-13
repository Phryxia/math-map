import {test} from 'node:test'
import assert from 'node:assert/strict'
import * as lib from './graph-lib.mjs'

const doc = (id, {title = id, parents = [], children = [], body = '본문', tail = ''} = {}) => [
  `# ${title}`, '', '# 개요', '', body, '', '# 연관 문서', '', '## 선수지식', '',
  parents.length ? parents.map(p => `- [${p}](${p}.md)`).join('\n') : '없음.', '', '## 더 알아보기', '',
  children.length ? children.map(c => `- [${c}](${c}.md)`).join('\n') : '아직 연결한 문서가 없다.', '', tail,
].join('\n')

const graphOf = specs => lib.buildGraph(Object.entries(specs).map(([id, s]) => lib.parseDoc(id, doc(id, s))))

test('extractTags: 코드블록·인라인코드·헤딩·URL·대문자는 제외한다', () => {
  const text = [
    '# 제목 #heading_not_tag', '', '복잡도 부류 #P 는 태그가 아니다.', '`#inline_code` 도 아니다.',
    '```python', '#comment_in_code = 1', '```', 'https://example.com/#fragment 도 아니다.',
    '#category_theory #algebra', '#category_theory', '#a1_b #1bad',
  ].join('\n')
  assert.deepEqual(lib.extractTags(text), ['category_theory', 'algebra', 'a1_b'])
})

test('extractRelatedSection: 본문 링크는 무시하고 마지막 연관 문서 절만 읽는다', () => {
  const text = doc('x', {parents: ['a'], children: ['b', 'c'], body: '본문의 [d](d.md) 링크는 간선이 아니다. # 연관 문서 라는 말이 본문에 있어도 된다.'})
  const r = lib.extractRelatedSection(text)
  assert.deepEqual(r.parents, ['a']); assert.deepEqual(r.children, ['b', 'c']); assert.deepEqual(r.problems, [])
})

test('extractRelatedSection: 빈 절과 변형 링크', () => {
  assert.deepEqual(lib.extractRelatedSection(doc('x')), {parents: [], children: [], problems: []})
  const t = doc('x').replace('없음.', '- [a](./a.md#anchor)\n- [b](https://x.y/b.md)\n- [a](a.md)')
  const r = lib.extractRelatedSection(t)
  assert.deepEqual(r.parents, ['a'])
  assert.deepEqual(r.problems.map(p => p.code), ['NON_MD_LINK', 'DUPLICATE_LINK'])
  assert.equal(lib.extractRelatedSection('# 제목\n\n본문').problems[0].code, 'NO_RELATED_SECTION')
  assert.equal(lib.extractRelatedSection('# 제목\n\n# 연관 문서\n\n## 더 알아보기\n\n없음.').problems[0].code, 'NO_PARENTS_SECTION')
})

test('parseDoc: 제목, 태그, self-link', () => {
  const d = lib.parseDoc('x', doc('x', {title: '엑스', parents: ['x'], tail: '#tag_one'}))
  assert.equal(d.title, '엑스'); assert.deepEqual(d.tags, ['tag_one'])
  assert.deepEqual(d.problems.map(p => p.code), ['SELF_LINK'])
})

test('buildGraph: 양쪽 선언을 합집합으로, source 표기', () => {
  const g = graphOf({a: {children: ['b']}, b: {parents: ['a'], children: ['c']}, c: {}})
  assert.deepEqual(g.edges, [{from: 'a', to: 'b', source: 'both'}, {from: 'b', to: 'c', source: 'children'}])
  assert.deepEqual(lib.parentsOf(g, 'c'), ['b']); assert.deepEqual(lib.childrenOf(g, 'a'), ['b'])
  assert.deepEqual(lib.roots(g), ['a']); assert.deepEqual(lib.leaves(g), ['c'])
  assert.deepEqual(lib.ancestors(g, 'c'), ['b', 'a']); assert.deepEqual(lib.descendants(g, 'a'), ['b', 'c'])
})

test('validate: 깨진 링크, 비대칭, self-loop', () => {
  const g = graphOf({a: {children: ['b', 'ghost']}, b: {parents: ['c']}, c: {parents: ['c']}})
  const kinds = lib.validate(g).map(i => `${i.kind}:${i.doc}->${i.target}`)
  assert.deepEqual(kinds.sort(), ['ASYMMETRIC:a->b', 'ASYMMETRIC:b->c', 'BROKEN_LINK:a->ghost', 'PARSE:c->undefined', 'SELF_LOOP:c->c'].sort())
  const fix = lib.validate(g).find(i => i.kind === 'ASYMMETRIC' && i.doc === 'a').fix
  assert.equal(fix, 'b.md 선수지식에 - [a](a.md) 추가')
  assert.deepEqual(lib.validate(graphOf({a: {children: ['b']}, b: {parents: ['a']}})), [])
})

test('topoSort: 간선이 order 를 따르고 순환 정점을 보고한다', () => {
  const g = graphOf({a: {children: ['b', 'c']}, b: {parents: ['a'], children: ['d']}, c: {parents: ['a'], children: ['d']}, d: {parents: ['b', 'c']}})
  const {order, cyclic} = lib.topoSort(g)
  assert.deepEqual(cyclic, [])
  for (const e of g.edges) assert.ok(order.indexOf(e.from) < order.indexOf(e.to))
  const cyc = graphOf({a: {children: ['b']}, b: {parents: ['a'], children: ['c']}, c: {parents: ['b'], children: ['a']}, d: {}})
  assert.deepEqual(lib.topoSort(cyc).cyclic, ['a', 'b', 'c'])
})

test('findCycles', () => {
  assert.deepEqual(lib.findCycles(graphOf({a: {children: ['b']}, b: {}})), [])
  assert.deepEqual(lib.findCycles(graphOf({a: {children: ['b']}, b: {children: ['a']}})), [['a', 'b', 'a']])
  assert.deepEqual(lib.findCycles(graphOf({a: {children: ['b']}, b: {children: ['c']}, c: {children: ['a']}, d: {children: ['a']}})), [['a', 'b', 'c', 'a']])
  assert.deepEqual(lib.findCycles(graphOf({a: {children: ['a']}})), [['a', 'a']])
})

test('wouldCreateCycle', () => {
  const g = graphOf({a: {children: ['b']}, b: {parents: ['a'], children: ['c']}, c: {parents: ['b']}, z: {}})
  assert.deepEqual(lib.wouldCreateCycle(g, 'c', 'a'), {cycle: true, path: ['c', 'a', 'b', 'c'], existing: false})
  assert.deepEqual(lib.wouldCreateCycle(g, 'a', 'c'), {cycle: false, path: [], existing: false})
  assert.deepEqual(lib.wouldCreateCycle(g, 'a', 'b'), {cycle: false, path: [], existing: true})
  assert.equal(lib.wouldCreateCycle(g, 'a', 'a').cycle, true)
  assert.equal(lib.wouldCreateCycle(g, 'z', 'a').cycle, false)
  assert.equal(lib.wouldCreateCycle(g, 'c', 'new-node').cycle, false)
})

test('태그 통계', () => {
  const docs = [lib.parseDoc('a', doc('a', {tail: '#x #y'})), lib.parseDoc('b', doc('b', {tail: '#x'})), lib.parseDoc('c', doc('c'))]
  assert.deepEqual(lib.tagStats(docs), [{tag: 'x', count: 2, docs: ['a', 'b']}, {tag: 'y', count: 1, docs: ['a']}])
  assert.deepEqual(lib.untagged(docs), ['c'])
  assert.deepEqual(lib.docsWithTag(docs, '#y'), ['a'])
})

test('실제 docs smoke: 파싱과 검증이 예외 없이 끝난다', () => {
  const g = lib.loadGraph()
  assert.ok(g.docs.size >= 141)
  lib.validate(g); lib.findCycles(g); lib.topoSort(g)
  for (const d of g.docs.values()) assert.ok(lib.ID_RE.test(d.id), d.id)
})
