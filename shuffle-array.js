// Shuffle a set of numbers without duplicates.

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.deck = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.deck;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let deck = this.deck.slice();
  const size = deck.length
  for (let i = 0; i < size - 1; i++) {
    let r = i + Math.floor(Math.random() * (size - i))
    let temp = deck[i];
    deck[i] = deck[r];
    deck[r] = temp;
  }
  return deck;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

const deck = new Solution([1,2,3]);
console.log(deck.shuffle())
console.log(deck.shuffle())
console.log(deck.shuffle())
console.log(deck.shuffle())
console.log(deck.shuffle())
console.log(deck.shuffle())