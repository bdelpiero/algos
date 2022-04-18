export interface IStack<Item> {
  size: number;
  push: (value: Item) => void;
  pop: () => Item | null;
  peek?: Item | null;
}

export interface StackContructor<Item> {
  new (): IStack<Item>;
}

export const commonStackTest = (
  implName: string,
  implStack: StackContructor<string>
) => {
  describe(`${implName}`, () => {
    let stack: IStack<string>;

    beforeEach(() => {
      stack = new implStack();
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
      if (!stack.pop) return;
      stack.push("🥑");
      stack.push("🌽");
      stack.pop();
      expect(stack.size).toBe(1);
      expect(stack.peek).toBe("🥑");
    });
  });
};

// just to avoid warning, that no tests in test file
/* describe("Common tests for Stack implementations", () => {
  test("should be used per implementation", () => {});
}); */
