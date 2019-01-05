/**
 * @param {number} p1
 * @param {number} p2
 * @return {number}
 */
const dist = (p1, p2) => {
  const a = p1[0] - p2[0];
  const b = p1[1] - p2[1];
  return a * a + b * b;
}

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
const validSquare = (p1, p2, p3, p4) => {
  const d12 = dist(p1, p2);
  const d13 = dist(p1, p3);
  const d14 = dist(p1, p4);
  const d23 = dist(p2, p3);
  const d24 = dist(p2, p4);
  const d34 = dist(p3, p4);
  const d = [d12, d13, d14, d23, d24, d34];
  const diag = Math.max(d12, d13, d14);
  const edge = Math.min(d12, d13, d14);
  if (diag !== 2 * edge) return false;
  let l1 = 0;
  let l2 = 0;
  for (let i = 0; i < 6; i++) {
    if (d[i] === diag) l1++;
    if (d[i] === edge) l2++;
  }
  return l1 === 2 && l2 === 4;
};


const p1 = [0,0]
const p2 = [1,1]
const p3 = [1,0]
const p4 = [0,1]
console.log(validSquare(p1, p2, p3, p4))