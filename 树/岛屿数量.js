/**
 * 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。
 * 
 * 示例 1:
 * 输入:
 * 11110
 * 11010
 * 11000
 * 00000
 * 输出: 1
 * 
 * 示例 2:
 * 输入:
 * 11000
 * 11000
 * 00100
 * 00011
 * 输出: 3
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if(grid.length === 0) {
    return 0;
  }
  const visited = [];
  grid.forEach((r) => {
    visited.push([]);
    r.forEach(() => {
      visited[visited.length - 1].push(false);
    })
  });
  let count = 0;
  const rowCount = grid.length;
  const colCount = grid[0].length;
  for (let r = 0; r < rowCount; ++r) {
    for (let c = 0; c < colCount; ++c) {
      if (visited[r][c]) {
        continue;
      }
      if (grid[r][c] === '0') {
        continue;
      }
      ++count;
      traverse(r, c);
    }
  }

  function traverse(r, c) {
    if (visited[r][c]) {
      return;
    }
    visited[r][c] = true;
    if (grid[r][c] === '0') {
      return;
    }
    c - 1 >= 0 && traverse(r, c - 1);
    r - 1 >= 0 && traverse(r - 1, c);
    c + 1 < colCount && traverse(r, c + 1);
    r + 1 < rowCount && traverse(r + 1, c);
  }

  return count;
};

numIslands(
  [
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,0],
    [0,0,0,1,1]
  ]
)