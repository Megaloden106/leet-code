const numWays = (n, X = [1, 2]) => {
  if (n < 0) return 0;
  let s = 0;
  X.forEach(elem => {
    s += numWays(n - elem, X);
  });
  return s += n === 0;
}

const numWays2 = (n, X = [1, 2]) => {
  if (n === 0) return 1;
  const nums = [];
  nums[0] = 1;
  for (let i = 1; i <= n; i += 1) {
    let s = 0
    X.forEach(j => {
      if (i - j >= 0) {
        s += nums[i - j];
      };
      nums[i] = s;
    })
  }
  return nums[n];
}


console.log(numWays(0)) // 1
console.log(numWays(1)) // 1
console.log(numWays(2)) // 2
console.log(numWays(3)) // 3
console.log(numWays(4)) // 5
console.log(numWays(5)) // 8

console.time('1');
console.log(numWays(25)) // 8
console.timeEnd('1');
console.time('2');
console.log(numWays2(25)) // 8
console.timeEnd('2');