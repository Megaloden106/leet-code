// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1  VX 4 - 9
// V             5
// X             10 LC 40 - 90
// L             50
// C             100 DM 400 - 900
// D             500
// M             1000

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
  const convert = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = '';
  for (let key in convert) {
    let n = Math.floor(num / convert[key]);
    for (let i = 0; i < n; i++) roman += key;
    num %= convert[key];
    if (num === 0) break;
  }
  return roman;
};

console.log(intToRoman(1994)); // MCMXCIV