// Given a positive integer n,
// find the number of non-negative integers less than or equal to n,
// whose binary representations do NOT contain consecutive ones.

/**
 * @param {number} num
 * @return {number}
 */
const findIntegers = (num) => {
  let s = 0;
  for (let i = 5; i <= num; i += 1) {
    let b = true;
    console.log(i);
    for (let j = 3; j <= i; j <<= 1) {
      if (j === (i & j)) {
        console.log(i)
        b = false;
      }
    }
    s += b;
  }
  return s;
};

console.log(findIntegers(5));