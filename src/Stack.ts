interface IStack<Item> {
  peek: Item;
  push: (value: Item) => void;
  size: number;
}

export default class Stack<Item> implements IStack<Item> {
  private top: number;
  private items: { [key: number]: Item };

  constructor() {
    this.top = -1;
    this.items = {};
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
