/**
给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

示例:
输入:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
输出: 6
 */

// 题解：https://leetcode-cn.com/problems/maximal-rectangle/solution/zui-da-ju-xing-by-leetcode/ 

// 思路：方法2
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const rowCount = matrix.length;
  if (rowCount === 0) {
    return 0;
  }
  let ans = 0;
  const colCount = matrix[0].length;
  const dp = [...Array(rowCount)].map(() => Array(colCount).fill(0));
  for (let r = 0; r < rowCount; ++r) {
    for (let c = 0; c < colCount; ++c) {
      if (matrix[r][c] === '0') {
        continue;
      }
      if (c === 0) {
        dp[r][c] = 1;
      } else {
        dp[r][c] = dp[r][c - 1] + 1;
      }
      let width = dp[r][c];
      for (let j = r; j >= 0; --j) {
        width = Math.min(width, dp[j][c]);
        let height = r - j + 1;
        let area = width * height;
        ans = Math.max(ans, area);
      }
    }
  }
  return ans;
};
