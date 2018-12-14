/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = (root) => {
  const result = [];
  if (!root) return result;
  const zigzag = (stack = [root], depth = 0) => {
    result.push(stack.map(node => node.val));
    const newStack = [];
    for (let i = stack.length - 1; i >= 0; i--) {
      if (depth % 2 === 0) {
        if (stack[i].right) newStack.push(stack[i].right);
        if (stack[i].left) newStack.push(stack[i].left);
      }
      else {
        if (stack[i].left) newStack.push(stack[i].left);
        if (stack[i].right) newStack.push(stack[i].right);
      }
    }
    if (newStack.length > 0) zigzag(newStack, depth + 1)
  }
  zigzag();
  return result;
};