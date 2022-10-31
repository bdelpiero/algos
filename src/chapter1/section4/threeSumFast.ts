import { binarySearch } from 'chapter1/section1/exercises/binarySearch'

// threeSum implmentation with run time N^2 log N
export function threeSumFast(a: number[]) {
  const sortedA = a.sort((a: number, b: number) => a - b)
  let cnt = 0
  for (let i = 0; i < sortedA.length; i++) {
    for (let j = i + 1; j < sortedA.length; j++) {
      // find one number in the array that, added to the other two, sums 0
      if (binarySearch.rank(sortedA, -sortedA[i] - sortedA[j]) > j) {
        cnt++
      }
    }
  }
  return cnt
}
