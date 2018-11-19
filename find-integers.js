// Given a positive integer n,
// find the number of non-negative integers less than or equal to n,
// whose binary representations do NOT contain consecutive ones.

/**
 * @param {number} num
 * @return {number}
 */
const findIntegers = (num) => {
  const search = (n) => {
    if (n > num) return 0;
    let s = 0
    if (n === 0) {
      s += search(1);
    } else {
      s += search(n << 1)
      if (!(n & 1)) s += search((n << 1) | 1);
    }
    return s += n <= num;
  }
  return search(0);
};

console.log(findIntegers(5));