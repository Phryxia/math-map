#!/usr/bin/env node
// 문서 제목 목록 파일(dev/titles.tsv)을 만든다. 한 줄에 "id<탭>제목" 하나다.
// 이 파일은 저장소에 넣지 않는다(.gitignore). 문서가 바뀌면 낡으므로 검사할 때마다 다시 만든다.
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {extractTitle} from './graph-lib.mjs'

const here = path.dirname(fileURLToPath(import.meta.url))
export const docsDirDefault = () => path.join(here, '..', 'docs')
export const titleListPathDefault = () => path.join(here, 'titles.tsv')

/**
 * docs/ 의 문서마다 id 와 제목을 id 순으로 돌려준다. 제목이 없으면 id 를 제목으로 쓴다.
 * @param {string} docsDir
 * @returns {{id: string, title: string}[]}
 */
export function collectTitles(docsDir = docsDirDefault()) {
  return fs.readdirSync(docsDir).filter(file => file.endsWith('.md')).sort().map(file => {
    const id = file.slice(0, -3)
    const title = extractTitle(fs.readFileSync(path.join(docsDir, file), 'utf8')) ?? id
    return {id, title: title.replace(/[\t\n]/g, ' ')}
  })
}

/**
 * 제목 목록을 파일로 쓴다.
 * @param {string} docsDir
 * @param {string} outputPath
 */
export function writeTitleList(docsDir = docsDirDefault(), outputPath = titleListPathDefault()) {
  const titles = collectTitles(docsDir)
  fs.writeFileSync(outputPath, titles.map(({id, title}) => `${id}\t${title}`).join('\n') + '\n')
  return titles
}

/**
 * 제목 목록 파일을 읽는다.
 * @param {string} listPath
 * @returns {{id: string, title: string}[]}
 */
export function readTitleList(listPath = titleListPathDefault()) {
  return fs.readFileSync(listPath, 'utf8').split('\n').filter(Boolean).map(line => {
    const tab = line.indexOf('\t')
    return {id: line.slice(0, tab), title: line.slice(tab + 1)}
  })
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2)
  if (args.includes('help') || args.includes('--help')) {
    console.log([
      '사용법: node dev/titles.mjs [--docs <dir>] [--out <file>]',
      '문서 제목 목록을 "id<탭>제목" 줄로 dev/titles.tsv 에 쓴다. 이 파일은 저장소에 넣지 않는다.',
    ].join('\n'))
    process.exit(0)
  }
  const option = name => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : undefined }
  const outputPath = option('--out') ?? titleListPathDefault()
  const titles = writeTitleList(option('--docs') ?? docsDirDefault(), outputPath)
  console.log(`${path.relative(process.cwd(), outputPath)}: 제목 ${titles.length}개`)
}
