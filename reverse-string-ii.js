// Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string.
// If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters,
// then reverse the first k characters and left the other as original.

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
  let result = '';
  for (let i = 0; i < s.length / k; i++) {
    if (i % 2 === 0) {
      for (let j = k - 1; j >= 0; j--) {
        if (s[k * i + j]) result += s[k * i + j];
      }
    } else {
      for (let j = 0; j < k; j++) {
        if (s[k * i + j]) result += s[k * i + j];
      }
    }
  }
  return result;
};

console.log(reverseStr('abcdefg', 2)) // bacdfeg