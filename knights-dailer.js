// This time, we place our chess knight on any numbered key of a phone pad (indicated above),
// and the knight makes N-1 hops.
// Each hop must be from one key to another numbered key.

// Each time it lands on a key (including the initial placement of the knight),
// it presses the number of that key, pressing N digits total.

// How many distinct numbers can you dial in this manner?

// Since the answer may be large, output the answer modulo 10^9 + 7.

const m = {
  0: [4, 6],
  1: [6, 8],
  2: [7, 9],
  3: [4, 8],
  4: [3, 9, 0],
  5: [],
  6: [1, 7, 0],
  7: [2, 6],
  8: [1, 3],
  9: [2, 4],
}

const c = {
  0: [1],
  1: [1],
  2: [1],
  3: [1],
  4: [1],
  5: [1],
  6: [1],
  7: [1],
  8: [1],
  9: [1],
}

/**
 * @param {number} N
 * @return {number}
 */
const knightDialer = (N) => {
  let s = 0;
  const numWays = (k, n) => {
    if (n === 0) return 1;
    if (n === 1) return m[k].length;
    t = 0;
    m[k].forEach(j => {
      t += numWays(j, n - 1);
    });
    return t;
  }
  for (let k in m) {
    s += numWays(k, N - 1);
  }
  return s;
};

// console.log(knightDialer(1)) // 10
// console.log(knightDialer(1)) // 10
// console.log(knightDialer(2)) // 20
// console.log(knightDialer(3)) // 46
// console.log(knightDialer(4)) // 104
console.log(knightDialer(5)) // 240