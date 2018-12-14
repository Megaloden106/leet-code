// Given an array of unique integers, each integer is strictly greater than 1.
// We make a binary tree using these integers and each number may be used for any number of times.
// Each non-leaf node's value should be equal to the product of the values of it's children.
// How many binary trees can we make?  Return the answer modulo 10 ** 9 + 7.

/**
 * @param {number[]} A
 * @return {number}
 */
const numFactoredBinaryTrees = (A) => {
  const cache = {};
  A.forEach(e => cache[e] = 1);
  A = A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; A[j] <= Math.sqrt(A[i]); j++) {
      let div = A[i] / A[j];
      if (div % 1 === 0 && cache[div] && cache[A[j]]) {
        cache[A[i]] += div === A[j]
          ? cache[A[j]] * cache[A[j]]
          : cache[A[j]] * cache[div] * 2;
      }
    }
  }
  let res = 0;
  for (let k in cache) {
    res += cache[k];
  }
  return res % (10 ** 9 + 7);
};

const A = [2,4,5,10,20,16]
console.log(numFactoredBinaryTrees(A)) // 7