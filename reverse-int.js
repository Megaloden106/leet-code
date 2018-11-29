// Given a 32-bit signed integer, reverse digits of an integer.

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let res = '';
  const s = x >= 0 ? x.toString() : x.toString().slice(1);
  for (let i = s.length - 1; i >= 0; i--) {
    res += s[i];
  }
  return x >= 0 ? +res : -res;
};

console.log(reverse(123))
console.log(reverse(-123))