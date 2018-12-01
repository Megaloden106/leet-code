// Given a binary search tree and the lowest and highest boundaries as L and R,
// trim the tree so that all its elements lies in [L, R] (R >= L).
// You might need to change the root of the tree,
// so the result should return the new root of the trimmed binary search tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const trimBST = (root, L, R) => {
  if (root == null) return root;
  if (root.val > R) return trimBST(root.left, L, R);
  if (root.val < L) return trimBST(root.right, L, R);

  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);
  return root;
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
  add(val) {
    if (val < this.val) {
      if (this.left) this.left.add(val);
      else this.left = new TreeNode(val);
    } else {
      if (this.right) this.right.add(val);
      else this.right = new TreeNode(val);
    }
  }
}

const input = [1,0,2]

const root = new TreeNode(input[0]);
for (let i = 1; i < input.length; i++) {
  root.add(input[i])
}

console.log(trimBST(root, 1, 2))