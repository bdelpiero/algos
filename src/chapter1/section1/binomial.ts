function binomial(n: number, k: number, p: number, results: any = {}): number {
  if (results[n] && results[n][k]) return results[n][k];
  if (n == 0 && k == 0) {
    return 1.0;
  }
  if (n < 0 || k < 0) {
    return 0.0;
  }

  if (!results[n]) results[n] = {};
  results[n][k] =
    (1 - p) * binomial(n - 1, k, p, results) +
    p * binomial(n - 1, k - 1, p, results);

  return results[n][k];
}
