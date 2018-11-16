// Given an array nums, we call (i, j) an important reverse pair if i < j and nums[i] > 2*nums[j].

// You need to return the number of important reverse pairs in the given array.

/**
 * @param {number[]} nums
 * @return {number}
 */
const reversePairs = (nums) => {
  let s = 0;
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] > 2 * nums[j]) { s += 1; }
    }
  }
  return s;
};

console.log(reversePairs([1,3,2,3,1]));

console.log(reversePairs([2,4,3,5,1]));