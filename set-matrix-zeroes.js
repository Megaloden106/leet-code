// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * constant space
 */
const setZeroes = (matrix) => {
  m = matrix.length;
  n = matrix[0].length;
  let rows = new Set();
  let cols = new Set();
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }
  rows.forEach(e => {
    for (let i = 0; i < n; i += 1) {
      matrix[e][i] = 0;
    }
  })
  cols.forEach(e => {
    for (let i = 0; i < m; i += 1) {
      matrix[i][e] = 0;
    }
  })
};

const i = [
  [1,1,1],
  [1,0,1],
  [1,1,1]
];

setZeroes(i);
console.log(i);