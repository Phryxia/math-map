#!/usr/bin/env node
// 문서 하나의 제목을 본문에 링크 없이 적은 다른 문서를 찾는다.
// 본문 링크 규칙(첫 등장은 링크)은 새 문서가 생기는 순간 그 제목을 이미 쓰던 기존 문서를 위반 상태로 만든다.
// 새 문서를 만든 뒤 이 스크립트를 돌려 고칠 자리를 목록으로 받는다.
//
// 규칙.
// - 찾는 이름은 제목, "X 의 Y" 제목의 "X Y", "A와 B" 제목에서 로마자가 든 A 와 B 다.
// - 본문만 본다(연관 문서 절 앞). 헤딩, 각주 정의, 코드, 수식, 링크와 그 텍스트, HTML 주석은 가린다.
// - 이름 바로 앞이 한글, 로마자, 숫자, 하이픈이면 더 긴 낱말의 일부이므로 건너뛴다.
// - 이름이 로마자나 숫자로 끝나면 바로 뒤도 로마자나 숫자가 아니어야 한다.
// - 이름이 한글로 끝나면 바로 뒤의 한글은 조사 첫 글자여야 한다("측도를" 은 잡고 "측도론" 은 건너뛴다).
// - 다른 문서의 더 긴 제목 안에 든 자리("고속 Fourier 변환" 안의 "Fourier 변환")는 건너뛴다.
// - 문서에 대상 문서로 가는 링크가 있고 그 링크가 첫 언급보다 앞이면 규칙을 지킨 것이다.
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {extractTitle} from './graph-lib.mjs'
import {maskMarkdown, bodyOf, lineNumberAt, contextAt, LINK_PATTERN} from './md-mask.mjs'

const here = path.dirname(fileURLToPath(import.meta.url))
const docsDirDefault = () => path.join(here, '..', 'docs')

const WORD_CHARACTER_BEFORE = /[0-9A-Za-zÀ-ɏ가-힣\-–]/
const LATIN_OR_DIGIT = /[0-9A-Za-zÀ-ɏ]/
const HANGUL = /[가-힣]/
const PARTICLE_FIRST_CHARACTERS = new Set([...'은는이가을를의에와과도로으만까부보처마라란나엔들며면'])
const MINIMUM_NAME_LENGTH = 2

const compactLength = name => name.replace(/\s/g, '').length

/**
 * 제목에서 본문 언급을 찾을 이름들을 만든다.
 * @param {string} title
 * @returns {string[]}
 */
export function namesOfTitle(title) {
  const names = new Set([title.trim()])
  const possessive = title.match(/^([A-Za-zÀ-ɏ][^ ]*) 의 (.+)$/)
  if (possessive) names.add(`${possessive[1]} ${possessive[2]}`)
  const pair = title.match(/^(.+?)\s?[와과] (.+)$/)
  if (pair) for (const part of [pair[1], pair[2]]) if (/[A-Za-z]/.test(part)) names.add(part.trim())
  return [...names].filter(name => compactLength(name) >= MINIMUM_NAME_LENGTH)
}

/**
 * 이름이 가린 본문의 이 위치에서 낱말 경계를 지키며 나타나는지 본다.
 * @param {string} masked
 * @param {number} position
 * @param {string} name
 */
export function isStandaloneMention(masked, position, name) {
  const before = position > 0 ? masked[position - 1] : ''
  if (before && WORD_CHARACTER_BEFORE.test(before)) return false
  const after = masked[position + name.length] ?? ''
  const lastCharacter = name[name.length - 1]
  if (LATIN_OR_DIGIT.test(lastCharacter)) return !(after && LATIN_OR_DIGIT.test(after))
  if (HANGUL.test(lastCharacter) && after && HANGUL.test(after)) return PARTICLE_FIRST_CHARACTERS.has(after)
  return true
}

/**
 * 이 위치의 이름이 다른 문서의 더 긴 이름 안에 들어 있는지 본다.
 * @param {string} masked
 * @param {number} position
 * @param {string} name
 * @param {string[]} longerNames name 을 부분 문자열로 갖는 더 긴 이름들
 */
export function isInsideLongerName(masked, position, name, longerNames) {
  for (const longer of longerNames) {
    for (let offset = longer.indexOf(name); offset >= 0; offset = longer.indexOf(name, offset + 1)) {
      const start = position - offset
      if (start >= 0 && masked.startsWith(longer, start)) return true
    }
  }
  return false
}

/**
 * 문서 묶음을 받아 검색에 쓸 색인을 만든다.
 * @param {{id: string, text: string}[]} documents
 */
export function buildIndex(documents) {
  return documents.map(({id, text}) => {
    const body = bodyOf(text)
    const title = extractTitle(text) ?? id
    return {id, title, names: namesOfTitle(title), body, masked: maskMarkdown(body, {maskHeadings: true, maskLinks: true})}
  })
}

/**
 * 대상 문서의 이름을 링크 없이 첫 등장시킨 다른 문서를 찾는다.
 * @param {ReturnType<typeof buildIndex>} index
 * @param {string} targetId
 */
export function findUnlinkedMentions(index, targetId) {
  const target = index.find(entry => entry.id === targetId)
  if (!target) throw new Error(`${targetId}.md 가 없다`)
  const otherNames = index.filter(entry => entry.id !== targetId).flatMap(entry => entry.names)
  const longerNamesOf = new Map(target.names.map(name => [name, otherNames.filter(other => other.length > name.length && other.includes(name))]))
  const findings = []
  for (const entry of index) {
    if (entry.id === targetId) continue
    let firstMention = null
    for (const name of target.names) {
      for (let position = entry.masked.indexOf(name); position >= 0; position = entry.masked.indexOf(name, position + 1)) {
        if (!isStandaloneMention(entry.masked, position, name)) continue
        if (isInsideLongerName(entry.masked, position, name, longerNamesOf.get(name))) continue
        if (!firstMention || position < firstMention.position) firstMention = {position, name}
        break
      }
    }
    if (!firstMention) continue
    const firstLink = firstLinkPosition(entry.body, targetId)
    if (firstLink !== null && firstLink < firstMention.position) continue
    findings.push({
      id: entry.id,
      line: lineNumberAt(entry.body, firstMention.position),
      name: firstMention.name,
      linkedLater: firstLink !== null,
      context: contextAt(entry.body, firstMention.position, firstMention.name.length),
    })
  }
  return {id: target.id, title: target.title, names: target.names, findings: findings.sort((a, b) => a.id.localeCompare(b.id))}
}

function firstLinkPosition(body, targetId) {
  const masked = maskMarkdown(body, {maskHeadings: true})
  for (const match of masked.matchAll(LINK_PATTERN)) {
    if (match[2].replace(/^\.\//, '').replace(/#.*$/, '') === `${targetId}.md`) return match.index
  }
  return null
}

export function loadDocuments(docsDir) {
  return fs.readdirSync(docsDir).filter(f => f.endsWith('.md')).sort()
    .map(f => ({id: f.slice(0, -3), text: fs.readFileSync(path.join(docsDir, f), 'utf8')}))
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2)
  const docsIndex = args.indexOf('--docs')
  const docsDir = docsIndex >= 0 ? args[docsIndex + 1] : docsDirDefault()
  const ids = args.filter((a, i) => !a.startsWith('--') && a !== 'help' && (docsIndex < 0 || i !== docsIndex + 1)).map(a => a.replace(/\.md$/, ''))
  if (args.includes('help') || args.includes('--help') || ids.length === 0) {
    console.log([
      '사용법: node dev/mentions.mjs <id ...> [--json] [--docs <dir>]',
      '문서의 제목을 본문에 링크 없이 적은 다른 문서를 줄 번호와 문맥으로 나열한다.',
      '첫 언급보다 링크가 뒤에 있는 문서도 나열한다(첫 등장이 링크여야 하므로).',
      '나열할 자리가 있으면 종료코드 1.',
    ].join('\n'))
    process.exit(ids.length === 0 && !args.includes('help') && !args.includes('--help') ? 2 : 0)
  }
  const index = buildIndex(loadDocuments(docsDir))
  const reports = []
  for (const id of ids) {
    try { reports.push(findUnlinkedMentions(index, id)) }
    catch (error) { console.error(error.message); process.exit(2) }
  }
  if (args.includes('--json')) console.log(JSON.stringify(reports, null, 2))
  else {
    for (const report of reports) {
      console.log(`${report.id} (${report.names.join(', ')}): ${report.findings.length}개 문서`)
      for (const f of report.findings) console.log(`  ${f.id}.md:${f.line}\t${f.linkedLater ? '링크가 첫 언급보다 뒤\t' : ''}${f.context}`)
    }
  }
  process.exit(reports.some(report => report.findings.length) ? 1 : 0)
}
