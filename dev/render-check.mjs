#!/usr/bin/env node
// 문서를 GFM 방식으로 실제 렌더링해 수식이 마크다운 인라인 파서에 먹히는지 검사한다.
// 원문의 $...$ / $$...$$ 스팬이 렌더된 텍스트에 그대로 남아 있어야 한다.
// 남아 있지 않으면 강조(_ *), 링크([ ]( )), 이스케이프(\), 리스트(- ) 등이 수식 안을 가로챈 것이다.
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const docsDirDefault = () => path.join(here, '..', 'docs')

let MarkdownIt
try { ({default: MarkdownIt} = await import('markdown-it')) }
catch { console.error('markdown-it 이 없다. 저장소 루트에서 npm install 을 먼저 실행한다.'); process.exit(2) }

const md = new MarkdownIt({html: true})

const ENT = {'&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'"}
export const htmlToText = html => html
  .replace(/<pre[\s\S]*?<\/pre>/g, '\n')
  .replace(/<code[\s\S]*?<\/code>/g, '')
  .replace(/<[^>]+>/g, '')
  .replace(/&(amp|lt|gt|quot|#39);/g, m => ENT[m])

const norm = s => s.replace(/\s+/g, ' ').trim()
// 마크다운 이스케이프가 풀린 형태도 허용한다. \{ 는 GFM 수식에서도 { 로 넘어가 렌더러가 다시 해석하기 때문이다.
const unescaped = s => s.replace(/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, '$1')

// 코드 펜스와 인라인 코드를 지운 뒤 수식 스팬을 줄 번호와 함께 뽑는다.
export function extractMath(text) {
  const lines = text.split('\n')
  const spans = []
  let inFence = false, block = null
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i]
    if (/^\s*(```|~~~)/.test(raw)) { inFence = !inFence; continue }
    if (inFence) continue
    if (block) {
      if (/^\s*\$\$\s*$/.test(raw)) { spans.push({line: block.line, kind: 'block', text: block.buf.join('\n')}); block = null }
      else block.buf.push(raw)
      continue
    }
    if (/^\s*\$\$\s*$/.test(raw)) { block = {line: i + 1, buf: []}; continue }
    const line = raw.replace(/`[^`]*`/g, '')
    // 한 줄짜리 $$...$$
    for (const m of line.matchAll(/\$\$([^$]+?)\$\$/g)) spans.push({line: i + 1, kind: 'block', text: m[1]})
    const rest = line.replace(/\$\$[^$]+?\$\$/g, ' ')
    for (const m of rest.matchAll(/\$([^$\s][^$]*?)\$/g)) spans.push({line: i + 1, kind: 'inline', text: m[1]})
  }
  return spans
}

// 블록 수식($$)은 GFM 이 블록 단위로 먼저 잡으므로 인라인 파서에 먹히지 않는다.
// 대신 줄 첫머리가 리스트, 헤딩, 인용, 표로 오인되는 경우만 잡는다.
const BLOCK_SYNTAX = /^\s*([-*+]\s|\d+[.)]\s|#{1,6}\s|>)/

// 강조 짝은 문단 안에서만 맺어지므로 빈 줄로 나뉜 블록 단위로 렌더링해 비교한다.
function splitBlocks(text) {
  const lines = text.split('\n')
  const blocks = []
  let buf = [], start = 1, inFence = false
  const flush = () => { if (buf.length) blocks.push({start, text: buf.join('\n')}); buf = [] }
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i]
    if (/^\s*(```|~~~)/.test(l)) inFence = !inFence
    if (!inFence && l.trim() === '') { flush(); continue }
    if (!buf.length) start = i + 1
    buf.push(l)
  }
  flush()
  return blocks
}

// 렌더 비교용 텍스트에서는 블록 수식을 통째로 지운다. GFM 은 이것을 블록으로 먼저 잡기 때문이다.
const stripMathBlocks = text => text.replace(/^\s*\$\$\s*$[\s\S]*?^\s*\$\$\s*$/gm, '').replace(/\$\$[^$]+?\$\$/g, '')

const count = (hay, needle) => needle ? hay.split(needle).length - 1 : 0

export function checkText(text) {
  const bad = []
  for (const blk of splitBlocks(text)) {
    // 인용 블록 안의 $$ 도 블록 수식이다. 접두 > 를 벗겨서 본다.
    if (/^\s*>/.test(blk.text)) blk.text = blk.text.replace(/^\s*>\s?/gm, '')
    const spans = extractMath(blk.text)
    if (!spans.length) continue
    const rendered = norm(htmlToText(md.render(stripMathBlocks(blk.text))))
    const seen = new Map()
    for (const s of spans) {
      if (s.kind === 'block') {
        const hit = s.text.split('\n').find(l => BLOCK_SYNTAX.test(l))
        if (hit !== undefined) bad.push({...s, line: blk.start + s.line - 1, text: hit, why: '줄 첫머리가 블록 구문으로 읽힌다'})
        continue
      }
      const t = norm(s.text)
      if (t === '') continue
      const k = seen.get(t) ?? 0
      seen.set(t, k + 1)
      const have = Math.max(count(rendered, t), count(rendered, norm(unescaped(s.text))))
      if (have > k) continue
      bad.push({...s, line: blk.start + s.line - 1, why: '인라인 파서가 수식 안을 가로챈다'})
    }
  }
  return bad
}

export function checkDocs(docsDir, ids) {
  const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md')).sort()
  const want = ids.length ? new Set(ids.map(x => x.replace(/\.md$/, ''))) : null
  const out = []
  for (const f of files) {
    const id = f.slice(0, -3)
    if (want && !want.has(id)) continue
    for (const b of checkText(fs.readFileSync(path.join(docsDir, f), 'utf8'))) out.push({id, ...b})
  }
  return out
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2)
  const json = args.includes('--json')
  const di = args.indexOf('--docs')
  const docsDir = di >= 0 ? args[di + 1] : docsDirDefault()
  const ids = args.filter((a, i) => !a.startsWith('--') && (di < 0 || i !== di + 1))
  if (args.includes('help') || args.includes('--help')) {
    console.log('사용법: node dev/render-check.mjs [id ...] [--json] [--docs <dir>]\n문서를 markdown-it 으로 렌더링해 수식 스팬이 온전히 남는지 검사한다. 깨진 스팬이 있으면 종료코드 1.')
    process.exit(0)
  }
  const bad = checkDocs(docsDir, ids)
  if (json) console.log(JSON.stringify(bad, null, 2))
  else {
    for (const b of bad) console.log(`${b.id}.md:${b.line}\t${b.kind}\t$${b.text.split('\n')[0]}$`)
    console.log(bad.length ? `${bad.length}개 수식이 렌더링에서 깨진다` : '문제 없음')
  }
  process.exit(bad.length ? 1 : 0)
}
