import infixToPostfix from "../exercise10";

describe("infixToPostfix", () => {
  it("should take an infix expression and return the equivalent postfix expression", () => {
    const expression1 = "((A*B)+(C/D))";
    expect(infixToPostfix(expression1)).toBe("((AB*)(CD/)+)");

    const expression2 = "((A*(B+C))/D)";
    expect(infixToPostfix(expression2)).toBe("((A(BC+)*)D/)");

    const expression3 = "(A*(B+(C/D)))";
    expect(infixToPostfix(expression3)).toBe("(A(B(CD/)+)*)");
  });
});
