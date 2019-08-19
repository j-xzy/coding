/**
 * 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下所示。
 * 示例:
 * 输入:
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 * 输出:  [1,2,4,7,5,3,6,8,9]
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  if (matrix.length === 0) {
    return [];
  }
  const ans = [];
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  const totalLevel = rowCount + colCount - 1;
  for (let level = 0; level < totalLevel; ++level) {
    let r = -1;
    let c = -1;
    if (level < colCount) {
      r = 0;
      c = level;
    } else {
      r = level - colCount + 1;
      c = colCount - 1;
    }
    const temp = [];
    while (c >= 0 && r < rowCount) {
      temp.push(matrix[r][c]);
      --c;
      ++r;
    }
    if (level % 2 === 0) {
      temp.reverse();
    }
    ans.push(...temp);
  }
  return ans;
};
