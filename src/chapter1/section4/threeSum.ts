import { argv } from 'process'
import { getRandomInt } from '../../utils/functions'
import StopWatch from './StopWatch'

export default function count(a: number[]) {
  const n = a.length
  let cnt = 0
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      for (let k = j + 1; k < n; k++) if (a[i] + a[j] + a[k] == 0) cnt++
  return cnt
}

function main() {
  console.log(argv)
  const n = parseInt(process.argv[2])
  if (isNaN(n)) {
    console.error('must provide a valid integer as command line arg')
    return
  }

  const a: number[] = []
  for (let i = 0; i < n; i++) a[i] = getRandomInt(-1000000, 1000000)
  console.log(a)
  const timer = new StopWatch()
  const cnt = count(a)
  const time = timer.elapsedTime()
  console.log(`cnt ${cnt} time ${time}`)
}

// e.g.: npx ts-node threeSum.ts 2000
main()
