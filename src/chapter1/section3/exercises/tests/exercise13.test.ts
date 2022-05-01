import { ArrayQueue, ResizingArrayQueueOfStrings } from "../exercise13";

describe("ArrayQueue", () => {
  let queue: ArrayQueue<string>;

  beforeEach(() => {
    queue = new ArrayQueue(4);
  });

  it("can enqueue items", () => {
    queue.enqueue("🥑");
    expect(queue.size).toBe(1);
    queue.enqueue("🌽");
    expect(queue.size).toBe(2);
  });

  it("can dequeue items", () => {
    queue.enqueue("🥑");
    queue.enqueue("🌽");
    const dequeuedItem = queue.dequeue();
    expect(queue.size).toBe(1);
    expect(dequeuedItem).toBe("🥑");
  });

  it("should throw an error when capacity is exceeded", () => {
    queue.enqueue("h");
    queue.enqueue("e");
    queue.enqueue("l");
    queue.enqueue("l");

    expect(() => queue.enqueue("o")).toThrow("max size of queue exceeded");
  });
});

// this exercise doesn't make much sense in TS/JS, as
// arrays are always resizeable
describe("ResizingArrayQueueOfStrings", () => {
  let queue: ResizingArrayQueueOfStrings<string>;

  beforeEach(() => {
    queue = new ResizingArrayQueueOfStrings(4);
  });

  it("can enqueue items", () => {
    queue.enqueue("🥑");
    expect(queue.size).toBe(1);
    queue.enqueue("🌽");
    expect(queue.size).toBe(2);
  });

  it("can dequeue items", () => {
    queue.enqueue("🥑");
    queue.enqueue("🌽");
    const dequeuedItem = queue.dequeue();
    expect(queue.size).toBe(1);
    expect(dequeuedItem).toBe("🥑");
  });

  it("increases the array's size when needed", () => {
    queue.enqueue("h");
    queue.enqueue("e");
    queue.enqueue("l");
    queue.enqueue("l");
    queue.enqueue("o");
    expect(queue.size).toBe(5);
  });
});
