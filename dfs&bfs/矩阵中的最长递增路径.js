/**
给定一个整数矩阵，找出最长递增路径的长度。

对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）。

示例 1:

输入: nums = 
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
] 
输出: 4 
解释: 最长递增路径为 [1, 2, 6, 9]。
示例 2:

输入: nums = 
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
] 
输出: 4 
解释: 最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
 */

// 深度搜索记忆化 
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const rowCount = matrix.length;
  let ans = 0;
  if (rowCount === 0) {
    return ans;
  }
  const dir = [[0, -1], [-1, 0], [0, 1], [1, 0]];
  const colCount = matrix[0].length;
  const cache = [...Array(rowCount)].map(() => Array(colCount).fill(0));
  for (let r = 0; r < rowCount; ++r) {
    for (let c = 0; c < colCount; ++c) {
      ans = Math.max(ans, dfs(r, c));
    }
  }

  return ans;

  function dfs(r, c) {
    if (cache[r][c]) {
      return cache[r][c];
    }
    dir.forEach(([rx, cx]) => {
      const dr = r + rx;
      const dc = c + cx;
      if (!(dr < 0 || dc < 0 || dr >= rowCount || dc >= colCount) && matrix[r][c] < matrix[dr][dc]) {
        cache[r][c] = Math.max(cache[r][c], dfs(dr, dc));
      }
    });
    return ++cache[r][c];
  }
};

console.log(
  longestIncreasingPath([
    [3, 4, 5],
    [3, 7, 6],
    [2, 2, 1]
  ])
);
