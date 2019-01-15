// Given an array nums of n integers where n > 1,
// return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const result = Array(nums.length).fill(1);
  let left = 1;
  let right = 1;
  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    result[i] *= left;
    result[j] *= right;
    left *= nums[i];
    right *= nums[j];
  }
  return result;
};

// O(1) space (not including result array), O(n) time, and no division

console.log(productExceptSelf([1,2,3,4]))