// There are a number of spherical balloons spread in two-dimensional space.
// For each balloon, provided input is the start and end coordinates of the horizontal diameter.
// Since it's horizontal, y-coordinates don't matter and hence the x-coordinates of start and end of the diameter suffice.
// Start is always smaller than end. There will be at most 104 balloons.

// An arrow can be shot up exactly vertically from different points along the x-axis.
// A balloon with xstart and xend bursts by an arrow shot at x if xstart ≤ x ≤ xend. There is no limit to the number of arrows that can be shot.
// An arrow once shot keeps travelling up infinitely.
// The problem is to find the minimum number of arrows that must be shot to burst all balloons.

/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = (points) => {
  if (points.length === 0) { return 0; }
  points.sort((a, b) => a[0] - b[0]);
  console.log(points)
  let arrows = 0;
  let prev = points[0][0] - 1;
  points.forEach(balloon => {
    if (balloon[0] > prev) {
      arrows += 1;
      prev = balloon[1];
    } else {
      prev = Math.min(prev, balloon[1])
    }
  });
  return arrows;
};

// let points = [[10,16],[2,8],[1,8],[1,6],[7,12]];
// let solution = findMinArrowShots(points);
// console.log(solution);

points = [[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7],[5,6]];
solution = findMinArrowShots(points);
console.log(solution);