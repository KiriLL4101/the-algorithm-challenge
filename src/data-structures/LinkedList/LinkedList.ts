import Comparator from '../../utils/comparator/Comparator'
import { LinkedListNode } from './LinkedListNode'

export class LinkedList {
  compare: Comparator<number>
  head: LinkedListNode | null = null
  tail: LinkedListNode | null = null

  constructor (comparatorFunction?: (a: number, b: number) => number) {
    this.compare = new Comparator<number>(comparatorFunction)
  }

  prepend (value: number): this {
    const newNode = new LinkedListNode(value, this.head ?? undefined)
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }

    return this
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

  // insert(value: number, pos: number): this {
  //   const newNode = new LinkedListNode(value)

  //   if (!this.head) {
  //     this.head = newNode
  //     this.tail = newNode

  //     return this
  //   }

  //   let cur = this.head

  //   // while(cur){

  //   //   cur = cur.next
  //   // }

  //   return this
  // }

  delete (value: number): LinkedListNode | null {
    if (!this.head) {
      return null
    }

    let deletedNode = null

    while (this.head?.value && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head

    while (currentNode?.next) {
      if (currentNode.next.value && this.compare.equal(currentNode.next.value, value)) {
        deletedNode = currentNode.next
        currentNode.next = currentNode.next.next
      } else {
        currentNode = currentNode.next
      }
    }

    if (this.tail?.value && this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode
    }

    return deletedNode
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
