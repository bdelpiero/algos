// euclidean algo for greatest common divisor
export function gcd(p: number, q: number, depth: number = 0): number {
  const currentTrace = `${' '.repeat(depth)}` + p + ' ' + q

  if (q == 0) return p
  const r = p % q
  return gcd(q, r, depth + 1)
}

//promptRevursively(gcd, "enter two ints: ", "please enter only valid ints");
