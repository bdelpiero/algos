import { IStack } from "./tests/common";
import Node from "../Node";

/**
 * Most efficient implementation, using a linked list:
 * - It can be used for any type of data.
 * - The space required is always proportional to the size of the collection.
 * - The time per operation is always independent of the size of the collection
 */
export default class Stack<Item>
  implements IStack<Item>, Iterable<Item | null>
{
  private first: Node<Item> | null;
  private count: number;

  constructor() {
    this.first = null;
    this.count = 0;
  }

  public isEmpty() {
    return this.first === null;
  }

  get peek() {
    return this.first?.value ?? null;
  }

  get size() {
    return this.count;
  }

  public push(item: Item) {
    const oldFirst = this.first;
    this.first = new Node(item, oldFirst);
    this.count++;
  }

  public pop() {
    if (!this.first) return null;
    const item = this.first.value;
    this.first = this.first.next;
    this.count--;
    return item;
  }

  // Generator that replaces Iterator implementation
  *[Symbol.iterator]() {
    for (let node = this.first; node !== null; node = node.next) {
      yield node.value;
    }
  }
}
