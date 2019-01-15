/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


const characterFrequency = (string) => {
  const freq = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    freq[char] = (freq[char] || 0) + 1;
  }
  const result = [];
  for (let k in freq) result.push([k, freq[k]]);
  return result.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
}

console.log(characterFrequency('miaaiaaippi'))