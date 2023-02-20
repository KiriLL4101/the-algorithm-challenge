class ListNode {
  val: number
  next: ListNode | null
  constructor (val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function removeElements (head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode(undefined, head)

  let cur = head
  let prev = dummy

  while (cur) {
    if (cur.val === val) {
      prev.next = cur.next
    } else {
      prev = cur
    }
    cur = cur.next
  }

  return dummy.next
}
