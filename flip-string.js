// A string of '0's and '1's is monotone increasing if it consists of some number of '0's (possibly 0),
// followed by some number of '1's (also possibly 0.)

// We are given a string S of '0's and '1's, and we may flip any '0' to a '1' or a '1' to a '0'.

// Return the minimum number of flips to make S monotone increasing.

/**
 * @param {string} S
 * @return {number}
 */
const minFlipsMonoIncr = (S) => {
  const numOfOnes = [0];
  for (let i = 0; i < S.length; i += 1) {
    numOfOnes[i + 1] = numOfOnes[i] + (S[i] === '1' ? 1 : 0);
  }
  let ans = Math.min();
  for (let i = 0; i <= S.length; i += 1) {
    let remainingOnes = numOfOnes[S.length] - numOfOnes[i];
    let currentOnes = numOfOnes[i];
    let remainingLength = S.length - i;
    ans = Math.min(ans, currentOnes + remainingLength - remainingOnes)
    console.log(numOfOnes[i], ans)
  }
  return ans;
};

// console.log(minFlipsMonoIncr("00110"));
// console.log(minFlipsMonoIncr("010110"));
console.log(minFlipsMonoIncr("00011000"));
// console.log(minFlipsMonoIncr("0101100011"));