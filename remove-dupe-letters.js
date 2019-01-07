// Given a string which contains only lowercase letters,
// remove duplicate letters so that every letter appear once and only once.
// You must make sure your result is the smallest in lexicographical order among all possible results.

/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = (s) => {
  const storage = {};
  for (let i = 0; i < s.length; i++) {
    if (storage[s[i]] === undefined) storage[s[i]] = i;
    else {
      for (let j = storage[s[i]] + 1; j < i; j++) {
        if (storage[s[j]] === j) {
          if (s[j].charCodeAt() < s[i].charCodeAt()) storage[s[i]] = i;
          break;
        }
      }
    }
  }
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (i === storage[s[i]]) result += s[i];
  }
  return result;
};

console.log(removeDuplicateLetters('cbacdcbc'))