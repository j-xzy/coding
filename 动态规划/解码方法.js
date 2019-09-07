/**
 * 一条包含字母 A-Z 的消息通过以下方式进行了编码：
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 给定一个只包含数字的非空字符串，请计算解码方法的总数。
 * 
 * 示例 1:
 * 输入: "12"
 * 输出: 2
 * 解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。
 * 
 * 示例 2:
 * 输入: "226"
 * 输出: 3
 * 解释: 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
 */

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === '0') {
    return 0;
  }
  if (s.length < 2) {
    return s.length;
  }
  const dp = [1];
  for (let i = 1; i < s.length; ++i) {
    const curr = s[i];
    const pre = s[i - 1];
    if (curr === '0') {
      dp[i] = dp[i - 1];
    } else if (pre !== '1' && pre !== '2') {
      dp[i] = dp[i - 1];
    } else if (pre === '2' && (curr === '7' || curr === '8' || curr === '9')) {
      dp[i] = dp[i - 1];
    } else {
      dp[i] = dp[i - 1] + 1;
    }
  }
  return dp[dp.length - 1];
};
