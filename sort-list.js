// Sort a linked list in O(n log n) time using constant space complexity.

/**
 Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const ll = new ListNode(3);
ll.next = new ListNode(2);
ll.next.next = new ListNode(1);
ll.next.next.next = new ListNode(0);
ll.next.next.next.next = new ListNode(4);

/**
 * @param {ListNode} head
 * @return {Tuple} // left and right halves
 */
const splitHalf = (head) => {
  if (!head || !head.next) return head;
  let length = 0;
  let node = head;
  while (node.next) {
    node = node.next;
    length++;
  }
  let count = Math.floor(length / 2);
  node = head;
  while (count > 0) {
    node = node.next;
    count--;
  }
  let head2 = node.next;
  node.next = null;
  return [head, head2];
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = (head) => {
  if (!head || !head.next) return head;
  const [n1, n2] = splitHalf(head);
  let start = sortList(n1);
  let mid = sortList(n2);
  let node = null;
  if (start.val < mid.val) {
    node = start;
    start = start.next;
  } else {
    node = mid;
    mid = mid.next;
  }
  head = node;
  while (start || mid) {
    if (start && (!mid || start.val < mid.val)) {
      node.next = start;
      start = start.next;
    } else {
      node.next = mid;
      mid = mid.next;
    }
    node = node.next;
  }
  return head;
};

console.log(sortList(ll));
