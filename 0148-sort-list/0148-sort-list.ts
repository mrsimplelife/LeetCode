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

type ListNodeType = ListNode | null;

function sortList(head: ListNodeType): ListNodeType {
  if (!head || !head.next) return head;
  let length = getLength(head);

  const fakeHead = new ListNode(0);
  fakeHead.next = head;

  for (let size = 1; size < length; size *= 2) {
    let prev = fakeHead;
    let curr: ListNodeType = prev.next;
    while (curr) {
      const left = curr;
      const right = split(left, size);
      curr = split(right, size);
      prev = merge(prev, left, right);
    }
  }

  return fakeHead.next;
}

function getLength(node: ListNodeType) {
  let length = 0;
  while (node) {
    length += 1;
    node = node.next;
  }
  return length;
}

function split(head: ListNodeType, size: number): ListNodeType {
  if (!head) return null;
  while (size > 1 && head) {
    head = head.next;
    size -= 1;
  }
  if (!head) {
    return null;
  }
  const next = head.next;
  head.next = null;
  return next;
}

function merge(head: ListNode, left: ListNodeType, right: ListNodeType): ListNode {
  while (left && right) {
    if (left.val < right.val) {
      head.next = left;
      left = left.next;
    } else {
      head.next = right;
      right = right.next;
    }
    head = head.next!;
  }

  head.next = left ? left : right;

  while (head.next) {
    head = head.next;
  }

  return head;
}