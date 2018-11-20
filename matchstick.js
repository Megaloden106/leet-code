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
  let size = 0;
  let max = 0;
  let storage = {};
  nums.forEach(num => {
    max = Math.max(max, num);
    size += num;
    storage[num] = (storage[num] || 0) + 1;
  });
  const edge = size /4;
  if (edge % 1 !== 0) return false;
  if (max > edge) return false;
  for (let k in storage) {
    let matchK = edge - Number(k);
    if (matchK !== 0 && !storage[matchK]) return false
  }
  return true;
};

console.log(makesquare([1,1,2,2,2]))
console.log(makesquare([3,3,3,3,4]))
console.log(makesquare([5,5,5,5,4,4,4,4,3,3,3,3]))