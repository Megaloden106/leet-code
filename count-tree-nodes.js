// Given a complete binary tree, count the number of nodes.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = (root) => {
  if (root === null) return 0;
  let s = 0
  s += countNodes(root.left);
  s += countNodes(root.right);
  return s += 1;
};