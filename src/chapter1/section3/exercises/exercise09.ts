import Stack from "../Stack/Stack";

export function addInfixParentheses(expressionArr: string[]) {
  const operandsStack = new Stack<string>();
  const operatorsStack = new Stack<string>();

  const operators = ["+", "-", "/", "*"];

  expressionArr.forEach((expression) => {
    if (operators.includes(expression)) operatorsStack.push(expression);
    else if (expression !== ")") operandsStack.push(expression);
    else {
      const rightOperand = operandsStack.pop();
      const operator = operatorsStack.pop();
      const leftOperand = operandsStack.pop();
      operandsStack.push("(" + leftOperand + operator + rightOperand + ")");
    }
  });

  return operandsStack.pop();
}
