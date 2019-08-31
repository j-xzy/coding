/**
 * 给定两个字符串s1, s2，找到使两个字符串相等所需删除字符的ASCII值的最小和。
 * 
 * 示例 1:
 * 输入: s1 = "sea", s2 = "eat"
 * 输出: 231
 * 解释: 在 "sea" 中删除 "s" 并将 "s" 的值(115)加入总和。
 * 在 "eat" 中删除 "t" 并将 116 加入总和。
 * 结束时，两个字符串相等，115 + 116 = 231 就是符合条件的最小和。
 * 
 * 示例 2:
 * 输入: s1 = "delete", s2 = "leet"
 * 输出: 403
 * 解释: 在 "delete" 中删除 "dee" 字符串变成 "let"，
 * 将 100[d]+101[e]+101[e] 加入总和。在 "leet" 中删除 "e" 将 101[e] 加入总和。
 * 结束时，两个字符串都等于 "let"，结果即为 100+101+101+101 = 403 。
 * 如果改为将两个字符串转换为 "lee" 或 "eet"，我们会得到 433 或 417 的结果，比答案更大。
 * 
 * 注意:
 * 0 < s1.length, s2.length <= 1000。
 * 所有字符串中的字符ASCII值在[97, 122]之间。
 */

// 思路
// dp[i][j] 表示 s1从0开始到i结束 与 s2从0开始到j结束 的 最相等所需删除字符的ASCII值的最小和
// dp[i][j] = s1[i] === s2[j] ? dp[i-1][j-1] : min(dp[i-1][j] + s1[i],dp[i][j-1] + s2[j] );
// 解释：当 s1[i]与s2[j]不等时，必须删除s1或s2中其中一个
// 例如 s1:ab  s2:ac, b!==c min(b + dp[0][1], c + dp[1][0]) 

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  const dp = [];
  for (let i = 0; i <= s1.length; ++i) {
    dp.push([]);
    for (let j = 0; j <= s2.length; ++j) {
      if (i === 0 && j === 0) {
        dp[i].push(0);
        continue;
      }
      if (i === 0) {
        dp[i].push(dp[i][j - 1] + s2.charCodeAt(j - 1));
        continue;
      }
      if (j === 0) {
        dp[i].push(dp[i - 1][j] + s1.charCodeAt(i - 1));
        continue;
      }
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j] + s1.charCodeAt(i - 1), dp[i][j - 1] + s2.charCodeAt(j - 1));
      }
    }
  }
  return dp[s1.length][s2.length];
};
