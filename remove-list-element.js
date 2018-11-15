// Remove all elements from a linked list of integers that have value val.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
  if (!head) { return head; }
  while (head && head.val === val) {
    head = head.next;
  }
  let node = head;
  while (node && node.next) {
    while (node.next && node.next.val === val) {
      node.next = node.next.next;
    }
    node = node.next
  }
  return head;
};