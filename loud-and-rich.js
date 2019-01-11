// In a group of N people (labelled 0, 1, 2, ..., N-1), each person has different amounts of money, and different levels of quietness.
// For convenience, we'll call the person with label x, simply "person x".
// We'll say that richer[i] = [x, y] if person x definitely has more money than person y.  Note that richer may only be a subset of valid observations.
// Also, we'll say quiet[x] = q if person x has quietness q.
// Now, return answer, where answer[x] = y if y is the least quiet person (that is, the person y with the smallest value of quiet[y]),
// among all people who definitely have equal to or more money than person x.

/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
const loudAndRich = (richer, quiet) => {
  const graph = {};
  const answer = [];
  richer.forEach(tuple => {
    graph[tuple[1]] = (graph[tuple[1]] || []);
    graph[tuple[1]].push(tuple[0]);
  });
  for (let i = 0; i < quiet.length; i++) {
    if (!graph[i]) answer[i] = i;
    else if (!answer[i]) {
      let min = [i, quiet[i]];
      const q = [i];
      const visited = {};
      while (q.length) {
        let node = q.shift();
        if (answer[node]) node = answer[node];
        if (!visited[node] && !answer[node]) graph[node] && graph[node].forEach(e => q.push(e));
        if (quiet[node] < min[1]) min = [node, quiet[node]];
        visited[node] = true;
      }
      answer[i] = answer[min[0]] = min[0];
    }
  }
  return answer;
};

const p1 = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]];
const p2 = [3,2,5,4,6,1,7,0];

console.time('1')
console.log(loudAndRich(p1, p2));
console.timeEnd('1')
