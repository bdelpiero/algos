import { areParenthesesBalanced } from "../exercise04";

describe("stack client that reads in a string and uses a stack to determine whether its parentheses are properly balanced", () => {
  it("should print true for [()]{}{[()()]()}", () => {
    const parentheses = "[()]{}{[()()]()}";
    expect(areParenthesesBalanced(parentheses)).toBe(true);
  });
  it("should print false for [(])", () => {
    const parentheses = "[(])";
    expect(areParenthesesBalanced(parentheses)).toBe(false);
  });
  it("should print false for {[()]", () => {
    const parentheses = "{[()]";
    expect(areParenthesesBalanced(parentheses)).toBe(false);
  });
});
