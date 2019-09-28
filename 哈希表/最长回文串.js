/**
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 * 
 * 注意:
 * 假设字符串的长度不会超过 1010。
 * 
 * 示例 1:
 * 输入:
 * "abccccdd"
 * 输出:
 * 7
 * 解释:
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const map = {};
  for (let i = 0; i < s.length; ++i) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 1;
    } else {
      map[s[i]] = map[s[i]] + 1;
    }
  }
  let ans = 0;
  Object.keys(map).forEach((k) => {
    const num = map[k];
    if (num >= 2) {
      ans += Math.floor(num / 2) * 2;
    }
  });
  if (ans < s.length) {
    ans += 1;
  }
  return ans;
};

longestPalindrome('ccc')