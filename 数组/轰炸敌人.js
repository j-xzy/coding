/**
想象一下炸弹人游戏，在你面前有一个二维的网格来表示地图，网格中的格子分别被以下三种符号占据：

'W' 表示一堵墙
'E' 表示一个敌人
'0'（数字 0）表示一个空位


请你计算一个炸弹最多能炸多少敌人。

由于炸弹的威力不足以穿透墙体，炸弹只能炸到同一行和同一列没被墙体挡住的敌人。

注意：你只能把炸弹放在一个空的格子里

示例:

输入: [["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]
输出: 3 
解释: 对于如下网格

0 E 0 0 
E 0 W E 
0 E 0 0

假如在位置 (1,1) 放置炸弹的话，可以炸到 3 个敌人
 */


// 暴力
/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function (grid) {
  const rowCount = grid.length;
  if (rowCount === 0) {
    return 0;
  }
  let ans = 0;
  const colCount = grid[0].length;
  for (let r = 0; r < rowCount; ++r) {
    for (let c = 0; c < colCount; ++c) {
      if (grid[r][c] !== '0') {
        continue;
      }
      let count = 0;
      let i = 1;
      while (c - i >= 0 && grid[r][c - i] !== 'W') {
        if (grid[r][c - i] === 'E') {
          ++count;
        }
        ++i;
      }

      i = 1;
      while (r - i >= 0 && grid[r - i][c] !== 'W') {
        if (grid[r - i][c] === 'E') {
          ++count;
        }
        ++i;
      }

      i = 1;
      while (c + i < colCount && grid[r][c + i] !== 'W') {
        if (grid[r][c + i] === 'E') {
          ++count;
        }
        ++i;
      }

      i = 1;
      while (r + i < rowCount && grid[r + i][c] !== 'W') {
        if (grid[r + i][c] === 'E') {
          ++count;
        }
        ++i;
      }

      ans = Math.max(ans, count);
    }
  }
  return ans;
};
