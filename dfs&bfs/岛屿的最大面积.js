/**
给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)

示例 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
对于上面这个给定矩阵应返回 6。注意答案不应该是11，因为岛屿只能包含水平或垂直的四个方向的‘1’。

示例 2:

[[0,0,0,0,0,0,0,0]]
对于上面这个给定的矩阵, 返回 0。

注意: 给定的矩阵grid 的长度和宽度都不超过 50。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const rowCount = grid.length;
  if (rowCount === 0) {
    return 0;
  }
  const colCount = grid[0].length;
  const visited = [...Array(rowCount)].map(() => Array(colCount).fill(false));
  let ans = 0;

  for (let r = 0; r < rowCount; ++r) {
    for (let c = 0; c < colCount; ++c) {
      if (grid[r][c] === 1 && !visited[r][c]) {
        ans = Math.max(ans, dfs(r, c));
      }
    }
  }

  function dfs(r, c) {
    if (r < 0 || r >= rowCount || c < 0 || c >= colCount) {
      return 0;
    }
    if (visited[r][c]) {
      return 0;
    }
    visited[r][c] = true;
    if (grid[r][c] !== 1) {
      return 0;
    }
    return dfs(r, c - 1) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r + 1, c) + 1;
  }

  return ans;
};
