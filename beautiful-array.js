// For some fixed N, an array A is beautiful if it is a permutation of the integers 1, 2, ..., N, such that:

// For every i < j, there is no k with i < k < j such that A[k] * 2 = A[i] + A[j].

// Given N, return any beautiful array A.  (It is guaranteed that one exists.)

/**
 * 932 (tuesday 11/5)
 * @param {number} N
 * @return {number[]}
 */
const beautifulArray = function(N) {
  let A;
  const findBeautifulArray = (arr = []) => {
      if (arr.length >= 3) {
          for (let i = 0; i < arr.length - 2; i += 1) {
              for (let k = 1; k < arr.length - 1; k += 1) {
                  for (let j = 2; j < arr.length; j += 1) {
                      if (arr[k] * 2 === arr[i] + arr[j]) {
                          return;
                      }
                  }
              }
          }
      }
      if (arr.length === N && A === undefined) {
          return A = arr;
      }
      const track = {};
      for (let i = 0; i < arr.length; i += 1) {
          track[arr[i]] = arr[i];
      }
      for (let i = 1; i <= N; i += 1) {
          let temp = arr.slice();
          if (!track[i]) {
              temp.push(i);
              findBeautifulArray(temp);
          }
      }
  }
  findBeautifulArray();
  return A;
};