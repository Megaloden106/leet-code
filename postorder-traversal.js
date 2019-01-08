// Given a binary tree, return the postorder traversal of its nodes' values.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversalDFS = (root) => !root ? [] : [...postorderTraversalDFS(root.left), ...postorderTraversalDFS(root.right), root.val];

const postorderTraversalI = (root) => {
  if (!root) return [];
  const result = [];
  const stack = [{ node: root, visited: false }];

  while (stack.length) {
    const { node, visited } = stack.pop();
    if (!node) continue;
    visited
      ? result.push(node.val)
      : stack.push(...[
        { node: node.left, visited: false },
        { node: node.right, visited: false },
        { node, visited: true },
      ].reverse());
  }

  return result;
}


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(2);
root.right.right= new TreeNode(3);

console.log(postorderTraversalDFS(root));
console.log(postorderTraversalI(root));