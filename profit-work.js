// We have jobs: difficulty[i] is the difficulty of the ith job,
// and profit[i] is the profit of the ith job.

// Now we have some workers. worker[i] is the ability of the ith worker,
// which means that this worker can only complete a job with difficulty at most worker[i].

// Every worker can be assigned at most one job, but one job can be completed multiple times.

// For example, if 3 people attempt the same job that pays $1, then the total profit will be $3.
// If a worker cannot complete any job, his profit is $0.

// What is the most profit we can make?

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
const maxProfitAssignment = (difficulty, profit, worker) => {
  const maxProfitPerDiff = [];
  let min = difficulty[0];
  let max = difficulty[0];
  for (let i = 0; i < difficulty.length; i += 1) {
    maxProfitPerDiff[difficulty[i]] = Math.max(maxProfitPerDiff[difficulty[i]] || 0, profit[i]);
    min = Math.min(min, difficulty[i]);
    max = Math.max(max, difficulty[i]);
  }
  for (let i = min; i < maxProfitPerDiff.length; i += 1) {
    maxProfitPerDiff[i] = Math.max(maxProfitPerDiff[i] || 0, maxProfitPerDiff[i - 1] || 0);
  }
  let maxProfit = 0;
  console.log(maxProfitPerDiff)
  for (let i = 0; i < worker.length; i += 1) {
    if (worker[i] >= min) {
      maxProfit += maxProfitPerDiff[worker[i]] || maxProfitPerDiff[maxProfitPerDiff.length - 1];
      console.log(maxProfitPerDiff[worker[i]])
    }
  }
  return maxProfit;
};

const difficulty = [66,1 ,28,73,53,35,45,60,100,44,59,94,27,88,7 ,18,83,18,72 ,63]
const profit =     [66,20,84,81,56,40,37,82,53 ,45,43,96,67,27,12,54,98,19,47 ,77]
const worker =     [61,33,68,38,63,45,1 ,10,53 ,23,66,70,14,51,94,18,28,78,100,16];
console.log(maxProfitAssignment(difficulty, profit, worker))