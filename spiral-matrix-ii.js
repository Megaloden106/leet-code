// Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

// Example:

// Input: 3
// Output:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const results = [];
  for (let i = 0; i < n; i += 1) { results[i] = []; }
  let count = 1, i = 0, j = 0, edge = 0;
  while (count <= n * n) {
    results[i][j] = count;
    if (i === edge + 1 && j === edge) { edge += 1; }
    if (i === edge && j < n - 1 - edge) {
      j += 1;
    } else if (j === n - 1 - edge && i < n - 1 - edge) {
      i += 1;
    } else if (i === n - 1 - edge && j > edge) {
      j -= 1;
    } else if (j === edge && i > edge + 1) {
      i -= 1
    }
    count += 1;
  }
  return results;
};

console.log(generateMatrix(4));