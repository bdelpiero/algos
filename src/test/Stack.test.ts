import Stack from "../Stack";

describe("My Stack", () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.size).toBe(0);
  });

  it("can push to the top", () => {
    stack.push("🥑");
    expect(stack.size).toBe(1);
    expect(stack.peek).toBe("🥑");

    stack.push("🌽");
    expect(stack.size).toBe(2);
    expect(stack.peek).toBe("🌽");
  });

  it("can pop off", () => {
    stack.push("🥑");
    stack.push("🌽");
    stack.pop();
    expect(stack.size).toBe(1);
    expect(stack.peek).toBe("🥑");
  });
});
