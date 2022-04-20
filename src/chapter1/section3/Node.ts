export default class Node<Item> {
  public value: Item | null;
  public next: Node<Item> | null;

  constructor(value?: Item, next?: Node<Item> | null) {
    this.value = value ?? null;
    this.next = next ?? null;
  }
}
