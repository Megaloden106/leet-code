// Given integers n and k, find the lexicographically k-th smallest integer in the range from 1 to n.

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findKthNumber = (n, k) => {
  let result;
  let count = 0;
  let x = 1;
  const findNext = (x = 1) => {
    if (x > n || count === k) return;
    count++;
    result = x;
    findNext(x * 10);
    findNext(x + 1);
  }
  findNext();
  return result;
};

console.log(findKthNumber(13, 2))