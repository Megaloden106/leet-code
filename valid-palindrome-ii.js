// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s, skips = 0) => {
  let m = s.length / 2;
  for (let i = 0, j = s.length - 1; i < m; i += 1, j -= 1) {
    if (s[i] != s[j]) {
      skips += 1;
      if (skips > 1) { return false; }
      return validPalindrome(s.slice(0, i) + s.slice(i + 1), skips + 1)
        || validPalindrome(s.slice(0, j) + s.slice(j + 1), skips + 1);
    }
  }
  return true;
};

// console.log(validPalindrome('aba'));
// console.log(validPalindrome('abc'));
// console.log(validPalindrome('abba'));
// console.log(validPalindrome('abca'));
// console.log(validPalindrome('abbca'));