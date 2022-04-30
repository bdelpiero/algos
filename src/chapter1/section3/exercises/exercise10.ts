import Stack from "../Stack/Stack";

export default function infixToPostfix(infix: string) {
  const operandsStack = new Stack<string>();
  const operatorsStack = new Stack<string>();

  const operators = ["+", "-", "/", "*"];

  for (const expression of infix.split("")) {
    if (expression === "(") continue;
    if (operators.includes(expression)) operatorsStack.push(expression);
    else if (expression !== ")") operandsStack.push(expression);
    else {
      const rightOperand = operandsStack.pop();
      const leftOperand = operandsStack.pop();
      const operator = operatorsStack.pop();
      operandsStack.push("(" + leftOperand + rightOperand + operator + ")");
    }
  }

  return operandsStack.pop();
}
