/* Write a code fragment that creates an N-by-N boolean array
a[][] such that a[i][j] is true if i and j are relatively prime (have no common factors), and false otherwise */

import { gcd } from "./gcd";

export function relativePrimeCheck(n: number) {
  const arr: boolean[][] = Array(n);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Array(n);
    for (let j = 0; j < arr.length; j++) {
      if (gcd(i, j) === 1) arr[i][j] = true;
      else arr[i][j] = false;
    }
  }

  return arr;
}
