import LinkedList, { buildTextFromList } from '../../LinkedList'
import { reverseList } from '../exercise30'

describe('Reverse linked list and return first node', () => {
  it('reverses 2 member list', () => {
    const list: LinkedList<string> = new LinkedList()
    list.add('h')
    list.add('e')
    const reversed = reverseList(list.firstNode)
    expect(reversed?.value).toBe('e')
    expect(reversed?.next?.value).toBe('h')
  })
  it('reverses list', () => {
    const list: LinkedList<string> = new LinkedList()
    list.add('h')
    list.add('e')
    list.add('l')
    list.add('l')
    list.add('o')
    const reversed = reverseList(list.firstNode)
    expect(reversed?.value).toBe('o')
    expect(reversed?.next?.value).toBe('l')
    expect(reversed?.next?.next?.value).toBe('l')
    expect(reversed?.next?.next?.next?.value).toBe('e')
    expect(reversed?.next?.next?.next?.next?.value).toBe('h')
  })
})
