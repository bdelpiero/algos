import Queue from '../exercise29'

describe('Queue with circular linked list implementation', () => {
  let queue: Queue<string>

  beforeEach(() => {
    queue = new Queue()
  })

  it('is created empty', () => {
    expect(queue.size).toBe(0)
    expect(queue.isEmpty()).toBe(true)
  })

  it('can enqueue items', () => {
    queue.enqueue('🥑')
    expect(queue.size).toBe(1)
    queue.enqueue('🌽')
    expect(queue.size).toBe(2)
    expect(queue.peek).toBe('🌽')
  })

  it('can dequeue items', () => {
    queue.enqueue('🥑')
    queue.enqueue('🌽')
    const dequeuedItem = queue.dequeue()
    expect(queue.size).toBe(1)
    expect(dequeuedItem).toBe('🥑')
  })
})
