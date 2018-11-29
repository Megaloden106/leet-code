// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  if (s.length < 2) return s;
  let p = {};
  const isP = (s) => {
    console.log(s)
    if (p[s] !== undefined) return p[s];
    let l = 0, r = s.length - 1;
    while (l < r) {
      if (s[l++] !== s[r--]) return p[s] = false;
    }
    return p[s] = true;
  }
  let res = s[0];
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j > i; j--) {
      if (s[i] === s[j]) {
        let str = s.slice(i, j + 1);
        if (isP(str) && str.length > res.length) res = str;
      }
    }
  }
  return res;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("ac"));