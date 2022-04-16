import { IStack } from "./tests/common";

export default class Stack<Item> implements IStack<Item> {
  private top: number;
  private items: Item[];

  constructor() {
    this.top = -1;
    this.items = [];
  }

  get peek() {
    return this.items[this.top];
  }

  get size() {
    return this.top + 1;
  }

  push(value: Item) {
    this.items[++this.top] = value;
  }

  pop() {
    const item = this.items[this.top];
    delete this.items[this.top--];
    return item;
  }
}
