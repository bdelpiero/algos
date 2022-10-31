import { promptRevursively } from '../../../utils/run'

function factorial(n: number): number {
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}

promptRevursively(factorial, 'enter an int: ', 'please enter a valid integer')
