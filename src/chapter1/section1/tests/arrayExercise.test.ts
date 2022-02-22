import { relativePrimeCheck } from "../arrayExercise";

test("creates an N-by-N boolean array", () => {
  const n = 10;
  const arr = relativePrimeCheck(n);
  expect(arr.length).toBe(n);
  expect(arr[n - 1].length).toBe(n);
  expect(typeof arr[0][0]).toBe("boolean");
  expect(typeof arr[n - 1][n - 1]).toBe("boolean");
});

test("a[i][j] is true if i and j are relatively prime (have no common factors), and false otherwise", () => {
  const arr = relativePrimeCheck(10);
  console.log(arr);

  expect(arr[5][3]).toBe(true);
  expect(arr[2][7]).toBe(true);
  expect(arr[1][9]).toBe(true);
  expect(arr[5][8]).toBe(true);

  expect(arr[9][3]).toBe(false);
  expect(arr[8][4]).toBe(false);
  expect(arr[3][6]).toBe(false);
});
