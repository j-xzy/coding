/**
给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。

说明：
分隔时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 1：

输入:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
输出:
[
  "cats and dog",
  "cat sand dog"
]

示例 2：
输入:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
输出:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
解释: 注意你可以重复使用字典中的单词。

示例 3：
输入:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
输出:
[]
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const set = new Set(wordDict);
  const map = {};
  return dfs(0);

  function dfs(start) {
    if(start >= s.length) {
      return [''];
    }
    if(map[start]) {
      return map[start];
    }
    const ans = [];
    for (let end = start + 1; end <= s.length; ++end) {
      const str = s.substring(start, end);
      if (set.has(str)) {
        const list = dfs(end);
        list.forEach((l) => {
          ans.push(str + (l === '' ? '' : ' ' + l));
        });
      }
    }
    map[start] = ans;
    return ans;
  }
};
