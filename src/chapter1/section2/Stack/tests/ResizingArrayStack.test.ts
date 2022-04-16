import ResizingArrayStack from "../ResizingArrayStack";
import { commonStackTest } from "./common.test";

commonStackTest("ResizingArrayStack", ResizingArrayStack);

describe("ResizingArrayStackIterator", () => {
  it("next() on the a stack with one item returns an object with done: true and value", () => {
    const stack = new ResizingArrayStack();
    stack.push("h");
    const iterator = stack[Symbol.iterator]();
    expect(iterator.next()).toEqual({ done: false, value: "h" });
  });
  it("with a stack of more than one item, make sure the iterator goes through each item, in the correct order. Each item should have the correct `done` (false or undefined if not the last item left) and `value` properties", () => {
    const stack = new ResizingArrayStack();
    stack.push("h");
    stack.push("i");
    const iterator = stack[Symbol.iterator]();
    expect(iterator.next()).toEqual({ done: false, value: "i" });
    expect(iterator.next()).toEqual({ done: false, value: "h" });
    expect(iterator.next()).toEqual({ done: true, value: 0 });
    expect(iterator.next()).toEqual({ done: true, value: undefined });
  });
  it("iterates over the stack in the correct order with for.. of", () => {
    const stack = new ResizingArrayStack();
    stack.push("o");
    stack.push("l");
    stack.push("l");
    stack.push("e");
    stack.push("h");

    let result = "";
    for (const item of stack) {
      result += item;
    }
    expect(result).toBe("hello");
  });
});
