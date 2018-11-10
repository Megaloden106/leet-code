// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  if (haystack === needle) { return 0; }
  for (let i = 0; i < haystack.length - needle.length + 1; i += 1) {
    if (haystack.slice(i, i + needle.length) === needle) { return i; }
  }
  return -1;
};

// let haystack = "hello"
// let needle = "ll"

// console.log(strStr(haystack, needle));

// haystack = "aaaaa"
// needle = "bba"

// console.log(strStr(haystack, needle));

// haystack = ""
// needle = ""

// console.log(strStr(haystack, needle));

// haystack = "mississippi"
// needle = "issip"

// console.log(strStr(haystack, needle));

haystack = "mississippi"
needle = "pi"

console.log(strStr(haystack, needle));
