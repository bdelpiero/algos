import LinkedList from '../../LinkedList'

describe('LinkedList', () => {
  it('removeAfter() takes a linked-list Node as argument and removes the node following the given one (and does nothing if the argument or the next field in the argument node is null)', () => {
    const list = new LinkedList<string>()
    list.add('h')
    list.add('e')
    list.add('l')
    list.add('l')
    list.add('o')

    const node = list.getNodeByValue('h')
    if (!node) return
    list.removeAfter(node)

    let listAfterRemove = ''
    for (const item of list) {
      listAfterRemove += item
    }

    expect(listAfterRemove).toBe('hllo')
  })
})
