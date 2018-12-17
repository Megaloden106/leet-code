// A string of '0's and '1's is monotone increasing if it consists of some number of '0's (possibly 0),
// followed by some number of '1's (also possibly 0.)

// We are given a string S of '0's and '1's, and we may flip any '0' to a '1' or a '1' to a '0'.

// Return the minimum number of flips to make S monotone increasing.

/**
 * @param {string} S
 * @return {number}
 */
const minFlipsMonoIncr = (S) => {
  const numOfOnes = [];
  for (let i = 0; i < S.length; i++) {
    let prev = numOfOnes[i - 1] ? numOfOnes[i - 1] : 0;
    numOfOnes[i] = S[i] === '1' ? prev + 1 : prev;
  }
  const shift = [];
  for (let i = 0; i < numOfOnes.length; i++) {
    shift[i] = numOfOnes[i] - numOfOnes[numOfOnes.length - 1] + numOfOnes[i];
  }
  console.log(shift)
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (
      shift[i] < 0 && S[i] === '1'
      || shift[i] > 0 && S[i] === '0'
    ) count++;
  }
  return count;
};

// console.log(minFlipsMonoIncr("00110"));
// console.log(minFlipsMonoIncr("010110"));
console.log(minFlipsMonoIncr("00011000"));
// console.log(minFlipsMonoIncr("0101100011"));