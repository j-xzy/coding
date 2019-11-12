/**
找到给定字符串（由小写字符组成）中的最长子串 T ， 要求 T 中的每一字符出现次数都不少于 k 。输出 T 的长度。

示例 1:
输入:
s = "aaabb", k = 3
输出:
3

最长子串为 "aaa" ，其中 'a' 重复了 3 次。
示例 2:

输入:
s = "ababbc", k = 2
输出:
5

最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  let ans = 0;
  help(0, s.length - 1);
  return ans;

  function help(start, end) {
    if (end - start + 1 < k) {
      return 0;
    }
    const times = {};
    for (let i = start; i <= end; ++i) {
      times[s[i]] = (times[s[i]] || 0) + 1;
    }
    let l = -1;
    let flag = true;
    for (let i = start; i <= end; ++i) {
      if (times[s[i]] < k) {
        flag = false;
        help(l + 1, i - 1);
        l = i;
      }
    }
    if (l !== -1) {
      help(l + 1, end);
    }
    if (flag) {
      ans = Math.max(ans, end - start + 1);
    }
  }
};
