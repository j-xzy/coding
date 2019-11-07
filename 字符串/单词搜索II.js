/**
给定一个二维网格 board 和一个字典中的单词列表 words，找出所有同时在二维网格和字典中出现的单词。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

示例:

输入: 
words = ["oath","pea","eat","rain"] and board =
[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]

输出: ["eat","oath"]
说明:
你可以假设所有输入都由小写字母 a-z 组成。

提示:
你需要优化回溯算法以通过更大数据量的测试。你能否早点停止回溯？
如果当前单词不存在于所有单词的前缀中，则可以立即停止回溯。什么样的数据结构可以有效地执行这样的操作？散列表是否可行？为什么？ 前缀树如何？如果你想学习如何实现一个基本的前缀树，请先查看这个问题： 实现Trie（前缀树）。
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

/**
* @param {character[][]} board
* @param {string[]} words
* @return {string[]}
*/
var findWords = function (board, words) {
  if (board.length === 0 || words.length === 0) {
    return [];
  }
  const rowCount = board.length;
  const colCount = board[0].length;
  const trie = new Trie();
  words.forEach((w) => {
    trie.insert(w);
  });
  const ans = new Set();
  let visited;
  for (let r = 0; r < rowCount; ++r) {
    for (let c = 0; c < colCount; ++c) {
      visited = [...Array(rowCount)].map(() => Array(colCount).fill(false));
      dfs(r, c, board[r][c]);
    }
  }

  return Array.from(ans);

  function dfs(r, c, word) {
    if (r < 0 || c < 0 || r >= rowCount || c >= colCount || visited[r][c]) {
      return;
    }
    if (trie.search(word)) {
      ans.add(word);
    }
    if (!trie.startsWith(word)) {
      return;
    }
    visited[r][c] = true;
    if (c - 1 >= 0) {
      dfs(r, c - 1, word + board[r][c - 1]);
    }
    if (r - 1 >= 0) {
      dfs(r - 1, c, word + board[r - 1][c]);
    }
    if (c + 1 < colCount) {
      dfs(r, c + 1, word + board[r][c + 1]);
    }
    if (r + 1 < rowCount) {
      dfs(r + 1, c, word + board[r + 1][c]);
    }
    visited[r][c] = false;
  }
};
