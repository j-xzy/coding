/**
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 示例:
 * 输入:
 * [
 *  [1,3,1],
 *  [1,5,1],
 *  [4,2,1]
 * ]
 * 
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (grid.length === 0) {
    return 0;
  }
  const dp = [];
  for (let r = 0; r < grid.length; ++r) {
    dp.push([]);
    for (let c = 0; c < grid[0].length; ++c) {
      if (r === 0 && c === 0) {
        dp[0][0] = grid[0][0];
        continue;
      }
      if (r === 0) {
        dp[r][c] = dp[r][c - 1] + grid[r][c];
        continue;
      }
      if (c === 0) {
        dp[r][c] = dp[r-1][c] + grid[r][c];
        continue;
      }
      dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1]) + grid[r][c];
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
};

minPathSum(
  [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]]);