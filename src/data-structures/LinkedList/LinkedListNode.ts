export class LinkedListNode {
  value: number | undefined
  next: LinkedListNode | null
  constructor (value: number | undefined, next?: LinkedListNode) {
    this.value = value
    this.next = next ?? null
  }

  toString (callback?: (val: number | undefined) => string): string {
    return callback?.(this.value) ?? `${this.value ?? ''}`
  }
}
