// Given a string which contains only lowercase letters,
// remove duplicate letters so that every letter appear once and only once.
// You must make sure your result is the smallest in lexicographical order among all possible results.

/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = (s) => {
  const count = {};
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
  }
  const stack = [];
  const contains = {};
  for (let i = 0; i < s.length; i++) {
    let j = stack.length - 1;
    if (!contains[s[i]]) {
      while (s[i].localeCompare(stack[j]) < 0 && count[stack[j--]] > 0) {
        contains[stack.pop()] = false;
      }
      stack.push(s[i]);
      contains[s[i]] = true;
    }
    count[s[i]]--;
  }
  return stack.join('')
};

console.log(removeDuplicateLetters('abacb'))