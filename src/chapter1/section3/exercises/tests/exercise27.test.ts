import LinkedList from '../../LinkedList'
import { INode } from '../../LinkedList'

export function max(firstNode: INode<number>) {
  if (!firstNode) return 0
  let max = 0
  for (let node: INode<number> = firstNode; node != null; node = node.next) {
    if (node.value! > max) max = node.value!
  }
  return max
}

describe('LinkedList', () => {
  it('max() takes a reference to the first node in a linked list as argument and returns the value of the maximum key in the list. Assume that all keys are positive integers, and return 0 if the list is empty', () => {
    const emptyList = new LinkedList<number>()

    expect(max(emptyList.firstNode)).toBe(0)

    const list = new LinkedList<number>()
    list.add(1)
    list.add(10)
    list.add(25)
    list.add(3)
    list.add(4)

    expect(max(list.firstNode)).toBe(25)
  })
})
