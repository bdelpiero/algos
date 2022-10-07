import Node from '../Node'

/**
 * Most efficient implementation, using a linked list:
 * - It can be used for any type of data.
 * - The space required is always proportional to the size of the collection.
 * - The time per operation is always independent of the size of the collection
 */
export default class Bag<Item> implements Bag<Item>, Iterable<Item | null> {
  private first: Node<Item> | null

  constructor() {
    this.first = null
  }

  public isEmpty() {
    return this.first === null
  }

  public add(item: Item) {
    const oldFirst = this.first
    this.first = new Node(item, oldFirst)
  }

  // Generator that replaces Iterator implementation
  *[Symbol.iterator]() {
    for (let node = this.first; node !== null; node = node.next) {
      yield node.value
    }
  }
}
