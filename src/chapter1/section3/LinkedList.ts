import Node from './Node';

export type INode<Item> = Node<Item> | null;

// not added as class method because it works only for string values
export function buildTextFromList(list: LinkedList<string>) {
  let listAfterRemove = '';

  for (const item of list) {
    listAfterRemove += item;
  }

  return listAfterRemove;
}

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

  get firstNode() {
    return this.first;
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
    if (this.isEmpty()) throw new Error('Empty list');

    if (k === 0) {
      this.first = this.first?.next ?? null;
      return;
    }

    let count = 0;
    for (let node: INode<Item> = this.first; node != null; node = node.next) {
      if (++count === k) {
        if (!node?.next) break;
        node.next = node.next.next;
        return;
      }
    }

    throw new Error('Out of range');
  }

  public removeAfter(node: INode<Item>) {
    if (!node?.next) return;

    for (
      let current: INode<Item> = this.first;
      current != null;
      current = current.next
    ) {
      if (node.value === current.value) current.next = current.next!.next;
    }
  }

  public getNodeByValue(key: Item) {
    for (let node: INode<Item> = this.first; node != null; node = node.next) {
      if (node?.value === key) {
        return node;
      }
    }
  }

  public insertAfter(first: INode<Item>, second: INode<Item>) {
    if (!first || !second) return;
    second.next = first.next;
    first.next = second;
  }

  *[Symbol.iterator]() {
    for (let node = this.first; node !== null; node = node.next) {
      yield node.value;
    }
  }
}
