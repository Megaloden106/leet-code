// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex, row = [1]) {
  const newRow = [1];
  if (row.length > 1) {
    for (let i = 0; i < row.length - 1; i++) {
      newRow.push(row[i] + row[i + 1]);
    }
  }
  newRow.push(1);
  if (rowIndex === 0) { return row; }
  return getRow(rowIndex - 1, newRow);
};

console.log(getRow(3));
