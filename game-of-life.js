// According to the Wikipedia's article: "The Game of Life, also known simply as Life,
// is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
// Given a board with m by n cells, each cell has an initial state live (1) or dead (0).
// Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using
// the following four rules (taken from the above Wikipedia article):
// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population..
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// Write a function to compute the next state (after one update) of the board given its current state.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

/**
 * @param {number[][]} board
 * @param {number} i
 * @param {numberj} j
 * @return {number}
 */
const countNeighbors = (board, i ,j) => {
  let count = 0;
  const children = [];
  for (let row = i - 1; row <= i + 1; row++) {
    for (let col = j - 1; col <= j + 1; col++) {
      if (board[row] && board[row][col] !== undefined && (row !== i || col !== j)) {
        count += board[row][col];
        children.push([row, col])
      }
    }
  }
  return [count, children];
}

/**
 * @param {number[][]} board
 * @param {number[][]} mask
 * @param {number} i
 * @param {numberj} j
 * @return {void}
 */
const updateLife = (board, mask, i, j) => {
  if (mask[i][j] === 2) {
    const [neighbors, children] = countNeighbors(board, i ,j);
    if (board[i][j] === 1) mask[i][j] = neighbors < 2 || neighbors > 3 ? 0 : 1;
    else mask[i][j] = neighbors === 3 ? 1 : 0;
    if (neighbors > 1) children.forEach(cell => updateLife(board, mask, cell[0], cell[1]));
  }
}

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = (board) => {
  const m = board.length;
  const n = board[0].length;
  const mask = Array(m).fill(null).map(() => Array(n).fill(2));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) updateLife(board, mask, i, j);
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mask[i][j] !== 2) board[i][j] = mask[i][j];
    }
  }
  console.log(board)
};

const board = [
  [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [0,1,0,0,0,0,0,0,0,0,0,0,1,0],
  [0,0,1,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,1,0,0,0,0,0,0,1,0,0,0],
  [0,0,0,0,1,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,0,1,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,1,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,1,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,0,1,0,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,1,0,0,0,0],
  [0,0,0,1,0,0,0,0,0,0,1,0,0,0],
  [0,0,1,0,0,0,0,0,0,0,0,1,0,0],
  [0,1,0,0,0,0,0,0,0,0,0,0,1,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
];

for (let i = 0; i < 10; i++ ) gameOfLife(board)