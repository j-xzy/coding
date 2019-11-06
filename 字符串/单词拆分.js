/**
给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
示例 3：

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
 */


// bfs
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const set = new Set(wordDict);
  const queue = [0];
  const visited = [];
  while (queue.length) {
    const start = queue.shift();
    if(visited[start]) {
      continue;
    }
    visited[start] = true;
    for (let end = start + 1; end <= s.length; ++end) {
      if (set.has(s.substring(start, end))) {
        queue.push(end);
        if (end === s.length) {
          return true;
        }
      }
    }
  }
  return false;
};


// 记忆回溯
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const set = new Set(wordDict);
  const memo = {};
  return backTrace(0);

  function backTrace(start) {
    if (start === s.length) {
      return true;
    }
    if (memo[start] !== undefined) {
      return memo[start];
    }
    for (let end = start + 1; end <= s.length; ++end) {
      if (set.has(s.substring(start, end)) && backTrace(end)) {
        memo[start] = true;
        return true;
      }
    }
    memo[start] = false;
    return false;
  }
};
