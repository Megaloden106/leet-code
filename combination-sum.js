/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  candidates.sort((a, b) => a - b);
  const result = [];
  const recurse = (combo = [], sum = 0, start = 0) => {
    if (sum === target) result.push(combo);
    for (let i = start; i < candidates.length; i++) {
      let curr = sum + candidates[i];
      if (curr > target) return;
      const newCombo = combo.concat([candidates[i]])
      recurse(newCombo, curr, i)
    }
  }
  recurse();
  return result;
}



console.log(combinationSum([2,3,6,7], 7));