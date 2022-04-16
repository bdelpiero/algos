interface IStack<Item> {
  push(value: Item): void;
  pop(): Item;
  isEmpty(): boolean;
  size: number;
}

/**
 * Implementation of stack that doesn't rely on javascript's array resizing.
 */
export default class ResizingArrayStack<Item>
  implements IStack<Item>, Iterable<Item>
{
  private items: Item[] = new Array<Item>(1);
  private top: number = 0;

  public isEmpty() {
    return this.top === 0;
  }

  get size() {
    return this.top;
  }

  // Move stack to a new array of size max.
  private resize(max: number) {
    const temp: Item[] = new Array<Item>(max);
    for (let i = 0; i < this.top; i++) temp[i] = this.items[i];
    this.items = temp;
  }

  public push(item: Item) {
    if (this.top == this.items.length) this.resize(2 * this.items.length);
    this.items[this.top++] = item;
  }

  get peek() {
    return this.items[this.top - 1];
  }

  public pop(): Item {
    const item = this.items[--this.top];
    if (this.top > 0 && this.top == this.items.length / 4)
      this.resize(this.items.length / 2);
    return item;
  }

  // Iterator
  [Symbol.iterator](): Iterator<Item> {
    throw new Error("Method not implemented.");
  }
}
