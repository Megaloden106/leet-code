// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  let result = '';
  const loc = {};
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    loc[t[i]] = -1;
  }
  let min = Infinity;
  let max = -Infinity;
  for (let j = 0; j < s.length; j++) {
    if (loc[s[j]] !== undefined) {
      count += loc[s[j]] === -1;
      loc[s[j]] = j;
      if (count === t.length) {
        max = j;
        min = Infinity;
        for (let k in loc) min = Math.min(min, loc[k]);
        console.log(min, max)
        if (result === '' || max - min <= result.length) result = s.slice(min, max + 1)
      }
    }
  }
  return result;
};

console.log(minWindow('ADOBECODEBANC', 'ABC'))