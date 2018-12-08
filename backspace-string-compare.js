// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = (S, T) => {
  let i = S.length, j = T.length;
  let skipsS = 0; skipsT = 0;
  while (i >= 0 && j >= 0) {
    if (S[i] === '#' || T[j] === '#') {
      if (S[i] === '#') skipsS++;
      else ;
    } else {
      if (S[i--] !== T[j--]) return false;
    }
  }
  return i === j;
};

let S = "ab#c", T = "ad#c";

console.log(backspaceCompare(S, T));

// S = "ab##", T = "a#c#";

// console.log(backspaceCompare(S, T));