import { INode } from '../LinkedList'

export function reverseList<Item>(first: INode<Item>) {
  if (!first) return first
  let second: INode<Item> = first.next
  let reverse: INode<Item> = null

  for (let node = first; node !== null; node.next) {
    if (!first) break
    first.next = reverse
    reverse = first
    first = second
    second = second?.next ?? null
  }

  return reverse
}

// explicación clara, con pointers (c++): https://www.youtube.com/watch?v=KYH83T4q6Vs&t=39s
export function reverseListRecursive<Item>(first: INode<Item>): INode<Item> {
  if (!first || !first.next) return first
  const second = first.next
  const reverse: INode<Item> = reverseListRecursive(second)
  if (!reverse) return reverse

  // the second one will now point to the one before it
  second.next = first
  // the first one will now be the last one (that's why it points to null)
  first.next = null

  return reverse
}
