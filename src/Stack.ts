interface IStack<Item> {
  peek: Item;
  push: (value: Item) => void;
  size: number;
}

export default class Stack<Item> implements IStack<Item> {
  private items: Item[];
  private top: number;

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
    delete this.items[this.top--];
  }
}
