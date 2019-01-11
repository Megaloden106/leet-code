// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
// Note: The algorithm should run in linear time and in O(1) space.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = (nums) => {
  const count = {};
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    count[num] = (count[num] || 0) + 1;
  }
  for (let k in count) {
    if (count[k] > nums.length / 3) result.push(+k);
  }
  return result;
};

console.log(majorityElement([3,2,1,1,3,1,3,2]));