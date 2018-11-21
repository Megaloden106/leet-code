// Given a sorted positive integer array nums and an integer n,
// add/patch elements to the array such that any number in range [1, n]
// inclusive can be formed by the sum of some elements in the array.
// Return the minimum number of patches required.

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
const minPatches = (nums, n) => {
  let patches = 0;
  let sum = 0;
  let idx = 0;
  while (sum < n) {
    if (nums[idx] <= sum + 1) {
      sum += nums[idx];
      idx += 1;
    } else {
      patches += 1;
      sum += sum + 1;
    }
  }
  return patches
};

let nums = [1,3];
console.log(minPatches(nums, 6));

nums = [1,5,10];
console.log(minPatches(nums, 20));

nums = [1,2,2];
console.log(minPatches(nums, 5));
