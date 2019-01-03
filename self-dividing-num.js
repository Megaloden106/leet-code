// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// Also, a self-dividing number is not allowed to contain the digit zero.
// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
  const result = [];
  for1: for (let i = left; i <= right; i++) {
    let num = i;
    while (num > 0) {
      let digit = num % 10;
      num = Math.floor(num / 10);
      if (i % digit !== 0) continue for1;
    }
    result.push(i)
  }
  return result;
};

console.log(selfDividingNumbers(1,29));