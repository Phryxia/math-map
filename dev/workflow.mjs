import {api,stop} from './run-api.mjs'
import {read,write} from './core.mjs'
import {checkTime} from './session.mjs'
try {
 const [action, ...rest] = process.argv.slice(2)
 if (action === 'stage') {
  const [ids] = rest
  checkTime('before-vertex', true)
  const state = await api('queue','state')
  const item = state.active[0] || (await api('queue','pop',{})).item
  if (!item) { console.log(JSON.stringify({empty:true})); process.exit(0) }
  const draft = read('drafts.json',[]).find(n => n.id === item.data.id)
  if (!draft) { console.log(JSON.stringify({needsResearch:true,item})); process.exit(0) }
  const {parents,...node} = draft
  const graph = await api('topology','graph')
  const addEdges = parents.map(id => [id,node.id]).filter(edge => !graph.edges.some(e => JSON.stringify(e) === JSON.stringify(edge)))
  const result = await api('topology','transaction',{upsert:[node],addEdges,expectedRevision:graph.revision})
  write('batch.json', {revision: result.revision, queueIds: [item.id], ids: [node.id]})
  checkTime('after-vertex-stage', false)
  console.log(JSON.stringify({...result,queueId:item.id,title:node.title}))
 } else if (action === 'stage-batch') {
  // 큐에서 초안이 준비된 항목을 우선순위 순서로 모두 꺼내 하나의 transaction으로 반영한다.
  checkTime('before-batch', true)
  const limit = Number(rest[0]) || Infinity
  const drafts = read('drafts.json',[])
  const graph = await api('topology','graph')
  let state = await api('queue','state')
  const picked = [...state.active]
  const stageable = state.items.filter(item => drafts.some(d => d.id === item.data.id))
  while (picked.length < limit && stageable.length) {
   const target = stageable.shift()
   const {item} = await api('queue','pop',{})
   if (item.id !== target.id) { await api('queue','reprioritize',{id:item.id,priority:item.priority}).catch(()=>{}) }
   picked.push(item)
  }
  const upsert = [], addEdges = []
  for (const item of picked) {
   const draft = drafts.find(d => d.id === item.data.id)
   if (!draft) continue
   const {parents,...node} = draft
   upsert.push(node)
   for (const parent of parents) {
    const edge = [parent,node.id]
    if (!graph.edges.some(e => JSON.stringify(e) === JSON.stringify(edge)) && !addEdges.some(e => JSON.stringify(e) === JSON.stringify(edge))) addEdges.push(edge)
   }
  }
  if (!upsert.length) { console.log(JSON.stringify({empty:true})); process.exit(0) }
  const result = await api('topology','transaction',{upsert,addEdges,expectedRevision:graph.revision})
  write('batch.json', {revision: result.revision, queueIds: picked.map(i => i.id), ids: upsert.map(n => n.id)})
  checkTime('after-batch-stage', false)
  console.log(JSON.stringify({revision:result.revision,changed:result.changed,removed:result.removed,queueIds:picked.map(i=>i.id),vertexCount:result.vertexCount,edgeCount:result.edgeCount}))
 } else if (action === 'ack') {
  const [revision, queueId, driveTopologyId] = rest
  await api('topology','ack',{revision:Number(revision),driveTopologyId})
  await api('queue','done',{id:Number(queueId)})
  console.log(JSON.stringify(await api('topology','status')))
 } else if (action === 'ack-batch') {
  const [revision, driveTopologyId] = rest
  const batch = read('batch.json', null)
  if (!batch || batch.revision !== Number(revision)) throw Error('batch.json revision mismatch')
  await api('topology','ack',{revision:Number(revision),driveTopologyId})
  for (const id of batch.queueIds) await api('queue','done',{id})
  // 동기화가 끝난 초안은 drafts.json에서 제거한다. 본문의 저장소는 docs/<id>.md다.
  const graph = await api('topology','graph')
  const remaining = read('drafts.json',[]).filter(d => !graph.nodes.some(n => n.id === d.id))
  write('drafts.json', remaining)
  console.log(JSON.stringify({...await api('topology','status'), draftsRemaining: remaining.length}))
 } else throw Error('unknown action')
} finally {stop()}
