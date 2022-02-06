/* Write a static method histogram() that takes an array a[] of int values and
an integer M as arguments and returns an array of length M whose ith entry is the number of times the integer i appeared in the argument array. If the values in a[] are all
between 0 and M–1, the sum of the values in the returned array should be equal to
a.length.
 */

function numOfAppearances(a: number[], i: number) {
  return a.filter((n) => n === i).length;
}

export function histogram(a: number[], m: number) {
  const resultArr = Array(m);
  for (let i = 0; i < m; i++) {
    resultArr[i] = numOfAppearances(a, i);
  }
  return resultArr;
}
