#!/usr/bin/env node
// 문서와 README 의 링크가 가리키는 파일이 실제로 있는지 검사한다.
// validate 는 연관 문서 절의 간선만 보므로, 본문 링크와 그림 참조가 없는 파일을 가리켜도 잡지 못한다. 이 스크립트가 그 자리를 맡는다.
// 코드 펜스, 인라인 코드, 수식 안의 대괄호는 링크가 아니므로 보지 않는다.
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {maskMarkdown, lineNumberAt, LINK_PATTERN} from './md-mask.mjs'

const here = path.dirname(fileURLToPath(import.meta.url))
const repoRootDefault = () => path.join(here, '..')

const EXTERNAL_TARGET = /^[a-z][a-z0-9+.-]*:/i
const NESTED_LINK = /\[\[[^\]\n]*\]\([^)\s]*\)\]\(/g

/**
 * 링크 주소에서 조각(#...)과 질의(?...)를 떼고 퍼센트 인코딩을 푼 상대 경로를 돌려준다.
 * 외부 주소와 문서 안 조각 링크는 검사할 파일이 없으므로 null 이다.
 * @param {string} target
 * @returns {string | null}
 */
export function localPathOf(target) {
  const trimmed = target.replace(/^<|>$/g, '')
  if (trimmed === '' || trimmed.startsWith('#') || EXTERNAL_TARGET.test(trimmed)) return null
  const withoutFragment = trimmed.replace(/[#?].*$/, '')
  try { return decodeURIComponent(withoutFragment) } catch { return withoutFragment }
}

/**
 * 한 파일의 깨진 링크를 찾는다.
 * MISSING 은 가리키는 파일이 없는 링크, NESTED 는 링크 안에 링크를 넣어 렌더링이 깨지는 자리다.
 * @param {string} text 파일 내용
 * @param {string} baseDir 상대 경로를 풀 기준 디렉터리
 * @param {(absolutePath: string) => boolean} exists
 */
export function findBrokenLinks(text, baseDir, exists = p => fs.existsSync(p)) {
  const masked = maskMarkdown(text)
  const problems = []
  for (const match of masked.matchAll(LINK_PATTERN)) {
    const target = match[2]
    const localPath = localPathOf(target)
    if (localPath === null) continue
    if (exists(path.resolve(baseDir, localPath))) continue
    problems.push({kind: 'MISSING', line: lineNumberAt(text, match.index), target, text: match[0]})
  }
  for (const match of masked.matchAll(NESTED_LINK)) {
    problems.push({kind: 'NESTED', line: lineNumberAt(text, match.index), target: '', text: match[0]})
  }
  return problems.sort((a, b) => a.line - b.line)
}

/**
 * docs/ 의 문서(ids 가 비면 전부)와, ids 가 비면 README.md 까지 검사한다.
 * @param {string} repoRoot
 * @param {string[]} ids
 */
export function checkRepository(repoRoot, ids = []) {
  const docsDir = path.join(repoRoot, 'docs')
  const wanted = ids.map(id => id.replace(/\.md$/, ''))
  const docFiles = wanted.length
    ? wanted.map(id => `${id}.md`)
    : fs.readdirSync(docsDir).filter(f => f.endsWith('.md')).sort()
  const results = []
  for (const file of docFiles) {
    const absolute = path.join(docsDir, file)
    if (!fs.existsSync(absolute)) { results.push({file: `docs/${file}`, kind: 'NO_SUCH_DOC', line: 0, target: file, text: ''}); continue }
    for (const problem of findBrokenLinks(fs.readFileSync(absolute, 'utf8'), docsDir)) results.push({file: `docs/${file}`, ...problem})
  }
  const readme = path.join(repoRoot, 'README.md')
  if (!wanted.length && fs.existsSync(readme)) {
    for (const problem of findBrokenLinks(fs.readFileSync(readme, 'utf8'), repoRoot)) results.push({file: 'README.md', ...problem})
  }
  return results
}

const KIND_LABEL = {MISSING: '없는 파일', NESTED: '중첩 링크', NO_SUCH_DOC: '없는 문서'}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2)
  if (args.includes('help') || args.includes('--help')) {
    console.log([
      '사용법: node dev/link-check.mjs [id ...] [--json] [--root <dir>]',
      '문서 본문과 연관 문서 절의 링크, 그림 참조, README 의 링크가 실제 파일을 가리키는지 검사한다.',
      'id 를 주면 그 문서만 보고, 주지 않으면 docs/ 전부와 README.md 를 본다.',
      '깨진 링크(없는 파일, 링크 안의 링크)가 있으면 종료코드 1.',
    ].join('\n'))
    process.exit(0)
  }
  const rootIndex = args.indexOf('--root')
  const repoRoot = rootIndex >= 0 ? args[rootIndex + 1] : repoRootDefault()
  const ids = args.filter((a, i) => !a.startsWith('--') && (rootIndex < 0 || i !== rootIndex + 1))
  const problems = checkRepository(repoRoot, ids)
  if (args.includes('--json')) console.log(JSON.stringify(problems, null, 2))
  else {
    for (const p of problems) console.log(`${p.file}:${p.line}\t${KIND_LABEL[p.kind]}\t${p.text || p.target}`)
    console.log(problems.length ? `깨진 링크 ${problems.length}개` : '문제 없음')
  }
  process.exit(problems.length ? 1 : 0)
}
