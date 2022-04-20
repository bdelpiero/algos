import Node from "../Node";

export default class Queue<Item> implements Iterable<Item | null> {
  private first: Node<Item> | null;
  private last: Node<Item> | null;
  private count: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.count = 0;
  }

  public isEmpty() {
    return this.first === null;
  }

  get peek() {
    return this.last?.value ?? null;
  }

  get size() {
    return this.count;
  }

  public enqueue(item: Item) {
    const oldLast = this.last;
    this.last = new Node(item);
    if (!oldLast) this.first = this.last;
    else oldLast.next = this.last;
    this.count++;
  }

  public dequeue() {
    if (this.first === null) return null;
    const item = this.first;
    this.first = this.first.next;
    this.count--;
    if (this.first === null) {
      this.last = null;
    }
    return item.value;
  }

  // Generator
  *[Symbol.iterator]() {
    for (let node = this.first; node !== null; node = node.next) {
      yield node.value;
    }
  }
}
