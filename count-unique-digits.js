// Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10^n.

/**
 * @param {number} n
 * @return {number}
 */
const countNumbersWithUniqueDigits = (n) => {
  let sum = 0;
  sum += n >= 0 && 1;
  sum += n >= 1 && 9;
  let perm = 9;
  for (let i = 1; i < n; i++) {
    perm *= 10 - i;
    sum += perm;
  }
  return sum;
};

console.log(countNumbersWithUniqueDigits(2)) // 0 - 100