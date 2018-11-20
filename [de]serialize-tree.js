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
const serialize = function(root) {
  const vals = [];
  const DFS = (node = root) => {
    vals.push(node ? node.val : node);
    if (!node) return;
    DFS(node.left);
    DFS(node.right);
  }
  DFS();
  return vals;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function(data) {
  if (data[0] === null) return null;
  const root = new TreeNode(data[0]);
  const DFS = (node = root, idx = 1) => {
    if (idx >= data.length) return idx + 1;
    if (data[idx]) {
      node.left = new TreeNode(data[idx]);
      idx = DFS(node.left, idx + 1);
    } else {
      node.left = null;
      idx += 1;
    }
    if (data[idx]) {
      node.right = new TreeNode(data[idx]);
      idx = DFS(node.right, idx + 1);
    } else {
      node.right = null;
      idx += 1;
    }
    return idx;
  }
  DFS();
  return root;
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

const root = null

const s = serialize(root);
console.log(s);
const d = deserialize(s);
console.log(serialize(d));