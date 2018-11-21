// Implement a trie with insert, search, and startsWith methods.

/**
 * Initialize your data structure here.
 */
var Trie = function() {
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
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
// let b = trie.search("app");     // returns false
// let c = trie.startsWith("app"); // returns true
// trie.insert("app");
// let d = trie.search("app");     // returns true
// console.log(a, b, c, d)

// const trie = new Trie();
// trie.insert("abc");
// let a = trie.search("abc");   // returns true
// let b = trie.search("ab");     // returns false
// trie.insert("ab");
// let c= trie.search("ab");     // returns false
// trie.insert("ab");
// console.log(trie)
// let d = trie.search("ab");     // returns true
// console.log(a, b, c, d)