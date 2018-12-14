// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like
// (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

// You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
// After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let max = [0]
  for (let i = 1; i < prices.length; i++) {
    let cdPrice = max[i - 2] || 0;
    let profit = prices[i] - prices[i - 1];
    max[i] = profit > 0 ? max[i - 1] + profit : cdPrice;
  }
  console.log(max)
  return max[max.length - 1];
};

// console.log(maxProfit([1,2,3,0,2])) // 3
// console.log(maxProfit([1,2,4])) // 3
// console.log(maxProfit([1,2])) // 1
console.log(maxProfit([1,4,3])) // 3