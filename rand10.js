/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
const rand10 = () => {
  let val = 40;
  while (val >= 40) val = 7 * (rand7() - 1) + (rand7() - 1);
  return 1 + val % 10
};