// Given a string, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let longest = 0;
  let loc = {};
  let length = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (loc[s[i]]) length = Math.max(loc[s[i]], length);
    longest = Math.max(longest, i - length + 1)
    loc[s[i]] = i + 1;
  }
  return longest;
};

// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("bbbbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("tmmzuxt"))
