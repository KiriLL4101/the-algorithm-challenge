export class Stack<T> {
  protected collection: T[] = []

  push(item: T): void {
    this.collection.push(item)
  }

  pop(): T | undefined {
    return this.collection.pop()
  }

  peek(): T | undefined {
    return this.collection[this.collection.length - 1]
  }

  size(): number {
    return this.collection.length
  }

  isEmpty(): boolean {
    return this.collection.length === 0
  }

  clear(): void {
    this.collection.length = 0
  }
}
