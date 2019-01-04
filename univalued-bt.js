/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isUnivalTree = (root) => {
  if (!root) return true;
  const target = root.val;
  let result = true;
  const DFS = (node = root) => {
    if (!node || !result) return;
    if (node.val !== target) return result = false;
    DFS(node.left);
    DFS(node.right);
  }
  DFS();
  return false;
};