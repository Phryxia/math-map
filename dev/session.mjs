import {read,write} from './core.mjs'
export function checkTime(label, newWork = false) {
  const now = new Date()
  const log = read('session-log.json', {sessions: []})
  const session = log.sessions.at(-1)
  if (!session) throw Error('no active session clock')
  const result = {label, at: now.toISOString(), explorationDeadline: session.explorationDeadline, hardDeadline: session.hardDeadline}
  session.checks.push(result)
  write('session-log.json', log)
  if (newWork && now >= new Date(session.explorationDeadline)) throw Error('new exploration closed; finalize only')
  return result
}
if (process.argv[2] === 'clock') console.log(JSON.stringify(checkTime('manual-clock')))
