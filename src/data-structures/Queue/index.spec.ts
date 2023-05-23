import { Queue } from '.'

describe('Data Structures: Queue', () => {
  const globalQueue = new Queue()

  const expectedProperties: string[] = ['enqueue', 'dequeue', 'front', 'size', 'isEmpty', 'clear']

  beforeEach(() => {
    globalQueue.enqueue(1)
    globalQueue.enqueue(2)
    globalQueue.enqueue(3)
  })

  expectedProperties.forEach((property) =>
    it(`Your Queue class should have a ${property}() method.`, () => {
      expect(globalQueue).toHaveProperty(property)
    })
  )

  it('should create empty queue', () => {
    const queue = new Queue()
    expect(queue).not.toBeNull()
  })

  it('The dequeue() method should remove and return the front element of the queue', () => {
    expect(globalQueue.dequeue()).toBe(1)
  })

  it('should be possible to enqueue/dequeue objects', () => {
    const queue = new Queue<Record<string, string>>()

    queue.enqueue({ value: 'test1', key: 'key1' })
    queue.enqueue({ value: 'test2', key: 'key2' })

    expect(queue.dequeue()?.value).toBe('test1')
    expect(queue.dequeue()?.value).toBe('test2')
  })

  it('The front() method should return value of the front element of the queue', () => {
    const queue = new Queue()

    expect(queue.front()).toBeUndefined()

    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.front()).toBe(1)
    expect(queue.front()).toBe(1)
  })

  it('The size() method should return the length of the queue', () => {
    expect(globalQueue.size()).toBe(3)
  })

  it('The isEmpty() method should return false if there are elements in the queue', () => {
    const queue = new Queue()

    expect(queue.isEmpty()).toBeTruthy()

    queue.enqueue(1)

    expect(queue.isEmpty()).toBeFalsy()
  })

  it('The clear() method should empty the queue then this size must be 0', () => {
    globalQueue.clear()

    expect(globalQueue.size()).toBe(0)
  })

  it('should dequeue from queue in FIFO order', () => {
    const queue = new Queue()

    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.dequeue()).toBe(1)
    expect(queue.dequeue()).toBe(2)
    expect(queue.dequeue()).toBeUndefined()
    expect(queue.isEmpty()).toBeTruthy()
  })

  afterEach(() => {
    globalQueue.clear()
  })
})
