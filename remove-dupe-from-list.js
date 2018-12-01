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
const deleteDuplicates = (head) => {
  if (!head) return head;
  let node = head;
  while (node.next) {
    if (node.next.val === node.val) {
      node.next = node.next.next;
    } else {
      node = node.next
    }
  }
  return head;
};