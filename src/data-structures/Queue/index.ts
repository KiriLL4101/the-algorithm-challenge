export class Queue<T> {
  protected collection: T[] = []

  enqueue(item: T): void {
    this.collection.push(item)
  }

  dequeue(): T | undefined {
    return this.collection.shift()
  }

  front(): T | undefined {
    return this.collection[0]
  }

  size(): number {
    return this.collection.length
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  clear(): void {
    this.collection.length = 0
  }
}
