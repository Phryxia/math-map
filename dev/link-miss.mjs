#!/usr/bin/env node
// 미링크 검사. 문서 본문에 다른 문서의 제목이 나오는데 첫 등장이 그 문서로 가는 링크가 아닌 자리를 보고한다(4절 본문 링크 규칙).
// 실행할 때마다 dev/titles.mjs 로 제목 목록 파일(dev/titles.tsv)을 새로 만들고, 그 파일을 읽어 한 프로세스 안에서 검사한다.
//
// 검사하는 제목은 예전 손 검사와 같다. 로마자가 들어가거나 "정리, 보조정리, 공식, 부등식, 추측, 원리, 방정식, 법칙, 역설, 알고리즘" 으로 끝나는 제목만 보고, `$` 가 든 제목은 건너뛴다.
// 예전 손 검사처럼 그 문서로 가는 링크가 본문 어디에도 없는 자리만 보고한다. --strict 를 주면 링크가 첫 언급보다 뒤에 있는 자리도 보고한다.
// 본문에서 이름을 찾는 규칙(가리는 구간, 낱말 경계, 조사, 더 긴 제목 안의 자리, 링크와 첫 언급의 순서)은 mentions.mjs 와 같다.
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {writeTitleList, readTitleList, docsDirDefault, titleListPathDefault} from './titles.mjs'
import {namesOfTitle, buildIndex, findFirstUnlinkedMention, longerNamesIndex} from './mentions.mjs'

const CHECKED_TITLE = /[A-Za-z]|(정리|보조정리|공식|부등식|추측|원리|방정식|법칙|역설|알고리즘)$/

/**
 * 미링크 검사의 대상이 되는 제목인지 본다.
 * @param {string} title
 */
export const isCheckedTitle = title => !title.includes('$') && CHECKED_TITLE.test(title)

/**
 * 제목 목록과 검사할 문서들을 받아 미링크 자리를 찾는다.
 * @param {{id: string, title: string}[]} titles 제목 목록 파일에서 읽은 전체 목록
 * @param {{id: string, text: string}[]} documents 검사할 문서들
 * @param {{strict?: boolean}} options strict 가 참이면 링크가 첫 언급보다 뒤인 자리도 보고한다
 */
export function findLinkMisses(titles, documents, {strict = false} = {}) {
  const namesById = new Map(titles.map(({id, title}) => [id, namesOfTitle(title)]))
  const ownedNames = [...namesById].flatMap(([id, names]) => names.map(name => ({id, name})))
  const candidates = titles.filter(({title}) => isCheckedTitle(title)).map(({id, title}) => {
    const names = namesById.get(id)
    const otherNames = ownedNames.filter(owned => owned.id !== id).map(owned => owned.name)
    return {id, title, names, longerNamesOf: longerNamesIndex(names, otherNames)}
  })
  const misses = []
  for (const entry of buildIndex(documents)) {
    for (const candidate of candidates) {
      if (candidate.id === entry.id) continue
      const finding = findFirstUnlinkedMention(entry, candidate.id, candidate.names, candidate.longerNamesOf, {reportLinkedLater: strict})
      if (finding) misses.push({id: entry.id, target: candidate.id, title: candidate.title, ...finding})
    }
  }
  return misses.sort((a, b) => a.id.localeCompare(b.id) || a.line - b.line)
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2)
  if (args.includes('help') || args.includes('--help')) {
    console.log([
      '사용법: node dev/link-miss.mjs [id ...] [--strict] [--json] [--docs <dir>]',
      '제목 목록 파일(dev/titles.tsv)을 새로 만든 뒤, 문서 본문에 다른 문서의 제목이 나오는데 그 문서로 가는 링크가 없는 자리를 보고한다.',
      '--strict 를 주면 링크가 첫 언급보다 뒤에 있는 자리도 보고한다.',
      'id 를 주면 그 문서만, 주지 않으면 docs/ 전부를 검사한다. 보고할 자리가 있으면 종료코드 1.',
    ].join('\n'))
    process.exit(0)
  }
  const docsIndex = args.indexOf('--docs')
  const docsDir = docsIndex >= 0 ? args[docsIndex + 1] : docsDirDefault()
  const ids = args.filter((a, i) => !a.startsWith('--') && (docsIndex < 0 || i !== docsIndex + 1)).map(a => a.replace(/\.md$/, ''))
  const listPath = titleListPathDefault()
  writeTitleList(docsDir, listPath)
  const titles = readTitleList(listPath)
  const wanted = ids.length ? ids : titles.map(({id}) => id)
  for (const id of wanted) if (!fs.existsSync(path.join(docsDir, `${id}.md`))) { console.error(`${id}.md 가 없다`); process.exit(2) }
  const documents = wanted.map(id => ({id, text: fs.readFileSync(path.join(docsDir, `${id}.md`), 'utf8')}))
  const misses = findLinkMisses(titles, documents, {strict: args.includes('--strict')})
  if (args.includes('--json')) console.log(JSON.stringify(misses, null, 2))
  else {
    for (const m of misses) console.log(`${m.id}.md:${m.line}\t[${m.title}](${m.target}.md) ${m.linkedLater ? '링크가 첫 언급보다 뒤' : '미링크'}\t${m.context}`)
    console.log(misses.length ? `미링크 ${misses.length}곳` : '문제 없음')
  }
  process.exit(misses.length ? 1 : 0)
}
