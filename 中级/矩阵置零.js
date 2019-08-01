/**
 * 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。
 *
输入: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]

进阶:
一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
你能想出一个常数空间的解决方案吗？
 */


/**
 * 时间复杂度:O(M×N)
 * 空间复杂度：O(1)
* @param {number[][]} matrix
* @return {void} Do not return anything, modify matrix in-place instead.
*/
var setZeroes = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;

  let isRowZero = false;
  let isColZero = false;

  // 标记第1行是否为0
  for (let c = 0; c < col; ++c) {
    if (matrix[0][c] === 0) {
      isRowZero = true;
    }
  }

  // 标记第1列是否为0
  for (let r = 0; r < row; ++r) {
    if (matrix[r][0] === 0) {
      isColZero = true;
    }
  }

  for (let r = 1; r < row; ++r) {
    for (let c = 1; c < col; ++c) {
      if (matrix[r][c] === 0) {
        // 标记列头和行头为0
        matrix[r][0] = 0;
        matrix[0][c] = 0;
      }
    }
  }

  for (let r = 1; r < row; ++r) {
    for (let c = 1; c < col; ++c) {
      // 如果标记列头或行头为0,则此数为0
      if (matrix[r][0] === 0 || matrix[0][c] === 0) {
        matrix[r][c] = 0;
      }
    }
  }

  if (isRowZero) {
    for (let c = 0; c < col; ++c) {
      matrix[0][c] = 0
    }
  }

  if (isColZero) {
    for (let r = 0; r < row; ++r) {
      matrix[r][0] = 0
    }
  }
};

setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]]
)