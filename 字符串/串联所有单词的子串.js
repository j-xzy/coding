/**
给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

示例 1：
输入：
  s = "barfoothefoobarman",
  words = ["foo","bar"]
输出：[0,9]
解释：
从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
输出的顺序不重要, [9,0] 也是有效答案。

示例 2：
输入：
  s = "wordgoodgoodgoodbestword",
  words = ["word","good","best","word"]
输出：[]
 */


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (s === '' || words.length === 0) {
    return [];
  }
  const ans = [];
  let bckmap = {};
  words.forEach((w) => {
    if (bckmap[w]) {
      bckmap[w] = bckmap[w] + 1;
    } else {
      bckmap[w] = 1;
    }
  });
  const wordLen = words[0].length;
  const groupLen = wordLen * words.length;
  for (let head = 0, tail = head + groupLen; tail <= s.length; ++head, tail = head + groupLen) {
    let map = {};
    let start = head;
    let end = tail;
    let flag = words.length;
    while (start + wordLen <= end) {
      const word = s.substr(start, wordLen);
      if (!bckmap[word]) {
        break;
      }
      map[word] = (map[word] || 0) + 1;
      if (map[word] > bckmap[word]) {
        break;
      }
      --flag;
      start += wordLen;
      if (flag === 0) {
        ans.push(head);
      }
    }
  }
  return ans;
};

findSubstring("abaababbaba", ["ab", "ba", "ab", "ba"]);