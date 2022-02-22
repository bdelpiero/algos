export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function initializeTestArray(n: number) {
  const arr: number[] = Array(n);
  for (let i = 0; i < n; i++) arr[i] = getRandomInt(0, n);
  return arr;
}
