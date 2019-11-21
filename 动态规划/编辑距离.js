/**
给定两个单词 word1 和 word2，计算出将 word1 转换成 word2 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

  1. 插入一个字符
  2. 删除一个字符
  3. 替换一个字符
  
示例 1:
输入: word1 = "horse", word2 = "ros"
输出: 3
解释: 
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')

示例 2:
输入: word1 = "intention", word2 = "execution"
输出: 5
解释: 
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')
 */

// 自顶向下+备忘录
const cache = {};
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  if (cache[word1 + '#' + word2]) {
    return cache[word1 + '#' + word2];
  }
  if (!word1.length) {
    return word2.length;
  }
  if (!word2.length) {
    return word1.length;
  }
  if (word1[word1.length - 1] === word2[word2.length - 1]) {
    return cache[word1 + '#' + word2] = minDistance(word1.slice(0, word1.length - 1), word2.slice(0, word2.length - 1));
  }
  const inserted = 1 + minDistance(word1, word2.slice(0, word2.length - 1));
  const deleted = 1 + minDistance(word1.slice(0, word1.length - 1), word2);
  const replaced = 1 + minDistance(word1.slice(0, word1.length - 1), word2.slice(0, word2.length - 1));
  return cache[word1 + '#' + word2] = Math.min(inserted, deleted, replaced);
};

// dp
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const dp = [];
  for (let r = 0; r <= word1.length; ++r) {
    dp.push([r]);
    if (r === 0) {
      dp[0] = [...Array(word2.length + 1)].map((_, i) => i);
    }
  }
  for (let r = 1; r <= word1.length; ++r) {
    for (let c = 1; c <= word2.length; ++c) {
      if (word1[r - 1] === word2[c - 1]) {
        dp[r][c] = dp[r - 1][c - 1];
      } else {
        dp[r][c] = 1 + Math.min(dp[r - 1][c - 1], dp[r][c - 1], dp[r - 1][c]);
      }
    }
  }
  return dp[word1.length][word2.length];
};
