// In a string S of lowercase letters, these letters form consecutive groups of the same character.

// For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".

// Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.

// The final answer should be in lexicographic order.

/**
 * @param {string} S
 * @return {number[][]}
 */
const largeGroupPositions = function(S) {
  const array = [];
  let start = 0;
  let prev = S[0];
  for (let i = 1; i <= S.length; i += 1) {
      if (prev !== S[i]) {
          if (i > start + 2) { array.push([start, i - 1]); }
          prev = S[i];
          start = i;
      }
  }
  return array;
};