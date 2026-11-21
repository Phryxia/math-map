// 마크다운 본문에서 검사 대상이 아닌 구간을 공백으로 가린다.
// 가린 뒤에도 글자 수와 줄바꿈 위치는 원문과 같아서, 가린 문자열에서 찾은 위치로 원문의 줄 번호와 문맥을 그대로 얻는다.

const blank = s => s.replace(/[^\n]/g, ' ')

const FENCE_LINE = /^\s*(```|~~~)/
const MATH_BLOCK_LINE = /^\s*>?\s*\$\$\s*$/
const ONE_LINE_MATH_BLOCK = /^\s*>?\s*\$\$.*\$\$\s*$/
const HEADING_LINE = /^#{1,6}\s/
const FOOTNOTE_DEFINITION_LINE = /^\[\^[^\]]+\]:/

export const LINK_PATTERN = /!?\[([^\]\n]*)\]\(([^)\s]*)(?:\s+"[^"\n]*")?\)/g

/**
 * 코드 펜스, `$$` 블록, 인라인 코드, 인라인 수식, HTML 주석을 가린다.
 * maskHeadings 가 참이면 헤딩 줄과 각주 정의 줄도 가린다.
 * maskLinks 가 참이면 링크와 그림 참조 전체(텍스트와 주소)도 가린다.
 * @param {string} text
 * @param {{maskHeadings?: boolean, maskLinks?: boolean}} options
 * @returns {string}
 */
export function maskMarkdown(text, {maskHeadings = false, maskLinks = false} = {}) {
  let insideFence = false
  let insideMathBlock = false
  const maskedLines = text.split('\n').map(line => {
    if (FENCE_LINE.test(line)) { insideFence = !insideFence; return blank(line) }
    if (insideFence) return blank(line)
    if (MATH_BLOCK_LINE.test(line)) { insideMathBlock = !insideMathBlock; return blank(line) }
    if (insideMathBlock) return blank(line)
    if (ONE_LINE_MATH_BLOCK.test(line)) return blank(line)
    if (maskHeadings && (HEADING_LINE.test(line) || FOOTNOTE_DEFINITION_LINE.test(line))) return blank(line)
    return line
  })
  let masked = maskedLines.join('\n')
    .replace(/<!--[\s\S]*?-->/g, blank)
    .replace(/`[^`\n]*`/g, blank)
    .replace(/\$[^$\n]+\$/g, blank)
  if (maskLinks) masked = masked.replace(LINK_PATTERN, blank)
  return masked
}

/**
 * 문자열 위치를 1 부터 세는 줄 번호로 바꾼다.
 * @param {string} text
 * @param {number} position
 */
export function lineNumberAt(text, position) {
  let line = 1
  for (let i = 0; i < position; i++) if (text.charCodeAt(i) === 10) line++
  return line
}

/**
 * 위치가 든 원문 줄에서 앞뒤 몇 글자를 잘라 문맥으로 돌려준다.
 * @param {string} text
 * @param {number} position
 * @param {number} length
 */
export function contextAt(text, position, length, radius = 30) {
  const lineStart = text.lastIndexOf('\n', position - 1) + 1
  const lineEndIndex = text.indexOf('\n', position)
  const lineEnd = lineEndIndex < 0 ? text.length : lineEndIndex
  const from = Math.max(lineStart, position - radius)
  const to = Math.min(lineEnd, position + length + radius)
  return `${from > lineStart ? '…' : ''}${text.slice(from, to)}${to < lineEnd ? '…' : ''}`
}

/**
 * 문서에서 `# 연관 문서` 절 앞의 본문만 돌려준다.
 * @param {string} text
 */
export function bodyOf(text) {
  const index = text.lastIndexOf('\n# 연관 문서')
  return index < 0 ? text : text.slice(0, index)
}
