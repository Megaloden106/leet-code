// Determine whether a circular array of relative indices is a single complete cycle.

const hasCycle = (arr) => {
  const visited = {};
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (visited[idx]) return false;
    visited[idx] = true;
    idx = (idx + arr[idx]) % arr.length;
  }
  return idx === 0;
}

console.log(hasCycle([2,-4,-1]))