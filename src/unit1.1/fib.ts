import { promptRevursively } from "./run";

function fib(n: number): number {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

export function improvedFib(n: number, m: Record<number, number> = {}): number {
  if (m[n]) return m[n];
  if (n == 0) return 0;
  if (n == 1) return 1;

  m[n] = improvedFib(n - 1, m) + improvedFib(n - 2, m);
  return m[n];
}

promptRevursively(
  improvedFib,
  "enter an int: ",
  "please enter a valid integer"
);
