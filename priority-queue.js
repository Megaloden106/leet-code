// implement a priority queue data structure

class PriorityQueue {
  constructor(comparator) {
    this.queue = [];
    this.length = 0;
    this.comparator = comparator;
  }

  add(val) {
    this.length++;
    this.queue.push(val);
    let cIdx = this.length - 1;
    let pIdx = Math.floor((cIdx - 1) / 2);
    while (pIdx >= 0 && this.comparator(this.queue[cIdx], this.queue[pIdx])) {
      let temp = this.queue[cIdx];
      this.queue[cIdx] = this.queue[pIdx];
      this.queue[pIdx] = temp;
      cIdx = pIdx;
      pIdx = Math.floor((cIdx - 1) / 2);
    }
  }

  remove() {
    let temp = this.queue[0];
    this.queue[0] = this.queue[this.length - 1];
    this.queue[this.length - 1] = temp;
    this.length--;
    let result = this.queue.pop();
    let pIdx = 0;
    let lIdx = (pIdx + 1) * 2 - 1;
    let rIdx = (pIdx + 1) * 2;
    while ((lIdx < this.length && this.comparator(this.queue[lIdx], this.queue[pIdx]))
      || (rIdx < this.length && this.comparator(this.queue[rIdx], this.queue[pIdx]))) {
        let temp = this.queue[pIdx];
        if (rIdx >= this.length || this.comparator(this.queue[lIdx], this.queue[rIdx])) {
          this.queue[pIdx] = this.queue[lIdx];
          this.queue[lIdx] = temp;
          pIdx = lIdx;
        } else {
          this.queue[pIdx] = this.queue[rIdx];
          this.queue[rIdx] = temp;
          pIdx = rIdx;
        }
        lIdx = (pIdx + 1) * 2 - 1;
        rIdx = (pIdx + 1) * 2;
    }
    return result;
  }

  checkRoot() {
    return this.queue[0];
  }
}

const minHeap = new PriorityQueue((a, b) => a > b);
minHeap.add(1)
minHeap.add(2)
minHeap.add(3)
minHeap.add(4)
minHeap.add(5)
console.log(minHeap.queue)