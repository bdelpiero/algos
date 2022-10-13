import { INode } from '../LinkedList'

export function reverseList(first: INode<string>) {
  if (!first) return first
  let second: INode<string> = first.next
  let reverse: INode<string> = null

  for (let node = first; node !== null; node.next) {
    if (!first) break
    first.next = reverse
    reverse = first
    first = second
    second = second?.next ?? null
  }

  return reverse
}

export function reverseListRecursive(first: INode<string>): INode<string> {
  if (!first || !first.next) return first
  const second = first.next
  const reverse: INode<string> = reverseListRecursive(second)
  if (!reverse) return reverse
  second.next = first
  first.next = null
  return reverse
}
