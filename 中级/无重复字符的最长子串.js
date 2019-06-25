/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 示例 1:
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 示例 2:
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 示例 3:
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

// #region 滑动窗口

// 有一个区间[i,j],使用hashmap存储区间每一个数
// 1. 遇到重复i++,并删除hashmap中的i
// 2. 不重复j++记录hashmap
// 这样可以找到以i开始的最大不重复字符串

// 时间复杂度O(2*n) = O(n) 最坏情况下每个元素都要访问两次

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function (s) {
  let max = 0;
  let i = 0;
  let j = 0;
  const map = new Map();
  const n = s.length;
  while (i < n && j < n) {
    if (!map.has(s[j])) {
      map.set(s[j], 1);
      max = Math.max(max, j - i + 1);
      ++j
    } else {
      map.delete(s[i]);
      ++i;
    }
  }
  return max;
};

// #endregion

// #region 优化滑动窗口

// 直接跳过重复区间
// 时间复杂度 O(n)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function (s) {
  let max = 0;
  const n = s.length;
  const map = new Map();
  for (let i = 0, j = 0; j < n; ++j) {
    if (map.has(s[j])) {
      // 避免i向前移
      i = Math.max(map.get(s[j]) + 1, i);
    }
    max = Math.max(max, j - i + 1);
    map.set(s[j], j);
  }
  return max;
};

// #endregion

console.log(lengthOfLongestSubstring2('abcabcbb') === 3);
console.log(lengthOfLongestSubstring2('bbbbb') === 1);
console.log(lengthOfLongestSubstring2('pwwkew') === 3);
console.log(lengthOfLongestSubstring2('dvdf') === 3);
console.log(lengthOfLongestSubstring2('abba') === 2);