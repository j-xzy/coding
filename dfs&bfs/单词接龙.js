/**
给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：

每次转换只能改变一个字母。
转换过程中的中间单词必须是字典中的单词。

说明:
如果不存在这样的转换序列，返回 0。
所有单词具有相同的长度。
所有单词只由小写字母组成。
字典中不存在重复的单词。
你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
示例 1:

输入:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

输出: 5

解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
     返回它的长度 5。
示例 2:

输入:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

输出: 0

解释: endWord "cog" 不在字典中，所以无法进行转换。
 */

// 双向bfs 
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return 0;
  }
  const dic = {};
  wordList.forEach((word) => {
    for (let i = 0; i < word.length; ++i) {
      const newWord = word.substring(0, i) + '*' + word.substring(i + 1, word.length);
      const m = dic[newWord] || [];
      m.push(word);
      dic[newWord] = m;
    }
  });
  const beginQueue = [beginWord];
  const endQueue = [endWord];
  const beginVisited = { [beginWord]: true };
  const endVisited = { [endWord]: true };
  let level = 1;

  while (beginQueue.length > 0 && endQueue.length > 0) {
    ++level;
    let result = bfs(beginQueue, beginVisited, endVisited, dic);
    if (result) {
      return level;
    }
    ++level;
    result = bfs(endQueue, endVisited, beginVisited, dic);
    if (result) {
      return level;
    }
  }

  return 0;
};

function bfs(queue, visited, otherVisited, dic) {
  let size = queue.length;
  while (size--) {
    const word = queue.shift();
    for (let i = 0; i < word.length; ++i) {
      const newWord = word.substring(0, i) + '*' + word.substring(i + 1, word.length);
      if (!dic[newWord]) {
        continue;
      }
      for (let n = 0; n < dic[newWord].length; ++n) {
        const w = dic[newWord][n];
        if (otherVisited[w]) {
          return true;
        }
        if (!visited[w]) {
          visited[w] = true;
          queue.push(w);
        }
      }
    }
  }
  return false;
}

ladderLength('hit', 'cog', ["hot", "dot", "dog", "lot", "log"]);

// 单向bfs
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const dic = {};
  wordList.forEach((word) => {
    for (let i = 0; i < word.length; ++i) {
      const newWord = word.substring(0, i) + '*' + word.substring(i + 1, word.length);
      const m = dic[newWord] || [];
      m.push(word);
      dic[newWord] = m;
    }
  });
  const queue = [beginWord];
  const visited = { [beginWord]: true };
  let level = 1;
  while (queue.length > 0) {
    let size = queue.length;
    ++level;
    while (size--) {
      const word = queue.shift();
      for (let i = 0; i < word.length; ++i) {
        const newWord = word.substring(0, i) + '*' + word.substring(i + 1, word.length);
        if (!dic[newWord]) {
          continue;
        }
        for (let n = 0; n < dic[newWord].length; ++n) {
          const w = dic[newWord][n];
          if (w === endWord) {
            return level;
          }
          if (!visited[w]) {
            visited[w] = true;
            queue.push(w);
          }
        }
      }
    }
  }
  return 0;
};

ladderLength('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"]);