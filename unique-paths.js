/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  const matrix = Array(m).fill(0).map(() => Array(n).fill(0));
  matrix[0] = Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    matrix[i][0] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    }
  }
  return matrix[m - 1][n - 1];
};

console.log(uniquePaths(7, 3));