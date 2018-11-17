const numWays = (n) => {
  if (n < 0) { return 0; }
  let s = 0;
  s += numWays(n - 1);
  s += numWays(n - 2);
  return s += n === 0;
}

console.log(numWays(1)) // 1
console.log(numWays(2)) // 2
console.log(numWays(3)) // 3
console.log(numWays(4)) // 5
console.log(numWays(5)) // 8