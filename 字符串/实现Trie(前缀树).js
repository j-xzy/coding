/**
实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

示例:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");   
trie.search("app");     // 返回 true
说明:

你可以假设所有的输入都是由小写字母 a-z 构成的。
保证所有输入均为非空字符串。
 */

/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = {
    children: {}
  };
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let idx = 0;
  let node = this.root;
  while (idx < word.length) {
    const w = word[idx];
    if (node.children[w]) {
      node = node.children[w];
    } else {
      node.children[w] = {
        char: w,
        occurances: 0,
        children: {}
      };
      node = node.children[w];
    }
    ++idx;
  }
  ++node.occurances;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;
  for (let i = 0; i < word.length; ++i) {
    const w = word[i];
    if (node.children[w]) {
      node = node.children[w];
    } else {
      return false;
    }
  }
  return node.occurances > 0;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (let i = 0; i < prefix.length; ++i) {
    const w = prefix[i];
    if (node.children[w]) {
      node = node.children[w];
    } else {
      return false;
    }
  }
  return true;
};
