// There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1).
// You begin the journey with an empty tank at one of the gas stations.

// Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.

// Note:

// If there exists a solution, it is guaranteed to be unique.
// Both input arrays are non-empty and have the same length.
// Each element in the input arrays is a non-negative integer.

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
  for (let i = 0; i < gas.length; i++) {
    let fuel = gas[i];
    for (let j = 0; j < cost.length; j++) {
      if (fuel < cost[(i + j) % cost.length]) break;
      else fuel += gas[(i + j + 1) % cost.length] - cost[(i + j) % cost.length];
      if (j === cost.length - 1) return i;
    }
  }
  return -1;
};

let gas  = [1,2,3,4,5]
let cost = [3,4,5,1,2]

console.log(canCompleteCircuit(gas, cost))

gas  = [2,3,4]
cost = [3,4,3]

console.log(canCompleteCircuit(gas, cost))
