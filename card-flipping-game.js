// On a table are N cards, with a positive integer printed on the front and back of each card (possibly different).
// We flip any number of cards, and after we choose one card.
// If the number X on the back of the chosen card is not on the front of any card, then this number X is good.
// What is the smallest number that is good?  If no number is good, output 0.
// Here, fronts[i] and backs[i] represent the number on the front and back of card i.
// A flip swaps the front and back numbers, so the value on the front is now on the back and vice versa.

/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
const flipgame = (fronts, backs) => {
  const invalidVals = {};
  for (let i = 0; i < fronts.length; i++) {
    if (fronts[i] === backs[i]) {
      invalidVals[fronts[i]] = true;
    }
  }
  let min = Infinity;
  for (let i = 0; i < fronts.length; i++) {
    if (!invalidVals[fronts[i]]) min = Math.min(fronts[i], min);
    if (!invalidVals[backs[i]]) min = Math.min(backs[i], min);
  }
  return min === Infinity ? 0 : min;
};
