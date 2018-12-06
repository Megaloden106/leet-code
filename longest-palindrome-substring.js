// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

/**
 * @param {string} s
 * @return {boolean}
 */
const isP = (s) => {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l++] !== s[r--]) return false;
  }
  return true;
};

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= i; j--) {
      if (s[i] === s[j] && j - i + 1 > result.length) {
        let test = s.slice(i, j + 1);
        if (isP(test) && test.length > result.length) result = test;
      }
    }
  }
  return result;
};


console.log(longestPalindrome("babad"));
console.log(longestPalindrome("ac"));