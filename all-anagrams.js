/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

const allAnagrams = function(string) {
  const chars = string.split('');
  const anagrams = new Set();
  const DFS = (curr = '') => {
    if (curr.length === chars.length) return anagrams.add(curr);
    for (let i = 0; i < chars.length; i++) {
      if (chars[i]) {
        let char = chars[i];
        chars[i] = null;
        DFS(curr + char);
        chars[i] = char;
      }
    }
  }
  DFS();
  const result = [];
  anagrams.forEach(anagram => result.push(anagram));
  return result;
};

var anagrams = allAnagrams('apps');
console.log(anagrams); //
console.log(anagrams.length);