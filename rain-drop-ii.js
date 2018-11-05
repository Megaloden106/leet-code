// Given an m x n matrix of positive integers representing the height of each unit cell in a 2D elevation map,
// compute the volume of water it is able to trap after raining.

/**
 * @param {number[]} 1d - heightMap
 * @return {number}
 */
const trapRainWater1d = function(heightMap) {
  const result = new Array(heightMap.length).fill(0);
  let left = 0;
  let leftWall = left;
  let right = heightMap.length - 1;
  let rightWall = right;
  while (left !== right) {
    if (heightMap[left] <= heightMap[right]) {
      left += 1;
      if (heightMap[left] >= heightMap[leftWall]) {
        leftWall = left;
      } else {
        result[left] = heightMap[leftWall] - heightMap[left];
      }
    } else {
      right -= 1;
      if (heightMap[right] >= heightMap[rightWall]) {
        rightWall = right;
      } else {
        result[right] = heightMap[rightWall] - heightMap[right];
      }
    }
  }
  return result;
};

/**
 * @param {number[][]} 2d - heightMap
 * @return {number}
 */
const trapRainWater = function(heightMap) {
  if (heightMap.length === 0) { return 0; }
  const m = heightMap.length;
  const n = heightMap[0].length;
  const rainMap = heightMap.map(() => new Array(n).fill(0));
  for (let row = 1; row < m - 1; row += 1) {
    rainMap[row] = trapRainWater1d(heightMap[row]);
  }
  for (let col = 1; col < n - 1; col += 1) {
    let column = [];
    for (let i = 0; i < m; i += 1) {
      column.push(heightMap[i][col])
    }
    column = trapRainWater1d(column)
    for (let row = 1; row < m - 1; row += 1) {
      rainMap[row][col] = Math.min(rainMap[row][col], column[row]);
    }
  }
  console.log(rainMap)
  return rainMap.reduce((acc1, val) => acc1 + val.reduce((acc2, val) => acc2 + val, 0), 0)
};

console.log(trapRainWater([ // 4
  [1,4,3,1,3,2],
  [3,2,1,3,2,4],
  [2,3,3,2,3,1],
]))

console.log(trapRainWater([ // 14
  [12,13,1,12],
  [13,4,13,12],
  [13,8,10,12],
  [12,13,12,12],
  [13,13,13,13]
]))
