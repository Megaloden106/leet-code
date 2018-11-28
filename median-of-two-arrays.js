// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const h = Math.floor((nums1.length + nums2.length) / 2);
  const e = (nums1.length + nums2.length) % 2;
  let i = 0, j = 0, k = 0, p = 0, c = 0;
  while (i <= h) {
    p = c;
    if (nums2[k] === undefined || nums1[j] < nums2[k]) {
      c = nums1[j++];
    } else {
      c = nums2[k++];
    }
    i++;
  }
  return !e ? (p + c) / 2 : c;
}

const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
const b = [0,6];
console.log(findMedianSortedArrays(a, b))