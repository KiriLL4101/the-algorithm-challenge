import { Stack } from '.'

describe('Data Structures: Stack', () => {
  const globalStack = new Stack()

  beforeEach(() => {
    globalStack.push(1)
    globalStack.push(2)
    globalStack.push(3)
  })

  const expectedProperties = ['push', 'pop', 'peek', 'isEmpty', 'clear', 'size']

  expectedProperties.forEach((property) => {
    test(`Stack class should have a ${property}() method.`, () => {
      expect(globalStack).toHaveProperty(property)
    })
  })

  test('should create empty stack', () => {
    const stack = new Stack()
    expect(stack).not.toBeNull()
  })

  test('The peek() method should return the top element of the stack', () => {
    const stack = new Stack()

    expect(stack.peek()).toBeUndefined()

    stack.push(1)
    stack.push(2)

    expect(stack.peek()).toBe(2)
    expect(stack.peek()).toBe(2)
  })

  test('The pop() method should remove and return the top element of the stack', () => {
    const stack = new Stack()

    stack.push(1)
    stack.push(2)

    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
    expect(stack.pop()).toBeUndefined()
    expect(stack.isEmpty()).toBeTruthy()
  })

  test('The isEmpty() method should return true if a stack does not contain any elements', () => {
    const stack = new Stack()

    expect(stack.isEmpty()).toBeTruthy()

    stack.push(1)

    expect(stack.isEmpty()).toBeFalsy()
  })

  test('The clear() method should remove all element from the stack', () => {
    globalStack.clear()
    expect(globalStack.size()).toBe(0)
  })

  afterEach(() => {
    globalStack.clear()
  })
})
