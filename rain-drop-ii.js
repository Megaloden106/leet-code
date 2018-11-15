// Given an m x n matrix of positive integers representing the height of each unit cell in a 2D elevation map,
// compute the volume of water it is able to trap after raining.

/**
 * @param {number[][]} 2d - heightMap
 * @return {number}
 */
const trapRainWater = function(heightMap) {
  const rows = heightMap.length;
  const cols = heightMap[0].length;
  const fillMap = heightMap.map(row => row.map(() => 0));
  for (let row = 1; row < rows - 1; row += 1) {
    let left = 0;
    let right = cols - 1;
    while (left !== right) {
      if (heightMap[row][left] > heightMap[row][right]) {
        left += 1;
        if (heightMap[row][left] < heightMap[row][left - 1]) {
          fillMap[row][left] = 1;
        }
      } else {
        right -= 1;
        if (heightMap[row][right] < heightMap[row][right + 1]) {
          fillMap[row][right] = 1;
        }
      }
    }
  }
  let rain = 0;
  const findMinHeight = (row, col) => {
    if (!fillMap[row][col]) { return heightMap[row][col]; }
    let minHeight;
    let directions = [row + 1, col + 1, row - 1, col - 1];
    directions.forEach((direction, i) => {
      if (i % 2 === 0) {
        if (fillMap[direction][col] === 0) {
          minHeight = minHeight ? Math.min(minHeight, findMinHeight(direction, col)) : findMinHeight(direction, col);
        } else if (fillMap[direction][col] === 1) {
          fillMap[row][col] += 1;
          minHeight = minHeight ? Math.min(minHeight, findMinHeight(direction, col)) : findMinHeight(direction, col);
        }
      } else {
        if (fillMap[row][direction] === 0) {
          minHeight = minHeight ? Math.min(minHeight, findMinHeight(row, direction)) : findMinHeight(row, direction);
        } else if (fillMap[row][direction] === 1) {
          fillMap[row][col] += 1;
          minHeight = minHeight ? Math.min(minHeight, findMinHeight(row, direction)) : findMinHeight(row, direction);
        }
      }
      console.log(minHeight)
    })
    rain += minHeight - heightMap[row][col]
    console.log(minHeight, rain)
  }
  for (let row = 1; row < rows - 1; row += 1) {
    for (let col = 1; col < cols - 1; col += 1) {
      console.log(fillMap[row][col])
      if (fillMap[row][col] === 1) { findMinHeight(row, col); }
    }
  }
  return rain;
};

console.log(trapRainWater([ // 4
  [1,4,3,1,3,2],
  [3,2,1,3,2,4],
  [2,3,3,2,3,1],
]));

// console.log(trapRainWater([ // 14
//   [12,13,1,12],
//   [13,4,13,12],
//   [13,8,10,12],
//   [12,13,12,12],
//   [13,13,13,13]
// ]));
