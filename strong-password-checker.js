// A password is considered strong if below conditions are all met:
// It has at least 6 characters and at most 20 characters.
// It must contain at least one lowercase letter, at least one uppercase letter, and at least one digit.
// It must NOT contain three repeating characters in a row ("...aaa..." is weak, but "...aa...a..." is strong, assuming other conditions are met).
// Write a function strongPasswordChecker(s), that takes a string s as input,
// and return the MINIMUM change required to make s a strong password. If s is already strong, return 0.
// Insertion, deletion or replace of any one character are all considered as one change.

/**
 * @param {string} s
 * @return {number}
 */
const strongPasswordChecker = (s) => {
  const rule1a = s.length < 6 ? 6 - s.length : 0;
  const rule1b = s.length > 20 ? s.length - 20 : 0;
  let rule2 = !s.match(/[A-Z]/);
  rule2 += !s.match(/[a-z]/);
  rule2 += !s.match(/[0-9]/);
  let rule3 = 0
  for (let i = 2; i < s.length - rule1b; i++) {
    if (s[i - 2] === s[i] && s[i - 1] === s[i]) {
      rule3 += 1;
      i += 2;
    }
  }
  console.log(rule1a, rule2, rule3)
  console.log(rule1b, rule2, rule3)
  return rule1b > 0 ? rule1b + Math.max(rule2, rule3) : Math.max(rule1a, rule2, rule3);
};

console.log(strongPasswordChecker("aaaaaaaaaaaaaaaaaaaaa")) // 7
console.log(strongPasswordChecker("1010101010aaaB10101010")) // 2