import Stack from "../../Stack/Stack";
import copyStack from "../exercise12";

describe("copyStack", () => {
  it("should copy a stack of strings", () => {
    const stack = new Stack<string>();
    const elements = ["test1", "test2", "test3"];

    elements.forEach((el) => {
      stack.push(el);
    });

    const copiedStack = copyStack(stack);
    expect(stack.pop()).toBe("test3");
    expect(stack.pop()).toBe("test2");
    expect(stack.pop()).toBe("test1");
  });
});
