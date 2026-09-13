#!/usr/bin/env node
// 그래프 / 순환 / 태그 CLI. 사용법: node dev/graph.mjs <command> [args] [--json] [--docs <dir>]
import {parseArgs} from 'node:util'
import * as lib from './graph-lib.mjs'

const HELP = `사용법: node dev/graph.mjs <command> [args] [--json] [--docs <dir>]

그래프
  nodes                        정점 목록 (id, 제목)
  edges                        간선 목록 (선수지식 -> 후속)
  node <id>                    제목, 태그, 선수지식, 더 알아보기, 문제점
  parents <id> | children <id> 직접 부모 / 자식
  ancestors <id> | descendants <id>
  roots | leaves | isolated    선수지식 없음 / 더 알아보기 없음 / 둘 다 없음
  topo                         위상순 (순환 정점이 있으면 종료코드 1)
  parse <id>                   문서 파싱 결과
  dump                         전체 스냅샷 JSON

검사
  cycles                       현재 그래프의 순환 (있으면 종료코드 1)
  check-cycle <parent> <child> [--allow-new]
                               parent -> child 간선을 더하면 순환이 생기는지 (생기면 종료코드 1)
  validate                     깨진 링크, 비대칭 간선, self-loop, 파싱 문제 (있으면 종료코드 1)

태그
  tags                         태그별 문서 수
  tags untagged                태그 없는 문서
  tags <tag>                   해당 태그의 문서

종료코드: 0 정상, 1 검사 실패 또는 대상 없음, 2 사용법 오류`

const {values: opts, positionals} = parseArgs({
  allowPositionals: true,
  options: {json: {type: 'boolean', default: false}, docs: {type: 'string'}, 'allow-new': {type: 'boolean', default: false}},
})
const [cmd, ...args] = positionals
const out = v => console.log(opts.json ? JSON.stringify(v, null, 2) : v)
const fail = (msg, code = 2) => { if (opts.json) console.log(JSON.stringify({error: msg})); else console.error(msg); process.exit(code) }
const need = n => { if (args.length < n) fail(`인자 ${n}개가 필요하다\n\n${HELP}`) }

if (!cmd || cmd === 'help') { console.log(HELP); process.exit(0) }

const docs = lib.loadDocs(opts.docs ?? lib.docsDirDefault())
const g = lib.buildGraph(docs)
const title = id => g.docs.get(id)?.title ?? '?'
const requireNode = id => { if (!lib.hasNode(g, id)) fail(`문서 없음: ${id}`, 1) }
const listOut = ids => out(opts.json ? ids : ids.map(id => `${id}\t${title(id)}`).join('\n') || '(없음)')

switch (cmd) {
  case 'nodes':
    out(opts.json ? lib.toJSON(g).nodes : [...g.docs.values()].map(d => `${d.id}\t${d.title}`).join('\n') + `\n${g.docs.size} nodes`)
    break
  case 'edges':
    out(opts.json ? g.edges : g.edges.map(e => `${e.from} -> ${e.to}`).join('\n') + `\n${g.edges.length} edges`)
    break
  case 'node': {
    need(1); requireNode(args[0])
    const d = g.docs.get(args[0])
    const info = {id: d.id, title: d.title, lines: d.lines, tags: d.tags,
      parents: lib.parentsOf(g, d.id).map(id => ({id, title: title(id)})),
      children: lib.childrenOf(g, d.id).map(id => ({id, title: title(id)})), problems: d.problems}
    out(opts.json ? info : [
      `${d.id}: ${d.title} (${d.lines}줄)`,
      `태그: ${d.tags.map(t => '#' + t).join(' ') || '(없음)'}`,
      `선수지식:`, ...info.parents.map(p => `  - ${p.id}\t${p.title}`),
      `더 알아보기:`, ...info.children.map(c => `  - ${c.id}\t${c.title}`),
      ...(d.problems.length ? ['문제점:', ...d.problems.map(p => `  - ${p.code}: ${p.detail}`)] : []),
    ].join('\n'))
    break
  }
  case 'parents': case 'children': case 'ancestors': case 'descendants': {
    need(1); requireNode(args[0])
    const fn = {parents: lib.parentsOf, children: lib.childrenOf, ancestors: lib.ancestors, descendants: lib.descendants}[cmd]
    listOut(fn(g, args[0]))
    break
  }
  case 'roots': listOut(lib.roots(g)); break
  case 'leaves': listOut(lib.leaves(g)); break
  case 'isolated': listOut(lib.isolated(g)); break
  case 'topo': {
    const t = lib.topoSort(g)
    out(opts.json ? t : t.order.join('\n') + (t.cyclic.length ? `\n\n순환에 걸린 정점: ${t.cyclic.join(', ')}` : ''))
    process.exit(t.cyclic.length ? 1 : 0)
  }
  case 'cycles': {
    const c = lib.findCycles(g)
    out(opts.json ? c : c.length ? c.map(p => p.join(' -> ')).join('\n') : '순환 없음')
    process.exit(c.length ? 1 : 0)
  }
  case 'check-cycle': {
    need(2)
    const [from, to] = args
    for (const id of [from, to]) {
      if (!lib.ID_RE.test(id)) fail(`잘못된 id: ${id}`)
      if (!lib.hasNode(g, id) && !opts['allow-new']) fail(`문서 없음: ${id} (새 문서면 --allow-new)`, 1)
    }
    const r = {from, to, ...lib.wouldCreateCycle(g, from, to)}
    out(opts.json ? r : r.cycle ? `CYCLE: ${r.path.join(' -> ')}` : r.existing ? `EXISTS: ${from} -> ${to} 는 이미 있는 간선` : `OK: ${from} -> ${to} 추가 가능`)
    process.exit(r.cycle ? 1 : 0)
  }
  case 'validate': {
    const issues = lib.validate(g)
    if (opts.json) out(issues)
    else if (!issues.length) console.log('문제 없음')
    else for (const kind of ['PARSE', 'BROKEN_LINK', 'SELF_LOOP', 'ASYMMETRIC']) {
      const rows = issues.filter(i => i.kind === kind)
      if (!rows.length) continue
      console.log(`[${kind}] ${rows.length}건`)
      for (const i of rows) console.log(`  ${i.message}${i.fix ? `\n    → ${i.fix}` : ''}`)
    }
    process.exit(issues.length ? 1 : 0)
  }
  case 'tags': {
    if (!args.length) {
      const s = lib.tagStats(docs)
      out(opts.json ? s : s.map(r => `${r.count}\t#${r.tag}`).join('\n') + `\n${s.length} tags, ${lib.untagged(docs).length} untagged`)
    } else if (args[0] === 'untagged') listOut(lib.untagged(docs))
    else listOut(lib.docsWithTag(docs, args[0]))
    break
  }
  case 'parse': need(1); requireNode(args[0]); out(opts.json ? g.docs.get(args[0]) : JSON.stringify(g.docs.get(args[0]), null, 2)); break
  case 'dump': console.log(JSON.stringify({...lib.toJSON(g), issues: lib.validate(g), tags: lib.tagStats(docs)}, null, 2)); break
  default: fail(`알 수 없는 명령: ${cmd}\n\n${HELP}`)
}
