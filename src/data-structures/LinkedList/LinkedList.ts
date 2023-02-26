import Comparator from '../../utils/comparator/Comparator'
import { LinkedListNode } from './LinkedListNode'

export class LinkedList {
  compare: Comparator<number>
  head: LinkedListNode | null = null
  tail: LinkedListNode | null = null

  constructor (comparatorFunction?: (a: number, b: number) => number) {
    this.compare = new Comparator<number>(comparatorFunction)
  }

  append (value: number): this {
    const newNode = new LinkedListNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    this.tail && (this.tail.next = newNode)
    this.tail = newNode

    return this
  }

  toArray (): LinkedListNode[] {
    const nodes = []

    let currentNode: LinkedListNode | null = this.head
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }

  toString (callback?: (val: number | undefined) => string): string {
    return this.toArray()
      .map((node: LinkedListNode) => node.toString(callback))
      .toString()
  }
}
