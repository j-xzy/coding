/**
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
 * 
 * 示例:
 * 输入: 
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * 输出: 4
 */

// dp[r][c]

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const rowCount = matrix.length;
  if (rowCount === 0) {
    return 0;
  }
  const colCount = matrix[0].length;
  let max = 0;
  const dp = [...Array(rowCount)].map(() => Array(colCount).fill(0));
  for (let r = 0; r < rowCount; ++r) {
    for (let c = 0; c < colCount; ++c) {
      if (matrix[r][c] === '0') {
        continue;
      }
      if (r === 0 || c === 0) {
        dp[r][c] = 1;
        max = Math.max(max, 1);
        continue;
      }
      dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1], dp[r - 1][c - 1]) + 1;
      max = Math.max(max, dp[r][c]);
    }
  };
  return max * max;
}

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const rowCount = matrix.length;
  if (rowCount === 0) {
    return 0;
  }
  const colCount = matrix[0].length;
  let max = 0;
  const dp = [...Array(rowCount)].map(() => Array(colCount).fill(0));
  for (let r = 0; r < rowCount; ++r) {
    for (let c = 0; c < colCount; ++c) {
      if (matrix[r][c] === '0') {
        continue;
      }
      if (r === 0 || c === 0) {
        dp[r][c] = 1;
      } else if (dp[r - 1][c] === 0 || dp[r][c - 1] === 0) {
        dp[r][c] = 1;
      } else if (dp[r - 1][c] === dp[r][c - 1]) {
        const step = dp[r - 1][c];
        if (matrix[r - step][c - step] === '1') {
          dp[r][c] = step + 1;
        } else {
          dp[r][c] = step;
        }
      } else {
        dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1]) + 1;
      }
      max = Math.max(max, dp[r][c]);
    }
  }
  return max * max;
};
