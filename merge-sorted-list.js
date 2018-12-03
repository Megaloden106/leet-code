/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  let n1 = l1;
  let n2 = l2;
  let head, node, next;
  while (n1 || n2) {
    if (n1.val < n2.val || !n2) {
      next = n1;
      n1 = n1.next;
    } else {
      next = n2;
      n2 = n2.next;
    }
    if (!head) node = head = next;
    else node = node.next = next;
  }
  return head;
};