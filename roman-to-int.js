// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const convert = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = convert[s[i]];
    let next = convert[s[i + 1]];
    result += !next || curr >= next ? curr :  -curr;
  }
  return result;
};

console.log(romanToInt("MCMXCIV")); //1994