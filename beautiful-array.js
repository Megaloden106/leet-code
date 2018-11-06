// For some fixed N, an array A is beautiful if it is a permutation of the integers 1, 2, ..., N, such that:

// For every i < j, there is no k with i < k < j such that A[k] * 2 = A[i] + A[j].

// Given N, return any beautiful array A.  (It is guaranteed that one exists.)

/**
 * 932 (tuesday 11/5)
 * @param {number} N
 * @return {number[]}
 */
const beautifulArray = function(N) {
  const A = [];
  for (let i = 1; i <= N; i++) {
    A.push(i);
  }
  const beautify = (arr) => {
    if (arr.length === 1) { return arr; }
    const odd = [];
    const even = [];
    arr.forEach((elem, i) => {
      i % 2 === 0
        ? even.push(elem)
        : odd.push(elem);
    });
    return beautify(even).concat(beautify(odd));
  }
  return beautify(A);
};

console.log(beautifulArray(4))