// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return '';
  let result = '';
  let isSame = true;
  let i = 0;
  while (isSame) {
    let char;
    for (let j = 0; j < strs.length; j++) {
      char = strs[0][i];
      if (strs[j][i] !== char || char === undefined) isSame = false;
    }
    if (isSame) result += char;
    i++;
  }
  return result;
};

// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix([""]))
// console.log(longestCommonPrefix(["",""]))
console.log(longestCommonPrefix([]))