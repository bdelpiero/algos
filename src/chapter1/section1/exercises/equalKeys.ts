function lessThanKey(key: number, a: number[], lo: number, hi: number): number {
  if (lo <= hi) {
    const mid = Math.floor(lo + (hi - lo) / 2)
    if (key > a[mid]) {
      return lessThanKey(key, a, mid + 1, hi)
    } else {
      return lessThanKey(key, a, lo, mid - 1)
    }
  }
  return lo
}

function greaterThanKey(
  key: number,
  a: number[],
  lo: number,
  hi: number
): number {
  if (lo <= hi) {
    const mid = Math.floor(lo + (hi - lo) / 2)
    if (key >= a[mid]) {
      return greaterThanKey(key, a, mid + 1, hi)
    } else {
      return greaterThanKey(key, a, lo, mid - 1)
    }
  }
  return lo
}

export function rank(key: number, sortedArr: number[]) {
  return lessThanKey(key, sortedArr, 0, sortedArr.length - 1)
}

export function count(key: number, sortedArr: number[]) {
  const lessThan = lessThanKey(key, sortedArr, 0, sortedArr.length - 1)
  const greaterThan = greaterThanKey(key, sortedArr, 0, sortedArr.length - 1)
  return sortedArr.slice(lessThan, greaterThan).length
}

export function verify(key: number, arr: number[]) {
  const startAt = rank(7, arr)
  const endAt = startAt + count(7, arr)
  return arr.slice(startAt, endAt).every((n) => n == 7)
}
