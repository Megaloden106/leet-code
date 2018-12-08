/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const comboSum = (nums, target) => {
  const result = [];
  const DFS = (start = 0, sum = 0, set = []) => {
    if (sum === target) result.push(set)
    if (sum > target) return false;
    for (let i = start; i < nums.length; i++) {
      let num = nums[i];
      DFS(i + 1, sum + num, set.concat([num]));
    }
  }
  DFS();
  return result;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const comboSumDP = (nums, target) => {
  const storage = {};
  const recurse = (index = 0, sum = 0) => {
    console.log(sum)
    if (storage[sum]) return storage[sum];
    if (sum === target) return [nums[index - 1]];
    if (sum > target) return null;
    if (index > nums.length - 1) return null;
    let result = [];
    for (let i = index; i < nums.length; i++) {
      let temp = recurse(i + 1, sum + nums[i]);
      storage[sum] = temp || storage[sum];
      if (temp) console.log(temp, sum);
      if (temp) result = result.concat(temp);
    }
    if (sum === 6) console.log(result.concat(nums[index - 1]));
    return result.length > 0 ? result.concat(nums[index - 1]) : null;
  }
  recurse();
  console.log(storage)
  return storage[0];
}


// console.log(comboSum([1,2,3,6,10], 16)) // [[1,2,3,10], [6,10]]
console.log(comboSumDP([2,4,6,10], 16)) // [[1,2,3,10], [6,10]]