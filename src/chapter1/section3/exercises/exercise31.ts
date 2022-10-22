export class DoubleNode<Item> {
  public value: Item | null
  public prev: DoubleNode<Item> | null
  public next: DoubleNode<Item> | null

  constructor(
    value?: Item,
    prev?: DoubleNode<Item>,
    next?: DoubleNode<Item> | null
  ) {
    this.value = value ?? null
    this.prev = prev ?? null
    this.next = next ?? null
  }
}

export type IDoubleNode<Item> = DoubleNode<Item> | null

// should have a this.last field. Not so useful otherwise
export default class LinkedList<Item> {
  private first: IDoubleNode<Item>
  public size: number

  constructor() {
    this.first = null
    this.size = 0
  }

  public isEmpty() {
    return this.first === null
  }

  get lastNode() {
    let last: IDoubleNode<Item> = null

    for (let node = this.first; node != null; node = node.next) {
      last = node
    }

    return last?.value ?? null
  }

  get firstNode() {
    return this.first
  }

  public insertAtTheBeginning(value: Item) {
    this.size++
    if (this.isEmpty()) {
      this.first = new DoubleNode(value)
      return
    }
    const newNode = new DoubleNode(value)
    newNode.next = this.first
    this.first!.prev = newNode
    this.first = newNode
  }

  public insertAtTheEnd(value: Item) {
    this.size++
    if (this.isEmpty()) {
      this.first = new DoubleNode(value)
      return
    }

    for (let node = this.first; node !== null; node = node.next) {
      if (!node.next) {
        node.next = new DoubleNode(value)
        node.next.prev = node
        break
      }
    }
  }

  public removeFromTheBeginning() {
    if (this.isEmpty()) return null
    this.first = this.first!.next
    if (this.first) {
      this.first.prev = null
    }
    this.size--
  }

  public removeFromTheEnd() {
    if (this.isEmpty()) return null
    if (this.first!.next === null) return this.removeFromTheBeginning()
    for (
      let node: IDoubleNode<Item> = this.first;
      node != null;
      node = node.next
    ) {
      if (node?.next?.next === null) {
        node.next = null
        break
      }
    }
    this.size--
  }

  public insertBefore(beforeItem: Item, item: Item) {
    const nodeBefore = this.getNodeByValue(beforeItem)
    if (!nodeBefore) throw new Error('node not found')

    const newNode = new DoubleNode(item, nodeBefore.prev!, nodeBefore)

    if (!nodeBefore.prev) {
      this.first = newNode
    } else {
      nodeBefore.prev!.next = newNode
    }

    nodeBefore.prev = newNode
    this.size++
  }

  public insertAfter(afterItem: Item, item: Item) {
    const nodeAfter = this.getNodeByValue(afterItem)
    if (!nodeAfter) throw new Error('node not found')

    const newNode = new DoubleNode(item, nodeAfter, nodeAfter.next!)
    nodeAfter.next = newNode
    if (newNode.next) newNode.next.prev = newNode
    this.size++
  }

  public remove(item: Item) {
    if (this.isEmpty()) throw new Error('Empty list')
    const nodeToRemove = this.getNodeByValue(item)

    if (!nodeToRemove) throw new Error('node not found')
    if (!nodeToRemove.prev) return this.removeFromTheBeginning()

    nodeToRemove.prev.next = nodeToRemove.next
    if (nodeToRemove.next) nodeToRemove.next.prev = nodeToRemove.prev
    this.size--
  }

  public getNodeByValue(key: Item) {
    for (
      let node: IDoubleNode<Item> = this.first;
      node != null;
      node = node.next
    ) {
      if (node?.value === key) {
        return node
      }
    }
  }

  *[Symbol.iterator]() {
    for (let node = this.first; node !== null; node = node.next) {
      yield node.value
    }
  }
}
