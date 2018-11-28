// Implement a trie with insert, search, and startsWith methods.

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.end = false;
  this.children = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  if (word.length === 0) return this.end = true;
  const char = word[0];
  this.children[char] = this.children[char] || new Trie();
  this.children[char].insert(word.slice(1));
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  if (word.length === 0) return this.end;
  const char = word[0];
  if (this.children[char]) {
    return this.children[char].search(word.slice(1));
  }
  return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  if (prefix.length === 0) return true;
  const char = prefix[0];
  if (this.children[char]) {
    return this.children[char].startsWith(prefix.slice(1));
  }
  return false;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// const trie = new Trie();
// trie.insert("apple");
// let a = trie.search("apple");   // returns true
// console.log(a)
// let b = trie.search("app");     // returns false
// console.log(b)
// let c = trie.startsWith("app"); // returns true
// console.log(c)
// trie.insert("app");
// let d = trie.search("app");     // returns true
// console.log(d)

const trie = new Trie();
trie.insert("abc");
let a = trie.search("abc");   // returns true
console.log(a)
let b = trie.search("ab");     // returns false
console.log(b)
trie.insert("ab");
let c = trie.search("ab");     // returns true
console.log(c)
trie.insert("ab");
let d = trie.search("ab");     // returns true
console.log(d)