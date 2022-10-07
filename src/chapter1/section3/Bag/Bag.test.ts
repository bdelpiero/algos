import { isTemplateExpression } from 'typescript'
import Bag from './Bag'

describe('Bag', () => {
  let bag: Bag<string>

  beforeEach(() => {
    bag = new Bag()
  })

  it('is created empty', () => {
    expect(bag.isEmpty()).toBe(true)
  })

  it('can add to the bag', () => {
    bag.add('🥑')
    bag.add('🌽')
  })

  it('can iterate through the bag with for... of', () => {
    const items = ['h', 'e', 'l', 'l', 'o']
    items.forEach((item) => bag.add(item))

    for (const item of bag) {
      expect(items.indexOf(item ?? '')).not.toBe(-1)
    }
  })
})
