import { IStack } from "./tests/common";

type Node<Item> = {
  item: Item | null;
  next: Node<Item> | null;
} | null;

/**
 * Most efficient implementation, using a linked list:
 * - It can be used for any type of data.
 * - The space required is always proportional to the size of the collection.
 * - The time per operation is always independent of the size of the collection
 */
export default class Stack<Item> implements IStack<Item> {
  private first: Node<Item>;
  private totalItems: number;

  constructor() {
    this.first = null;
    this.totalItems = 0;
  }

  public isEmpty() {
    return this.first === null;
  }

  get peek() {
    return this.first?.item ?? null;
  }

  get size() {
    return this.totalItems;
  }

  public push(item: Item) {
    const oldFirst = this.first;
    this.first = {
      item: item,
      next: oldFirst,
    };
    this.totalItems++;
  }

  public pop() {
    if (!this.first) return null;
    const item = this.first.item;
    this.first = this.first.next;
    this.totalItems--;
    return item;
  }

  // Generator that replaces Iterator implementation
  *[Symbol.iterator]() {
    for (let node = this.first; node !== null; node = node.next) {
      yield node.item;
    }
  }
}
