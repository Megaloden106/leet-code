// Given a linked list, remove the n-th node from the end of list and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  let node = head;
  for (let i = 0; i < n; i++) {
    node = node.next;
  }
  if (!node) return head.next;
  let remove = head;
  while (node.next) {
    remove = remove.next;
    node = node.next;
  }
  remove.next = remove.next.next;
  return head;
};