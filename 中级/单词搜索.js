/**
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * 
 * 示例:
 * board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true.
给定 word = "SEE", 返回 true.
给定 word = "ABCB", 返回 false.
 */

 // 回溯

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (board.length === 0) {
    return false;
  }
  const rowCount = board.length;
  const colCount = board[0].length;
  const visited = [];
  for (let r = 0; r < rowCount; ++r) {
    visited.push([]);
    for (let c = 0; c < colCount; ++c) {
      visited[r].push(false);
    }
  }

  for (let r = 0; r < rowCount; ++r) {
    for (let c = 0; c < colCount; ++c) {
      if (existCore(r, c, 0)) {
        return true;
      }
    }
  }

  return false;

  function existCore(r, c, idx) {
    const w = word[idx];
    if (typeof w === 'undefined') {
      return true;
    }
    if (r < 0 || r >= rowCount || c < 0 || c >= colCount) {
      return false;
    }
    if (visited[r][c]) {
      return false;
    }
    const value = board[r][c];
    let found = false;
    if (w === value) {
      visited[r][c] = true;
      found = existCore(r, c - 1, idx + 1) || existCore(r - 1, c, idx + 1) || existCore(r, c + 1, idx + 1) || existCore(r + 1, c, idx + 1);
      if (!found) {
        visited[r][c] = false;
      }
    }

    return found;
  }
};

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];

console.log(exist(board, 'ABCCED') === true);
console.log(exist(board, 'SEE') === true);
console.log(exist(board, 'ABCB') === false);