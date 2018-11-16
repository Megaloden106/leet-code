// We are given two strings, A and B.

// A shift on A consists of taking string A and moving the leftmost character to the rightmost position.
// For example, if A = 'abcde', then it will be 'bcdea' after one shift on A.
// Return True if and only if A can become B after some number of shifts on A.

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const rotateString = (A, B) => {
  if (A.length !== B.length) return false;
  if (A === B) return true;
  for (let i = 0; i < A.length; i += 1) {
    if (A.slice(i) + A.slice(0, i) === B) return true;
  }
  return false;
};

let A = 'abcde'
let B = 'cdeab';
console.log(rotateString(A, B));

A = 'abcde';
B = 'abced';
console.log(rotateString(A, B));
