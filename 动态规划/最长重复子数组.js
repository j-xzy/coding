/**
 * 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。
 * 
 * 示例 1:
 * 输入:
 * A: [1,2,3,2,1]
 * B: [3,2,1,4,7]
 * 输出: 3
 * 解释: 
 * 长度最长的公共子数组是 [3, 2, 1]。
 * 
 * 说明:
 * 1 <= len(A), len(B) <= 1000
 * 0 <= A[i], B[i] < 100
 */

// dp[i][j] 代表A以i结束、B以j结束的 公共的、长度最长的子数组的长度
// dp[i][j] =  A[i] === B[j] ? dp[i-1][j-1] + 1 : 0

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  let dp = [];
  let ans = -Infinity;
  for (let i = 0; i < A.length; ++i) {
    dp.push([]);
    for (let j = 0; j < B.length; ++j) {
      if (i === 0 && j === 0) {
        dp[0][0] = A[0] === B[0] ? 1 : 0;
      } else if (i === 0) {
        dp[i][j] = A[i] === B[j] ? 1 : 0;
      } else if (j === 0) {
        dp[i][j] = A[i] === B[j] ? 1 : 0;
      } else if (A[i] === B[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = 0;
      }
      ans = Math.max(ans, dp[i][j])
    }
  }
  return ans;
};

findLength(
  [1, 2, 3, 2],
  [3, 2, 3]
);