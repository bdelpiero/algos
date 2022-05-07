import Node from "./Node";

type INode<Item> = Node<Item> | null;

export default class LinkedList<Item> {
  private first: INode<Item>;

  constructor() {
    this.first = null;
  }

  public isEmpty() {
    return this.first === null;
  }

  get lastNode() {
    let last: INode<Item> = null;
    for (let node = this.first; node != null; node = node.next) {
      last = node;
    }
    return last?.value ?? null;
  }

  public add(value: Item) {
    if (this.isEmpty()) {
      this.first = new Node(value, null);
      return;
    }
    for (let node: INode<Item> = this.first; node != null; node = node.next) {
      if (node.next == null) {
        node.next = new Node(value, null);
        return;
      }
    }
  }

  public removeLast() {
    if (this.isEmpty()) return null;
    if (this.first!.next === null) this.first = null;

    let last: INode<Item> = null;
    for (let node: INode<Item> = this.first; node != null; node = node.next) {
      if (node?.next?.next === null) {
        last = node;
        node.next = null;
      }
    }
    return last?.value ?? null;
  }

  public delete(k: number) {
    if (this.isEmpty()) throw new Error("Empty list");

    if (k === 1) {
      const deletedValue = this.first!.value;
      this.first = this.first!.next;
      return deletedValue;
    }

    let count = 1;
    for (let node: INode<Item> = this.first; node != null; node = node.next) {
      if (++count === k) {
        if (!node.next) throw new Error("Out of range");
        const deletedValue = node.next.value;
        node.next = node.next.next;
        return deletedValue;
      }
    }
  }
}
