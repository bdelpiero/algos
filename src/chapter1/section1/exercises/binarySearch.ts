import { arrayFromFile } from '../../utils/readFile'
import { promptRevursively } from '../../utils/run'

function rank(
  key: number,
  a: number[],
  lo: number = 0,
  hi: number = a.length - 1,
  depth: number = 0
): number {
  const currentTrace = `${' '.repeat(depth)}` + lo + '' + hi

  if (lo > hi) return -1
  const mid = Math.floor(lo + (hi - lo) / 2)
  if (key < a[mid]) return rank(key, a, lo, mid - 1, depth + 1)
  else if (key > a[mid]) return rank(key, a, mid + 1, hi, depth + 1)
  else return mid
}

/* Add to the BinarySearch test client the ability to respond to a second argument:
+ to print numbers from standard input that are not in the whitelist, 
- to print numbers that are in the whitelist. */
function wrapper(fn: Function, ...rest: any[]) {
  return function (...args: any[]) {
    if (fn(...args, ...rest) === -1) return '+'
    else return '-'
  }
}

function main() {
  const file = arrayFromFile()
  const sortedFile = file.sort().filter((char) => char !== '')
  const wrappedCall = wrapper(rank, sortedFile)
  promptRevursively(wrappedCall, undefined, undefined)
}

main()
