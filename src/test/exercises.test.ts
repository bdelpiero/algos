import { histogram } from "../exercises";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function initializeTestArray(m: number) {
  const arr: number[] = Array(m);
  for (let i = 0; i < m; i++) arr[i] = getRandomInt(0, m);
  return arr;
}

describe("histogram", () => {
  let a: number[];
  let m: number;
  let resultArr: number[];

  beforeEach(() => {
    m = getRandomInt(0, 1000);
    a = initializeTestArray(m);
    resultArr = histogram(a, m);
  });

  it("returns an array of lenght m", () => {
    expect(resultArr.length).toBe(m);
  });

  it("the values in the returned array are integers between 0 and m–1", () => {
    const areValuesValid = resultArr.every(function (n) {
      return Number.isInteger(n) && n >= 0 && n < m;
    });
    expect(areValuesValid).toBe(true);
  });

  it("the sum of the values in the returned array should be equal to a.length", () => {
    const sumOfValues = resultArr.reduce((a, b) => a + b, 0);
    expect(sumOfValues).toBe(resultArr.length);
  });
});
