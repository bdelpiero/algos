import Queue from './Queue'

describe('Queue', () => {
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
  })

  it('can dequeue items', () => {
    queue.enqueue('🥑')
    queue.enqueue('🌽')
    const dequeuedItem = queue.dequeue()
    expect(queue.size).toBe(1)
    expect(dequeuedItem).toBe('🥑')
  })

  it('iterates over the queue in the correct order with for.. of', () => {
    queue.enqueue('h')
    queue.enqueue('e')
    queue.enqueue('l')
    queue.enqueue('l')
    queue.enqueue('o')

    let result = ''
    for (const item of queue) {
      result += item
    }
    expect(result).toBe('hello')

    queue.dequeue()
    let newResult = ''
    for (const item of queue) {
      newResult += item
    }
    expect(newResult).toBe('ello')
  })
})
