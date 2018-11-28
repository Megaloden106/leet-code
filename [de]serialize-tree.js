// Serialization is the process of converting a data structure or object into a sequence of bits
// so that it can be stored in a file or memory buffer, or transmitted across a network connection
// link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary search tree.
// There is no restriction on how your serialization/deserialization algorithm should work.
// You just need to ensure that a binary search tree can be serialized to a string and this
// string can be deserialized to the original tree structure.

// The encoded string should be as compact as possible.

// Note: Do not use class member/global/static variables to store states.
// Your serialize and deserialize algorithms should be stateless.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }

  add(val) {
    const node = new TreeNode(val);
    if (val < this.val) {
      this.left
        ? this.left.add(val)
        : this.left = node;
    } else {
      this.right
        ? this.right.add(val)
        : this.right = node;
    }
  }
};

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = (root) => {
  if (!root) return "[]";
  const values = [];
  const DFS = (node = root) => {
    values.push(node.val);
    if (node.left) DFS(node.left);
    if (node.right) DFS(node.right);
  }
  DFS();
  return JSON.stringify(values);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = (data) => {
  const values = JSON.parse(data);
  const DFS = (array = values) => {
    if (array.length === 0) return null;
    const node = new TreeNode(array[0]);
    node.left = DFS(array.filter(num => num < array[0]));
    node.right = DFS(array.filter(num => num > array[0]));
    return node;
  }
  return DFS();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// const root = new TreeNode(41);
// root.add(37);
// root.add(44);
// root.add(24);
// root.add(4);
// root.add(7);

const root = null;

const s = serialize(root);
console.log(s);
const d = deserialize(s);
console.log(d)
console.log(serialize(d));