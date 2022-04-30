import { addInfixParentheses } from "../exercise09";

describe("infix notation", () => {
  it("should take an expression without left parentheses and prints the equivalent infix expression with the parentheses inserted", () => {
    const expression1 = "1+2)*3-4)*5-6)))";
    expect(addInfixParentheses(expression1.split(""))).toBe(
      "((1+2)*((3-4)*(5-6)))"
    );

    const expression2 = "A*B+C))/D)";
    expect(addInfixParentheses(expression2.split(""))).toBe("((A*(B+C))/D)");

    const expression3 = "A*B+C/D)))";
    expect(addInfixParentheses(expression3.split(""))).toBe("(A*(B+(C/D)))");

    const expression4 = "A*B)+C/D))";
    expect(addInfixParentheses(expression4.split(""))).toBe("((A*B)+(C/D))");
  });
});
