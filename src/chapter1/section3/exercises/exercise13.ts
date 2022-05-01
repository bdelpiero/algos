export class ArrayQueue<Item> {
  private first: number;
  private last: number;
  private items: Item[];

  constructor(total: number) {
    this.first = 0;
    this.last = 0;
    this.items = new Array<Item>(total);
  }

  get isEmpty() {
    return this.items.length === 0;
  }

  get size() {
    return this.last - this.first;
  }

  enqueue(value: Item) {
    if (this.size === this.items.length)
      throw new Error("max size of queue exceeded");
    this.items[this.last++] = value;
  }

  dequeue() {
    const item = this.items[this.first] ?? null;
    delete this.items[this.first++];
    return item;
  }
}

export class ResizingArrayQueueOfStrings<Item> {
  private first: number;
  private last: number;
  private items: Item[];

  constructor(total: number) {
    this.first = 0;
    this.last = 0;
    this.items = new Array<Item>(total);
  }

  private resize(max: number) {
    const temp: Item[] = new Array<Item>(max);
    for (let i = 0; i < this.last; i++) temp[i] = this.items[i];
    this.items = temp;
  }

  get isEmpty() {
    return this.items.length === 0;
  }

  get size() {
    return this.last - this.first;
  }

  enqueue(value: Item) {
    if (this.size === this.items.length) this.resize(2 * this.items.length);
    this.items[this.last++] = value;
  }

  dequeue() {
    const item = this.items[this.first] ?? null;
    delete this.items[this.first++];
    if (this.last > 0 && this.last == this.items.length / 4)
      this.resize(this.items.length / 2);
    return item;
  }
}
