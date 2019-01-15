// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let max = prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    prev = Math.max(num, prev + num);
    max = Math.max(max, prev);
  }
  return max;
};

console.log(maxSubArray([-1,-2]))