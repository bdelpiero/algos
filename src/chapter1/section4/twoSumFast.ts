import { binarySearch } from 'chapter1/section1/exercises/binarySearch'

// instead of doing a double loop, we use mergeSort (array.sort) and binarySearch.rank
// mergeSort is N log N and binarySearch is log N
export function twoSumFast(a: number[]) {
  const sortedA = a.sort()
  let cnt = 0
  for (let i = 0; i < sortedA.length; i++) {
    // if -sortedA[i] is in the array, it means there's a number that added to sortedA[i] returns 0
    // we check if the returned index is bigger than i to avoid double counting
    // (we are only interestedin indexes we haven't looked at yet)
    if (binarySearch.rank(-sortedA[i], sortedA) > i) {
      cnt++
    }
  }
  return cnt
}
