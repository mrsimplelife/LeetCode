function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let result = null;
  let current = null;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    const val1 = l1 !== null ? l1.val : 0;
    const val2 = l2 !== null ? l2.val : 0;
    const sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    const digit = sum % 10;

    const newNode = new ListNode(digit);
    if (result === null) {
      result = newNode;
      current = result;
    } else {
      current.next = newNode;
      current = current!.next;
    }

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carry !== 0) {
    current.next = new ListNode(carry);
  }

  return result;
}
