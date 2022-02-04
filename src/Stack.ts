interface IStack {
  peek: any;
  push: (value: any) => void;
  size: number;
}

export default class Stack implements IStack {
  private top: number;
  private items: { [key: number]: any };

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

  push(value: any) {
    this.items[++this.top] = value;
  }

  pop() {
    delete this.items[this.top--];
  }
}
