// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === 0) {
      nums.splice(i, 1);
      count++;
    }
  }
  for (let i = 0; i < count; i++) {
    nums.push(0);
  }
};


const nums = [0,1,0];
moveZeroes(nums);
console.log(nums);