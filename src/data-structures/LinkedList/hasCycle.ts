class ListNode {
  val: number
  next: ListNode | null
  constructor (val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function hasCycle (head: ListNode | null): boolean {
  let fast = head?.next
  let slow = head

  while (fast?.next) {
    if (Object.is(fast, slow)) {
      return true
    }

    fast = fast.next.next
    slow &&= slow?.next
  }

  return false
}
