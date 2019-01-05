/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = (obstacleGrid) => {
  let matrix = obstacleGrid.map(row => row.map(cell => cell === 1 ? 0 : null));
  const m = matrix.length;
  const n = matrix[0].length;
  if (matrix[0][0] !== null) return 0;
  else matrix[0][0] = 1;
  console.log(matrix);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const up = matrix[i - 1] ? matrix[i - 1][j] : 0;
      const left = matrix[i][j - 1] || 0;
      if (matrix[i][j] === null) matrix[i][j] = up + left;
    }
  }
  return matrix[m - 1][n - 1];
};

const matrix = [
  [0, 0],
  [1, 1],
  [0, 0],
];

console.log(uniquePathsWithObstacles(matrix))