// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  let result = '';
  let start = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      for (let j = i - 1; j > start; j--) {
        result += s[j];
      }
      start = i;
      result += ' ';
    }
  }
  for (let i = s.length -1; i > start; i--) {
    result += s[i];
  }
  return result;
};