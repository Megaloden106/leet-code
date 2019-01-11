// You have a lock in front of you with 4 circular wheels.
// Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'.
// The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'.
// Each move consists of turning one wheel one slot.
// The lock initially starts at '0000', a string representing the state of the 4 wheels.
// You are given a list of deadends dead ends, meaning if the lock displays any of these codes,
// the wheels of the lock will stop turning and you will be unable to open it.
// Given a target representing the value of the wheels that will unlock the lock,
// return the minimum total number of turns required to open the lock, or -1 if it is impossible.

const steps = {
  0: [9,1],
  1: [0,2],
  2: [1,3],
  3: [2,4],
  4: [3,5],
  5: [4,6],
  6: [5,7],
  7: [6,8],
  8: [7,9],
  9: [8,0],
}

/**
 * @param {string} current
 * @param {string} target
 * @return {number}
 */
const dist = (current, target) => {
  let dist = 0;
  for (let i = 0; i < current.length; i++) {
    const n = [current[i], target[i]];
    const n1 = n[0] > n[1] ? n[1] : n[0];
    const n2 = n1 === n[0] ? n[1] : n[0];
    dist += Math.min(n2 - n1, n1 - n2 + 10);
  }
  return dist;
}

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const openLock = (deadends, target) => {
  const stop = {};
  const v1 = {};
  const v2 = {};
  deadends.forEach(e => stop[e] = e);
  const q1 = [['0000', 0]];
  const q2 = [[target, 0]];
  while (q1.length && q2.length) {
    let [n1, d1] = q1.shift();
    let [n2, d2] = q2.shift();
    if (v2[n1]) return d1 + v2[n1];
    if (v1[n2]) return d2 + v1[n2];
    if (!stop[n1] && !v1[n1]) {
      for (let i = 0; i < n1.length; i++) {
        steps[n1[i]].forEach(s => {
          q1.push([n1.slice(0, i) + s + n1.slice(i + 1), d1 + 1]);
        });
      }
    }
    if (!stop[n2] && !v2[n2]) {
      for (let i = 0; i < n2.length; i++) {
        steps[n2[i]].forEach(s => {
          q2.push([n2.slice(0, i) + s + n2.slice(i + 1), d2 + 1]);
        });
      }
    }
    v1[n1] = d1;
    v2[n2] = d2;
    if (n1 === target) return d1;
    if (n2 === '0000') return d2;
  }
  return -1;
};

// class PriorityQueue {
//   constructor(comp) {
//     this.queue = [];
//     this.comp = comp;
//     this.length = 0;
//   }

//   enqueue(val) {
//     this.queue.push(val);
//     let child = this.queue.length - 1;
//     let parent = Math.floor((child - 1) / 2);
//     while (this.queue[parent] && this.comp(this.queue[child], this.queue[parent])) {
//       let temp = this.queue[child];
//       this.queue[child] = this.queue[parent];
//       this.queue[parent] = temp;
//       child = parent;
//       parent = Math.floor((child - 1) / 2);
//     }
//     this.length++;
//   }

//   dequeue() {
//     const result = this.queue[0];
//     if (this.length > 1) {
//       this.queue[0] = this.queue.pop();
//     } else {
//       this.queue.pop();
//     }
//     let node = 0;
//     let left = (node + 1) * 2 - 1;
//     let right = (node + 1) * 2;
//     while ((this.queue[left] && this.comp(this.queue[left], this.queue[node]))
//       || (this.queue[right] && this.comp(this.queue[right], this.queue[node]))) {
//       let temp = this.queue[node];
//       if (!this.queue[right] || this.comp(this.queue[left], this.queue[right])) {
//         this.queue[node] = this.queue[left];
//         this.queue[left] = temp;
//         node = left;
//         left = (node + 1) * 2 - 1;
//         right = (node + 1) * 2;
//       } else {
//         this.queue[node] = this.queue[right];
//         this.queue[right] = temp;
//         node = right;
//         left = (node + 1) * 2 - 1;
//         right = (node + 1) * 2;
//       }
//     }
//     this.length--;
//     return result;
//   }
// }

// /**
//  * @param {string[]} deadends
//  * @param {string} target
//  * @return {number}
//  */
// const openLock = (deadends, target) => {
//   const stop = {};
//   const visited = {};
//   deadends.forEach(e => stop[e] = e);
//   const minHeap = new PriorityQueue((a, b) => {
//     return a[2] !== b[2] ? a[2] < b[2] : a[1] < b[1];
//   });
//   minHeap.enqueue(['0000', 0, dist('0000', target)])
//   while (minHeap.length) {
//     console.log(minHeap.queue);
//     let [node, d] = minHeap.dequeue();
//     if (!stop[node] && !visited[node]) {
//       for (let i = 0; i < node.length; i++) {
//         steps[node[i]].forEach(s => {
//           minHeap.enqueue([node.slice(0, i) + s + node.slice(i + 1), d + 1, dist(node, target)]);
//         });
//       }
//     }
//     visited[node] = node;
//     if (node === target) return d;
//   }
//   return -1;
// };

const deadends = ["0201","0101","0102","1212","2002"]
const target = "0202"
console.time('1')
console.log(openLock(deadends, target));
console.timeEnd('1')
