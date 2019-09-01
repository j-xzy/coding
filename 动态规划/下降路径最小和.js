/**
 * 给定一个方形整数数组 A，我们想要得到通过 A 的下降路径的最小和。
 * 下降路径可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列。
 * 
 * 示例：
 * 输入：[[1,2,3],[4,5,6],[7,8,9]]
 * 输出：12
 * 解释：
 * 可能的下降路径有：
 * [1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
 * [2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
 * [3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]
 * 和最小的下降路径是 [1,4,7]，所以答案是 12。
 * 
 * 提示：
 * 1 <= A.length == A[0].length <= 100
 * -100 <= A[i][j] <= 100
 */

// dp
// f(r,c) 表示到第r行、c列的最小路径和
// f(r,c) = A[r][c] + min(f(r-1,c-1), f(r-1,c), f(r-c,c+1))

/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function (A) {
  const len = A.length;
  if (len === 0) {
    return 0;
  }
  const dp = [[]];
  for (let c = 0; c < len; ++c) {
    dp[0].push(A[0][c]);
  }
  for (let r = 1; r < len; ++r) {
    dp.push([]);
    for (let c = 0; c < len; ++c) {
      dp[r].push(A[r][c] + Math.min(
        dp[r - 1][c - 1] === undefined ? Infinity : dp[r - 1][c - 1],
        dp[r - 1][c],
        dp[r - 1][c + 1] === undefined ? Infinity : dp[r - 1][c + 1],
      ));
    }
  }
  return dp[len - 1].reduce((pre, cur) => Math.min(pre, cur), Infinity)
};