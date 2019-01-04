// Remember the story of Little Match Girl?
// By now, you know exactly what matchsticks the little match girl has,
// please find out a way you can make one square by using up all those matchsticks.
// You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

// Your input will be several matchsticks the girl has, represented with their stick length.
// Your output will either be true or false, to represent whether you could make one square using all the matchsticks the little match girl has.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const makesquare = (nums) => {
  if (nums.length < 4) return false;
  let sum = 0;
  let max = -Infinity;
  nums.forEach(num => {
    max = Math.max(max, num);
    sum += num;
  });
  const edge = sum / 4;
  if (edge % 1 !== 0 || max > edge) return false;
};

// console.log(makesquare([1,1,2,2,2]))
// console.log(makesquare([3,3,3,3,4]))
console.log(makesquare([5,5,5,5,4,4,4,4,3,3,3,3]))