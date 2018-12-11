// Given a collection of intervals, merge all overlapping intervals.

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const merge = (intervals) => {
  if (intervals.length <= 1) return intervals;
  const results = [];
  intervals = intervals.sort((a,b) => a.start - b.start); // O(nlogn)
  let start = intervals[0].start;
  let end = intervals[0].end;
  for (let i = 1; i < intervals.length; i++) {
     let interval = intervals[i];
     if (interval.start <= end) end = Math.max(end, interval.end);
     else {
       results.push(new Interval(start, end));
       start = interval.start;
       end = interval.end;
     }
  }
  results.push(new Interval(start, end));
  return results;
};