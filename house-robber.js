// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and
// it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given a list of non-negative integers representing the amount of money of each house,
// determine the maximum amount of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  let prev1 = prev2 = 0;
  nums.forEach(num => {
    let sum = num + prev2;
    prev2 = prev1;
    if (sum > prev1) prev1 = sum;
  });
  return prev1;
};

const houses = [1,2,3,1];

console.log(rob(houses)); // 4