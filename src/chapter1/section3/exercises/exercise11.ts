import Stack from '../Stack/Stack'

//((2*3)+(24/30))

const operations = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '/': (a: number, b: number) => a / b,
  '*': (a: number, b: number) => a * b,
}

type operators = keyof typeof operations

function isOperator(expression: string): expression is operators {
  return expression in operations
}

export default function evaluatePostfix(postfixExpression: string): number {
  const operandsStack = new Stack<number>()
  const operatorsStack = new Stack<operators>()

  for (const expression of postfixExpression.split(' ')) {
    if (expression === '(') continue
    if (isOperator(expression)) {
      operatorsStack.push(expression as operators)
    } else if (expression !== ')') {
      operandsStack.push(+expression)
    } else {
      const rightOperand = operandsStack.pop() ?? 0
      const leftOperand = operandsStack.pop()
      const operator = operatorsStack.pop()

      if (!operator || !leftOperand) return rightOperand
      operandsStack.push(operations[operator](leftOperand, rightOperand))
    }
  }

  return operandsStack.pop() ?? 0
}
