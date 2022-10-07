import Stack from '../Stack/Stack'

export function areParenthesesBalanced(parentheses: string) {
  const parensMap: Record<string, string> = { '[': ']', '(': ')', '{': '}' }
  const stack = new Stack<string>()

  for (const paren of parentheses.split('')) {
    if (parensMap[paren]) {
      stack.push(paren)
    } else {
      const lastOpenedParen = stack.pop()
      if (!lastOpenedParen) return false
      if (parensMap[lastOpenedParen] !== paren) return false
    }
  }

  return stack.isEmpty()
}
