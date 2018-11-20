// A string of '0's and '1's is monotone increasing if it consists of some number of '0's (possibly 0),
// followed by some number of '1's (also possibly 0.)

// We are given a string S of '0's and '1's, and we may flip any '0' to a '1' or a '1' to a '0'.

// Return the minimum number of flips to make S monotone increasing.

/**
 * @param {string} S
 * @return {number}
 */
const minFlipsMonoIncr = (S) => {
  const flips = [];
  let char = '0';
  for (let i = 0; i < S.length; i += 1) {
    if (S[i] !== char) {
      flips.push(i)
      char = S[i];
    }
  }
  flips.push(S.length);
  let ones = 0;
  let zeroes = 0;
  let s = 0;
  for (let i = 0; i < flips.length - 1; i += 1){
    if (i % 2 === 0) {
      ones += flips[i + 1] - flips[i];
    } else {
      zeroes += flips[i + 1] - flips[i];
    }
    if (i === flips.length - 3) {
      if (ones < zeroes) break;
    }
  }
  return Math.min(ones, zeroes);
};

console.log(minFlipsMonoIncr("00110"));
console.log(minFlipsMonoIncr("010110"));
console.log(minFlipsMonoIncr("00011000"));
console.log(minFlipsMonoIncr("0101100011"));