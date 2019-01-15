// On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
// Once you pay the cost, you can either climb one or two steps.
// You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = (cost) => {
  if (cost.length === 0) return 0;
  if (cost.length === 1) return cost[0];
  let prev1 = cost[1];
  let prev2 = cost[0];
  if (cost.length === 2) return Math.min(prev1, prev2);
  for (let i = 2; i < cost.length; i++) {
    let sum = cost[i] + Math.min(prev1, prev2);
    prev2 = prev1;
    prev1 = sum;
  }
  return Math.min(prev1, prev2);
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));