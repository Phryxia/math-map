import test from 'node:test'
import assert from 'node:assert/strict'
import {PriorityQueue, validate, checkBody, render, parseDocument, stripBodies} from './core.mjs'
test('parseDocument inverts render and stripBodies drops bodies', () => {
  const graph = {nodes: [{id: 'a', title: '가', body: '# 개요\n\nx\n\n# 직관\n\ny\n\n# 정의\n\nz\n\n# 성질\n\nw\n\n# 활용\n\nv'}, {id: 'b', title: '나', body: '# 개요\n\n1\n\n# 직관\n\n2\n\n# 정의\n\n3\n\n# 성질\n\n4\n\n# 활용\n\n5'}], edges: [['a', 'b']]}
  for (const node of graph.nodes) assert.deepEqual(parseDocument(render(node, graph)), {title: node.title, body: node.body})
  assert.equal(stripBodies(graph).nodes.some(n => 'body' in n), false)
})
test('priority, stable tie, empty and active recovery', () => {
  const q = new PriorityQueue()
  q.push('low', 1)
  q.push('first', 5)
  q.push('second', 5)
  assert.equal(q.pop().item.data, 'first')
  assert.equal(q.pop().item.data, 'second')
  assert.equal(q.pop().item.data, 'low')
  assert.deepEqual(q.pop(), {empty: true})
  assert.equal(new PriorityQueue(q.state).state.active.length, 3)
  assert.throws(() => q.push('bad', NaN))
})
test('diamond accepted; cycle and dangling edge rejected', () => {
  const nodes = ['a', 'b', 'c', 'd'].map(id => ({id}))
  const edges = [['a', 'b'], ['a', 'c'], ['b', 'd'], ['c', 'd']]
  assert.equal(validate({nodes, edges}).valid, true)
  assert.throws(() => validate({nodes, edges: [...edges, ['d', 'a']]}), /cycle/)
  assert.throws(() => validate({nodes, edges: [['a', 'z']]}), /missing/)
})
test('section structure, display math, fences and footnotes', () => {
  const body = '# 개요\n\n설명[^1]\n\n# 직관\n\n그림\n\n# 정의\n\n$$\nx=1\n$$\n\n# 성질\n\n```mermaid\ngraph TD\nA-->B\n```\n\n# 활용\n\n```python\nprint("$")\n```\n\n[^1]: https://example.org'
  checkBody(body)
  assert.throws(() => checkBody(body.replace('$$\nx=1\n$$', '$$x=1$')), /display math/)
  assert.throws(() => checkBody(body.replace('# 직관\n\n그림\n\n', '')), /H1 sections/)
  assert.throws(() => checkBody(body.replace('[^1]: https://example.org', '')), /undefined footnote/)
  assert.throws(() => checkBody(body + '\n# 연관 문서'), /relations/)
  const legacy = '설명\n## 정의\n$$x=1$$\n## 성질\n## 활용\n## 기타 참고 문헌'
  checkBody(legacy, {legacy: true})
  assert.throws(() => checkBody(legacy), /H1 sections/)
})

test('completed state survives JSON restore and reprioritization preserves FIFO', () => {
 const q = new PriorityQueue()
 const a=q.push({id:'a'},1), b=q.push({id:'b'},2), c=q.push({id:'c'},1)
 q.reprioritize(b.id,1,'same priority')
 assert.equal(q.pop().item.id,a.id)
 q.done(a.id)
 const restored=new PriorityQueue(JSON.parse(JSON.stringify(q.state)))
 assert.equal(restored.state.completed[0].data.id,'a')
 assert.equal(restored.pop().item.id,b.id)
 assert.equal(restored.pop().item.id,c.id)
 assert.deepEqual(restored.pop(),{empty:true})
})
test('malformed edges, duplicate edges and missing vertices rejected', () => {
 assert.throws(()=>validate({nodes:[{id:'a'}],edges:[['a','b']]}))
 assert.throws(()=>validate({nodes:[{id:'a'},{id:'b'}],edges:[['a','b'],['a','b']]}))
 assert.throws(()=>validate({nodes:[{id:'a'}],edges:[['a']]}))
})
