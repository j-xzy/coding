/**
 * 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * 
 * 说明:
 * 一个有效的数独（部分已被填充）不一定是可解的。
 * 只需要根据以上规则，验证已经填入的数字是否有效即可。
 * 给定数独序列只包含数字 1-9 和字符 '.' 。
 * 给定数独永远是 9x9 形式的。
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = {};
  const cols = {};
  const grids = {};
  for (let r = 0; r < 9; ++r) {
    rows[r] = {};
    for (let c = 0; c < 9; ++c) {
      if (r === 0) {
        cols[c] = {};
      }
      const value = board[r][c];
      if (value === '.') {
        continue;
      }
      if (rows[r][value] !== undefined) {
        return false;
      } else {
        rows[r][value] = null;
      }

      if (cols[c][value] !== undefined) {
        return false;
      } else {
        cols[c][value] = null;
      }
      const g = Math.floor(r / 3) * 3 + Math.floor(c / 3) + 1;
      if (grids[g] === undefined) {
        grids[g] = {};
      }
      if(grids[g][value] !== undefined){
        return false;
      }else {
        grids[g][value] = null;
      }
    }
  }

  return true;
};