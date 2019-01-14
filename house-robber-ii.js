// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed. All houses at this place are arranged in a circle.
// That means the first house is the neighbor of the last one.
// Meanwhile, adjacent houses have security system connected and it will automatically contact the police
// if two adjacent houses were broken into on the same night.
// Given a list of non-negative integers representing the amount of money of each house,
// determine the maximum amount of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  if (nums.length === 1) return nums[0];
  let p1 = p2 = p3 = p4 = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let sum = nums[i] + p2;
    p2 = p1;
    if (sum > p1) p1 = sum;
    sum = nums[i + 1] + p4;
    p4 = p3;
    if (sum > p3) p3 = sum;
  }
  return Math.max(p1, p3);
};

const houses = [2];

console.log(rob(houses));