/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
  let i = head;
  let j = head?.next;
  while (i && j) {
    if (i === j) {
      return true;
    }
    i = i.next;
    j = j.next?.next;
  }
  return false;
}
