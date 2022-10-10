import Node from '../Node'

/**
 * Queue implementation that uses a circular linked list, which is the same
 * as a linked list except that no links are null and the value of last.next
 * is first whenever the list is not empty. Keep only one Node instance variable (last).
 * */

export default class Queue<Item> {
  private last: Node<Item>
  private count: number

  constructor() {
    this.last = new Node()
    this.last.next = this.last
    this.count = 0
  }

  public isEmpty() {
    return this.last.value === null
  }

  get peek() {
    return this.last?.value ?? null
  }

  get size() {
    return this.count
  }

  public enqueue(item: Item) {
    if (this.isEmpty()) {
      this.last.value = item
      this.count++
      return
    }

    const oldLast = this.last
    this.last = new Node(item)
    this.last.next = oldLast.next
    oldLast.next = this.last
    this.count++
  }

  public dequeue() {
    if (this.isEmpty()) return null

    const item = this.last.next

    if (this.last.next === this.last) {
      this.last.value === null
      return item!.value
    }

    this.last.next = this.last.next!.next
    this.count--
    return item!.value
  }
}
