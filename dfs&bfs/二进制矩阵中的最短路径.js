/**
在一个 N × N 的方形网格中，每个单元格有两种状态：空（0）或者阻塞（1）。

一条从左上角到右下角、长度为 k 的畅通路径，由满足下述条件的单元格 C_1, C_2, ..., C_k 组成：

相邻单元格 C_i 和 C_{i+1} 在八个方向之一上连通（此时，C_i 和 C_{i+1} 不同且共享边或角）
C_1 位于 (0, 0)（即，值为 grid[0][0]）
C_k 位于 (N-1, N-1)（即，值为 grid[N-1][N-1]）
如果 C_i 位于 (r, c)，则 grid[r][c] 为空（即，grid[r][c] == 0）
返回这条从左上角到右下角的最短畅通路径的长度。如果不存在这样的路径，返回 -1 。
 */

// bfs 一层一层搜索
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  if (grid[n - 1][n - 1] === 1) {
    return -1;
  }
  if (grid[0][0] === 1) {
    return -1;
  }
  const directions = [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]];
  const queue = [[0, 0]];
  const visited = [...Array(n)].map(() => Array(n).fill(false));
  visited[0][0] = true;
  let ans = 0;
  while (queue.length > 0) {
    // 搜索一圈加1
    ++ans;
    let size = queue.length;
    while (size > 0) {
      const pos = queue.shift();
      if (pos[0] === n - 1 && pos[1] === n - 1) {
        return ans;
      }
      for (let i = 0; i < directions.length; ++i) {
        const [dx, dy] = directions[i];
        const x = pos[0] + dx;
        const y = pos[1] + dy;
        if (x >= n || y >= n || x < 0 || y < 0) {
          continue;
        }
        if (grid[x][y] === 1) {
          continue;
        }
        if (visited[x][y]) {
          continue;
        }
        visited[x][y] = true;
        queue.push([x, y]);
      }
      --size;
    }
  }

  return -1;
};


// dfs
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const visited = {};
  const n = grid.length;
  let ans = Infinity;
  if (grid[n - 1][n - 1] === 1) {
    return -1;
  }

  dfs(0, 0, 0);

  function dfs(r, c, count) {
    if (r >= n || c >= n || r < 0 || c < 0) {
      return;
    }
    if (visited[`${r}#${c}`]) {
      return;
    }
    if (grid[r][c] === 1) {
      return;
    }
    if (count >= ans) {
      return;
    }
    if (r === n - 1 && c === n - 1) {
      ans = Math.min(ans, count + 1);
      return;
    }
    visited[`${r}#${c}`] = true;
    dfs(r, c - 1, count + 1);
    dfs(r - 1, c - 1, count + 1);
    dfs(r - 1, c, count + 1);
    dfs(r - 1, c + 1, count + 1);
    dfs(r, c + 1, count + 1);
    dfs(r + 1, c + 1, count + 1);
    dfs(r + 1, c, count + 1);
    dfs(r + 1, c - 1, count + 1);
    visited[`${r}#${c}`] = false;
  }
  return ans === Infinity ? -1 : ans;
};
