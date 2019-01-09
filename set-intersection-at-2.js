// An integer interval [a, b] (for integers a < b) is a set of all consecutive integers from a to b, including a and b.
// Find the minimum size of a set S such that for every integer interval A in intervals, the intersection of S with A has size at least 2.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const intersectionSizeTwo = (intervals) => {
  const sorted = intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1])
  let result = 0;
  let left = right = -1;
  for (let i = 0; i < sorted.length; i++) {
    let interval = sorted[i];
    if (interval[0] <= left) continue;
    if (interval[0] > right) {
      result += 2;
      right = interval[1];
      left = right - 1;
    } else {
      result++;
      left = right;
      right = interval[1];
    }
  }
  return result;
};

const intervals = [
  [1,4],
  [1,3],
  [3,5],
  [2,5],
]
console.log(intersectionSizeTwo(intervals));