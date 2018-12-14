/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {array} array
 * @return {boolean}
 */
const isArraySymmetric = (array) => {
  if (array.length % 2 !== 0) return false;
  array = array.map(e => e === null ? null : e.val)
  let left = Math.floor((array.length - 1) / 2);
  let right = Math.ceil((array.length - 1) / 2);
  while (left >= 0) {
    if (array[left--] !== array[right++]) return false;
  }
  return true;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
  if (!root) return root;
  const queue = [root];
  let count = queue.length;
  while (queue.length > 0) {
    let node = queue.shift();
    if (node) queue.push(node.left, node.right);
    count--;
    if (count === 0) {
      if (!isArraySymmetric(queue)) return false;
      count = queue.length;
    }
  }
  return true;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(3);

console.log(isSymmetric(root))