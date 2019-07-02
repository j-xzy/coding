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

// 思路：遍历图，查找有几个连通区

/**
* @param {character[][]} grid
* @return {number}
*/
var numIslands = function (grid) {
  if (grid.length === 0) {
    return 0;
  }
  const rowCount = grid.length;
  const colCount = grid[0].length;
  let count = 0;
  for (let row = 0; row < rowCount; ++row) {
    for (let col = 0; col < colCount; ++col) {
      if (grid[row][col] === '1') {
        ++count;
        dbf(grid, row, col);
      }
    }
  }
  return count;
};

function dbf(grid, row, col) {
  const rowCount = grid.length;
  const colCount = grid[0].length;
  if (row >= 0 && row < rowCount && col >= 0 && col < colCount && grid[row][col] === '1') {
    grid[row][col] = '0';
    dbf(grid, row, col - 1);
    dbf(grid, row - 1, col);
    dbf(grid, row, col + 1);
    dbf(grid, row + 1, col);
  }
}

console.log(numIslands(
  [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ]) === 3);

console.log(numIslands(
  [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
  ]) === 1);