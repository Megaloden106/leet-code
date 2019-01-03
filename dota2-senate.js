/**
 * @param {string} senate
 * @return {string}
 */
const predictPartyVictory = (senate) => {
  const rQueue = [];
  const dQueue = [];
  const n = senate.length;
  for (let i = 0; i < n; i++) {
    senate[i] === 'R' ? rQueue.push(i) : dQueue.push(i);
  }
  while (rQueue.length > 0 && dQueue.length > 0) {
    const rIndex = rQueue.shift();
    const dIndex = dQueue.shift();
    rIndex < dIndex ? rQueue.push(rIndex + n) : dQueue.push(dIndex + n);
  }
  return rQueue.length > dQueue.length ? 'Radiant' : 'Dire';
};

console.log(predictPartyVictory("RD"))
console.log(predictPartyVictory("DDDDRRDDDRDRDRRDDRDDDRDRRRRDRRRRRDRDDRDDRRDDRRRDDRRRDDDDRRRRRRRDDRRRDDRDDDRRRDRDDRDDDRRDRRDRRRDRDRDR"))