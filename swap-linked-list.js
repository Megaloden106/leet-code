// Given a linked list, swap every two adjacent nodes and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = (head) => {
  if (!head || !head.next) { return head; }
  let node = head;
  while (node && node.next) {
    const temp = node.val;
    node.val = node.next.val;
    node.next.val = temp;
    node = node.next.next;
  }
  return head;
};