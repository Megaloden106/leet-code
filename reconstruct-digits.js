// Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.

// Note:
// Input contains only lowercase English letters.
// Input is guaranteed to be valid and can be transformed to its original digits. That means invalid inputs such as "abc" or "zerone" are not permitted.
// Input length is less than 50,000.

const wordToDigit = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
}

/**
 * @param {string} s
 * @return {string}
 */
const originalDigits = function(s) {
  let result = '';
  let storage = {};
  let length = s.length;
  for (let i = 0; i < s.length; i += 1) {
    storage[s[i]] = (storage[s[i]] || 0) + 1;
  }
  while(length > 0) {
    for (let key in wordToDigit) {
      let contains = true;
      for (let i = 0; i < key.length; i += 1) {
        if (!storage[key[i]]) {
          contains = false;
        }
      }
      if (contains) {
        result += wordToDigit[key];
        for (let i = 0; i < key.length; i+= 1) {
          storage[key[i]] -= 1;
        }
        length -= key.length;
      }
    }
  }
  return result;
};

console.log(originalDigits('owoztneoer'));
console.log(originalDigits('fviefuro'));
console.log(originalDigits('twotwotwo'));
console.log(originalDigits('zeroonetwothreefourfivesixseveneightnine'));
