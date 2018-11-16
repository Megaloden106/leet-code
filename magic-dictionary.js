// Implement a magic directory with buildDict, and search methods.

// For the method buildDict, you'll be given a list of non-repetitive words to build a dictionary.

// For the method search, you'll be given a word, and judge whether
// if you modifyexactly one character into another character in this word,
// the modified word is in the dictionary you just built.

/**
 * Initialize your data structure here.
 */
const MagicDictionary = function() {
  this.storage = {};
};

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
  dict = dict.sort((a, b) => a - b);
  dict.forEach(word => {
    this.storage[word.length] = this.storage[word.length] || [];
    this.storage[word.length].push(word);
  });
  return null;
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
  const storage = this.storage[word.length];
  let result = false;
  if (storage) {
    storage.forEach(elem => {
      let errors = 0;
      for (let i = 0; i < word.length; i += 1) {
        if (word[i] !== elem[i]) errors += 1
        if (errors > 1) break;
      }
      result = result || errors ===  1;
    });
  }
  return result;
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */