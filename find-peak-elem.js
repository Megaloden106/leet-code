// A peak element is an element that is greater than its neighbors.

// Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

// You may imagine that nums[-1] = nums[n] = -∞.

/**
 * @param {number[]} nums
 * @return {number}
 * constraint: logrithmic
 */
const findPeakElement = (nums) => {
  const findPeak = (s, e) => {
    if (e - s < 2) return nums[s] > nums[e] ? s : e;
    let m = s + Math.floor((e - s) / 2);
    if (nums[m - 1] < nums[m] && nums[m] > nums[m + 1]) {
      return m;
    } else {
      return nums[m - 1] > nums[m] ? findPeak(s, m - 1) : findPeak(m + 1, e);
    }
  }
  return findPeak(0, nums.length - 1);
};

const nums = [1,2,3,4];
console.log(findPeakElement(nums));