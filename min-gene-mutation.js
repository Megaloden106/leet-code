// A gene string can be represented by an 8-character long string, with choices from "A", "C", "G", "T".

// Suppose we need to investigate about a mutation (mutation from "start" to "end"), where ONE mutation is defined as ONE single character changed in the gene string.

// For example, "AACCGGTT" -> "AACCGGTA" is 1 mutation.

// Also, there is a given gene "bank", which records all the valid gene mutations. A gene must be in the bank to make it a valid gene string.

// Now, given 3 things - start, end, bank, your task is to determine what is the minimum number of mutations needed to mutate from "start" to "end". If there is no such a mutation, return -1.

// Note:

// Starting point is assumed to be valid, so it might not be included in the bank.
// If multiple mutations are needed, all mutations during in the sequence must be valid.
// You may assume start and end string is not the same.

/**
 * @param {string} string1
 * @param {string} string2
 * @return {boolean}
 */
const isMutation = (string1, string2) => {
  let diff = 0;
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      diff++;
      if (diff > 1) return false;
    }
  }
  return diff === 1;
}

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
const minMutation =(start, end, bank) => {
  if (!bank.includes(end)) return -1;
  const graph = {}; // key = gene string | value = [] of possible mutations
  for (let i = 0; i < bank.length; i++) {
    if (isMutation(start, bank[i])) {
      graph[start] = graph[start] || [];
      graph[start].push(bank[i]);
    }
    for (let j = 0; j < bank.length; j++) {
      if (i !== j && isMutation(bank[i], bank[j])) {
        graph[bank[i]] = graph[bank[i]] || [];
        graph[bank[i]].push(bank[j]);
      }
    }
  }
  let mutations = 0;
  const queue = [start];
  const visited = {};
  let count = queue.length;
  while (queue.length > 0) {
    let geneString = queue.shift();
    visited[geneString] = true;
    if (geneString === end) return mutations;
    if (!graph[geneString]) return -1;
    if (!visited[graph[geneString]]) graph[geneString].forEach(string => queue.push(string))
    if (--count === 0) {
      count = queue.length;
      mutations++;
    }
  }
  return -1;
};