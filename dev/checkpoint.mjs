import {read, write, validate} from './core.mjs'
const graph = read('topology.json', {})
const queue = read('queue.json', {items: [], active: []})
const manifest = read('drive-files.json', {})
const pending = read('pending-sync.json', null)
const report = {
  schemaVersion: 1,
  savedAt: new Date().toISOString(),
  layout: {documents: '../docs', development: '.'},
  drive: {rootFolderId: manifest.rootFolderId, docsFolderId: manifest.docsFolderId, devFolderId: manifest.devFolderId},
  revision: graph.revision,
  validation: read('validation.json', null) || validate(graph),
  pending,
  syncReceipt: read('sync-receipt.json', null),
  active: queue.active,
  queued: queue.items,
  draftCount: read('drafts.json', []).length,
  resume: pending
    ? 'pending.changed 문서와 topology.json을 기존 Drive ID로 저장한 뒤 해당 revision을 ack한다. active 항목 완료와 queue.json 저장 후 계속한다.'
    : 'active부터 복구하고, 없으면 큐에서 pop한다. drafts.json에 초안이 있으면 검토 후 workflow.mjs stage를 실행한다. 새 정점마다 문서와 topology.json을 Drive에 저장한 뒤 ack한다.',
  researchPolicy: '분야 분산과 선수지식을 우선순위에 반영한다. 약한 주제는 보강하고 독립 주제가 늘어나면 분할한다. 사용자가 중단할 때까지 탐색한다.'
}
write('resume.json', report)
console.log(JSON.stringify({revision: report.revision, vertices: graph.nodes.length, edges: graph.edges.length, pending: !!pending, queued: queue.items.length, active: queue.active.length}))
