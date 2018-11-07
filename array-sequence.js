// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly
// increasing sequence by removing no more than one element from the array.
// Guaranteed constraints:
// 2 ≤ sequence.length ≤ 105,
// -105 ≤ sequence[i] ≤ 105.

const arraySequence = (sequence) => {
  let prev = sequence[0];
  let skips = 0;
  for (let i = 1; i < sequence.length; i += 1) {
    if (sequence[i] <= prev) {
      skips += 1;
      if (sequence[i] > (sequence[i - 2] || sequence[i] - 1)) {
        prev = sequence[i];
      }
      if (skips > 1) { return false; }
    } else {
      prev = sequence[i];
    }
  }
  return true;
};

console.log(arraySequence([1, 3, 2, 1])); // false
console.log(arraySequence([1, 3, 2])); // true
console.log(arraySequence([1, 2, 1, 2])); // false
console.log(arraySequence([1, 4, 10, 4, 2])); // false
console.log(arraySequence([10, 1, 2, 3, 4, 5])); // true
console.log(arraySequence([1, 1, 1, 2, 3])); // false
console.log(arraySequence([0, -2, 5, 6])); // true
console.log(arraySequence([1, 2, 3, 4, 5, 3, 5, 6])); // false
console.log(arraySequence([40, 50, 60, 10, 20, 30])); // false
console.log(arraySequence([1, 1])); // true
console.log(arraySequence([1, 2, 5, 3, 5])); // true
console.log(arraySequence([1, 2, 5, 5, 5])); // false
console.log(arraySequence([10, 1, 2, 3, 4, 5, 6, 1])); // false
console.log(arraySequence([1, 2, 3, 4, 3, 6])); // true
console.log(arraySequence([1, 2, 3, 4, 99, 5, 6])); // true
console.log(arraySequence([123, -17, -5, 1, 2, 3, 12, 43, 45])); // true
console.log(arraySequence([3, 5, 67, 98, 3])); // true
