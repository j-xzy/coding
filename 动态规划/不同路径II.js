/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * 
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 * 说明：m 和 n 的值均不超过 100。
 * 示例 1:
 * 输入:
 * [
 *  [0,0,0],
 *  [0,1,0],
 *  [0,0,0]
 * ]
 * 输出: 2
 * 解释:
 * 3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let rowCount = obstacleGrid.length;
  if (rowCount === 0) {
    return 0;
  }
  if(obstacleGrid[0][0] === 1) {
    return 0;
  }
  let colCount = obstacleGrid[0].length;
  const dp = [...Array(rowCount)].map(() => Array(colCount).fill())
  for (let r = 0; r < rowCount; ++r) {
    for (let c = 0; c < colCount; ++c) {
      if (obstacleGrid[r][c] === 1) {
        if (r === 0) {
          for (let i = c; i < colCount; ++i) {
            dp[r][i] = 0;
          }
          break;
        } else if (c === 0) {
          for (let i = r; i < rowCount; ++i) {
            dp[i][c] = 0;
          }
        } else {
          dp[r][c] = 0;
        }
        continue;
      }
      if (dp[r][c] === 0) {
        continue;
      }
      if (r === 0) {
        dp[r][c] = 1;
        continue;
      }
      if (c === 0) {
        dp[r][c] = 1;
        continue;
      }
      dp[r][c] = dp[r][c - 1] + dp[r - 1][c];
    }
  }
  return dp[rowCount - 1][colCount - 1];
};
console.log(uniquePathsWithObstacles(
  [
    [1],
    [0]
  ]
))