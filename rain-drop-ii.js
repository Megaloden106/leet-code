// Given an m x n matrix of positive integers representing the height of each unit cell in a 2D elevation map,
// compute the volume of water it is able to trap after raining.

/**
 * @param {number[][]} 2d - heightMap
 * @return {number}
 */
const trapRainWater = function(heightMap) {
  const fillMap = heightMap.map(row => row.map(() => 0));
  const maxHMap = heightMap.map(row => row.map(() => 0));
  for (let i = 1; i < heightMap.length - 1; i += 1) {
    for (let j = 1; j < heightMap[0].length - 1; j += 1) {
      let left = 0;
      let right = heightMap[0].length - 1;
      let top = 0;
      let bottom = heightMap.length - 1;
      while (left < j && right > j && top < i && bottom > i && !fillMap[i][j]) {
        if (heightMap[i][left] > heightMap[i][j]
          && heightMap[i][right] > heightMap[i][j]
          && heightMap[top][j] > heightMap[i][j]
          && heightMap[bottom][j] > heightMap[i][j]
        ) {
          fillMap[i][j] = 1;
        }
        if (heightMap[i][left] <= heightMap[i][j]) left += 1;
        if (heightMap[i][right] <= heightMap[i][j]) right -= 1;
        if (heightMap[top][j] <= heightMap[i][j]) top += 1;
        if (heightMap[bottom][j] <= heightMap[i][j]) bottom -= 1;
      }
    }
  }
  let water = 0;
  const findMax = (i, j) => {
    if (fillMap[i][j] < 1) return heightMap[i][j];
    fillMap[i][j] = 2;
    maxHMap[i][j] = Math.min();
    if (fillMap[i][j - 1] < 2) maxHMap[i][j] = Math.min(maxHMap[i][j], findMax(i, j - 1));
    if (fillMap[i][j + 1] < 2) maxHMap[i][j] = Math.min(maxHMap[i][j], findMax(i, j + 1));
    if (fillMap[i - 1][j] < 2) maxHMap[i][j] = Math.min(maxHMap[i][j], findMax(i - 1, j));
    if (fillMap[i + 1][j] < 2) maxHMap[i][j] = Math.min(maxHMap[i][j], findMax(i + 1, j));
    return maxHMap[i][j];
  }
  for (let i = 1; i < fillMap.length - 1; i += 1) {
    for (let j = 1; j < fillMap[0].length - 1; j += 1) {
      if (fillMap[i][j] > 0) {
        water += findMax(i, j) - heightMap[i][j];
        fillMap[i][j] = 0;
        heightMap[i][j] = maxHMap[i][j];
      }
    }
  }
  console.log(maxHMap)
  console.log(heightMap)
  return water;
};

// console.log(trapRainWater([ // 4
//   [1,4,3,1,3,2],
//   [3,2,1,3,2,4],
//   [2,3,3,2,3,1],
// ]));

// console.log(trapRainWater([ // 14
//   [12,13,1,12],
//   [13,4,13,12],
//   [13,8,10,12],
//   [12,13,12,12],
//   [13,13,13,13]
// ]));

console.log(trapRainWater([
  [14,17,18,16,14,16],
  [17,3 ,10,2 ,3 ,8 ],
  [11,10,4 ,7 ,1 ,7 ],
  [13,7 ,2 ,9 ,8 ,10],
  [13,1 ,3 ,4 ,8 ,6 ],
  [20,3 ,3 ,9 ,10,8 ]]));
