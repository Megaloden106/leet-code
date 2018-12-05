function solution(A) {
  A.sort((a,b) => a - b);
  console.log(A)
  let j = 1;
  let i = 0;
  while (A[i] <= j) {
    if (A[i] === j) j++;
    i++;
  }
  return j
}

const A = [1,3,6,4,1,2,-1,-2,-3]
console.log(solution(A))

const B = [1,2,3]
console.log(solution(B))

const C = [-3,-1]
console.log(solution(C))
