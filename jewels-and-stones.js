// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.
// Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive,
// so "a" is considered a different type of stone from "A".

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => {
  const jewels = {};
  let count = 0;
  for (let i = 0; i < J.length; i++) {
    jewels[J[i]] = true;
  }
  for (let i = 0; i < S.length; i++) {
    count += !!jewels[S[i]];
  }
  return count;
};