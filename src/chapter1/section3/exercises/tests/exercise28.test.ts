import LinkedList from '../../LinkedList'
import { INode } from '../../LinkedList'

function max(node: INode<number>, maxVal = 0): number {
  if (!node || !node.value) return maxVal
  return max(node.next, node.value > maxVal ? node.value : maxVal)
}

describe('LinkedList', () => {
  it('recursive implementation of exercise 27', () => {
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
