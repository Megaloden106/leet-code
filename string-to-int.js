// Implement atoi which converts a string to an integer.

// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found.
// Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible,
// and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral number,
// which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number,
// or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned.

/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str) => {
  let start, end;
  let plim = 2 ** 31 - 1;
  let nlim = -1 * 2 ** 31;
  for (let i = 0; i < str.length; i++) {
    if (end) break;
    if (!str[i].match(/[0-9]/) && start !== undefined) end = i;
    if (str[i] !== ' ' && start === undefined) {
      if (str[i].match(/[0-9]|\-|\+/)) start = i;
      else return 0;
    }
  }
  let num = str.slice(start, end);
  if (isNaN(num)) return 0;
  if (num > plim) return plim;
  if (num < nlim) return nlim;
  return num;
};

console.log(myAtoi('   -42'))
console.log(myAtoi('42'))
console.log(myAtoi('4193 with words'))
console.log(myAtoi('-'))
console.log(myAtoi('+'))
console.log(myAtoi('+-2'))
