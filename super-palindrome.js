// Let's say a positive integer is a superpalindrome if it is a palindrome, and it is also the square of a palindrome.

// Now, given two positive integers L and R (represented as strings), return the number of superpalindromes in the inclusive range [L, R].


/**
 * @param {string} string
 * @return {boolean}
 */
const isPalindrome = (string) => {
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) return false;
    left += 1;
    right -= 1;
  }
  return true;
}

/**
 * @param {string} string
 * @return {string}
 */
const reverse = (string) => {
  let result = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    result += string[i];
  }
  return result;
}

/**
 * @param {string} string
 * @return {string}
 */
const nextPalindrome = (string) => {
  let m1 = Math.floor(string.length / 2);
  let m2 = Math.ceil(string.length / 2);
  let left = string.slice(0, m1);
  let mid = string.slice(m1, m2);
  let right = string.slice(m2);
  if (+reverse(right) >= +left) {
    let half = +(left + mid) + 1 + '';
    return +(half + reverse(half.slice(0, m1))) + '';
  }
  else return +(left + mid+ reverse(left)) + '';
}

/**
 * @param {string} L
 * @param {string} R
 * @return {number}
 */
const superpalindromesInRange = (L, R) => {
  let s = 0;
  let root = Math.ceil(Math.sqrt(+L));
  while (root * root <= +R) {
    if (isPalindrome('' + (root * root))) s += 1;
    root = nextPalindrome('' + root);
  }
  return s;
};

let L = '10000';
let R = '10000000';
console.log(superpalindromesInRange(L, R)); // 8
