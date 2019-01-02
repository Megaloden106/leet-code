// Given an array A of integers, for each integer A[i] we need to choose either x = -K or x = K, and add x to A[i] (only once).
// After this process, we have some array B.
// Return the smallest possible difference between the maximum value of B and the minimum value of B.

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const smallestRangeII = (A, K) => {
  let min = Infinity;
  let max = -Infinity;
  A.forEach(e => {
    min = Math.min(min, e);
    max = Math.max(max, e);
  });
  let half = (max - min) / 2;
  min = Infinity;
  max = -Infinity;
  A.forEach(e => {
    if (e <= half) {
      min = Math.min(e + K, min);
      max = Math.max(e + K, max);
    }
    if (e >= half) {
      min = Math.min(e - K, min);
      max = Math.max(e - K, max);
    }
  });
  return max - min;
};

console.log(smallestRangeII([0, 10], 2))