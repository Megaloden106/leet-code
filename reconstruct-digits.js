// Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.

// Note:
// Input contains only lowercase English letters.
// Input is guaranteed to be valid and can be transformed to its original digits. That means invalid inputs such as "abc" or "zerone" are not permitted.
// Input length is less than 50,000.

/**
 * @param {string} s
 * @return {string}
 */
const originalDigits = function(s) {
  const count = {
    z: 0, // z
    o: 0, // o - z - w - u
    w: 0, // w
    h: 0, // h - g
    u: 0, // u
    f: 0, // f - u
    x: 0, // x
    s: 0, // s - x
    g: 0, // g
    i: 0, // i - g - x - f
  };
  for (let i = 0; i < s .length; i += 1) {
    const char = s[i];
    if (count[char] >= 0) { count[char] += 1; }
  }
  count.o -= count.z + count.w + count.u;
  count.h -= count.g;
  count.f -= count.u;
  count.s -= count.x;
  count.i -= count.g + count.x + count.f;
  let result = '';
  let j = 0;
  for (let key in count) {
    for (let i = 0; i < count[key]; i += 1) {
      result += j;
    }
    j += 1;
  }
  return result;
};

// console.log(originalDigits('owoztneoer'));
// console.log(originalDigits('fviefuro'));
// console.log(originalDigits('twotwotwo'));
console.log(originalDigits('zeroonetwothreefourfivesixseveneightnine'));
