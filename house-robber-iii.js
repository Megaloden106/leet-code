// The thief has found himself a new place for his thievery again.
// There is only one entrance to this area, called the "root."
// Besides the root, each house has one and only one parent house.
// After a tour, the smart thief realized that "all houses in this place forms a binary tree".
// It will automatically contact the police if two directly-linked houses were broken into on the same night.
// Determine the maximum amount of money the thief can rob tonight without alerting the police.

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
const rob = (root) => {
  const DFS  = (node = root) => {
    if (!node) return [0, 0];
    let left = DFS(node.left);
    let right = DFS(node.right);
    let sum = node.val + left[1] + right[1]
    let p2 = left[0] + right[0];
    let p1 = sum > p2 ? sum : p2;
    return [p1, p2];
  }
  return Math.max(...DFS());
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const r1 = new TreeNode(3);
r1.left = new TreeNode(2);
r1.right = new TreeNode(3);
r1.left.right = new TreeNode(3);
r1.right.right = new TreeNode(1);

console.log(rob(r1)); // 7

const r2 = new TreeNode(3);
r2.left = new TreeNode(4);
r2.right = new TreeNode(5);
r2.left.left = new TreeNode(1);
r2.left.right = new TreeNode(3);
r2.right.right = new TreeNode(1);

console.log(rob(r2)); // 9