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
  let count = [];
  let patches = 0;
  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    nums[i] = null;
    count[num - 1] = num;
    nums.forEach(add => count[num + add - 1] = num + add);
    nums[i] = num;
  };
  count.forEach((bool, i) => {
    if (!bool) {
      patches += 1;
      console.log(i)
      count[i] = i + 1;
      nums.forEach(num => {
        console.log(num);
        count[num + i] = num + i + 1;
      })
      // nums.push(i + 1);
    }
  })
  console.log(count)
  return patches;
};

let nums = [1,3];
console.log(minPatches(nums, 6));

// nums = [1,5,10];
// console.log(minPatches(nums, 20));

// nums = [1,2,2];
// console.log(minPatches(nums, 5));
