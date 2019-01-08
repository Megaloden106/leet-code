// Given a linked list, rotate the list to the right by k places, where k is non-negative.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  if (!head || k === 0) return head;
  let length = 0;
  let node = head;
  while (node) {
    length++;
    node = node.next;
  }
  if (length < 2) return head;
  k = k % length;
  node = head;
  for (let i = 0; i < k; i++) node = node.next;
  let newHead = head;
  while (node.next) {
    newHead = newHead.next;
    node = node.next;
  }
  node.next = head;
  node = newHead;
  newHead = newHead.next;
  node.next = null;
  return newHead;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(rotateRight(head, 2))
