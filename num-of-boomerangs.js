// Given n points in the plane that are all pairwise distinct,
// a "boomerang" is a tuple of points (i, j, k)
// such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

// Find the number of boomerangs.
// You may assume that n will be at most 500 and
// coordinates of points are all in the range [-10000, 10000] (inclusive).

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @return {number}
 */
const dist = (p1, p2) => {
  const a = p1[0] - p2[0];
  const b = p1[1] - p2[1];
  return (a * a) + (b * b)
}

/**
 * @param {number[][]} points
 * @return {number}
 */
const numberOfBoomerangs = (points) => {
  let s = 0;
  for (let i = 0; i < points.length; i += 1) {
    const map = new Map();
    for (let j = 0; j < points.length; j += 1) {
      if (i === j) continue;
      const d = dist(points[i], points[j])
      map.set(d, (map.get(d) || 0) + 1);
    }
    map.forEach(e => {
      s += e * (e - 1);
    })
  }
  return s;
};

// 2 => 2
// 3 => 6
// 4 => 12

const i = [[0,0],[1,0],[2,0]];
// console.log(numberOfBoomerangs(i));

const p = [[0,0],[1,0],[-1,0],[0,1],[0,-1]];
console.log(numberOfBoomerangs(p));