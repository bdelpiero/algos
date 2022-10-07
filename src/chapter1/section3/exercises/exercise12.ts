import Stack from '../Stack/Stack'

export default function copyStack(stack: Stack<string>) {
  // temp and copy would be better names for these stacks
  const reversedStack = new Stack<string>()
  const resultStack = new Stack<string>()

  for (const el of stack) {
    if (!el) break
    reversedStack.push(el)
  }

  for (const el of reversedStack) {
    if (!el) break
    resultStack.push(el)
  }

  return resultStack
}
