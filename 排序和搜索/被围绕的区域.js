/**
给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。

找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

示例:

X X X X
X O O X
X X O X
X O X X
运行你的函数后，矩阵变为：

X X X X
X X X X
X X X X
X O X X
解释:

被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 */

// bfs

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const rowCount = board.length;
  if (rowCount === 0) {
    return;
  }
  const colCount = board[0].length;
  const visited = [...Array(rowCount)].map(() => Array(colCount).fill(false));
  const directions = [[0, -1], [-1, 0], [0, 1], [1, 0]];
  for (let r = 1; r < rowCount - 1; ++r) {
    for (let c = 1; c < colCount - 1; ++c) {
      if (board[r][c] === 'X') {
        continue;
      }
      if (visited[r][c]) {
        continue;
      }
      visited[r][c] = true;
      let zero = false;
      const path = [[r, c]];
      const queue = [[r, c]];
      while (queue.length > 0) {
        let size = queue.length;
        while (size-- > 0) {
          const pos = queue.shift();
          for (let i = 0; i < directions.length; ++i) {
            const d = directions[i];
            const r1 = pos[0] + d[0];
            const c1 = pos[1] + d[1];
            if (r1 < 0 || c1 < 0 || r1 >= rowCount || c1 >= colCount) {
              continue;
            }
            if (visited[r1][c1]) {
              continue;
            }
            visited[r1][c1] = true;
            if (board[r1][c1] === 'O') {
              if (r1 === 0 || c1 === 0 || r1 === rowCount - 1 || c1 === colCount - 1) {
                zero = true;
              } else {
                queue.push([r1, c1]);
                path.push([r1, c1]);
              }
            }

          }
        }
      }
      if (!zero) {
        path.forEach((pos) => {
          board[pos[0]][pos[1]] = 'X';
        });
      }
    }
  }
};
