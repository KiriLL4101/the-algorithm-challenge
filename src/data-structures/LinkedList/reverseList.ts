class ListNode {
  val: number
  next: ListNode | null
  constructor (val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function reverseList (head: ListNode | null): ListNode | null {
  let prev = null
  let cur = head

  while (cur) {
    const nextNode = cur.next
    cur.next = prev
    prev = cur
    cur = nextNode
  }

  return prev
}
