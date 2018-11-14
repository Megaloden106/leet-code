/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  if (n === 0) { return [0]; }
  const code = grayCode(n - 1);
  if (n === 1) {
    code.push(1);
  } else {
    const l = code.length - 1;
    const mask = 1 << (n - 1);
    for (let i = l; i >= 0; i -= 1) {
      code.push(code[i] | mask)
    }
  }
  return code;
};

console.log(grayCode(3));