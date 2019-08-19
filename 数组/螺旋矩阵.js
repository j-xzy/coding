/**
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 * 
 * 示例 1:
 * 输入:
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 * 
 * 示例 2:
 * 输入:
 * [
 *  [1, 2, 3, 4],
 *  [5, 6, 7, 8],
 *  [9,10,11,12]
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) {
    return [];
  }
  const ans = [];
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  let min = [0, 0];
  let max = [rowCount - 1, colCount - 1];

  while (max[0] >= min[0] && max[1] >= min[1]) {
    for (let c = min[1]; c <= max[1]; ++c) {
      ans.push(matrix[min[0]][c]);
    }

    for (let r = min[0] + 1; r < max[0]; ++r) {
      ans.push(matrix[r][max[1]]);
    }

    if(max[0] !== min[0]) {
      for (let c = max[1]; c >= min[1]; --c) {
       ans.push(matrix[max[0]][c]);
      }
    }

    if(min[1] !== max[1]) {
      for (let r = max[0] - 1; r > min[0]; --r) {
        ans.push(matrix[r][min[1]]);
      }
    }

    min = [min[0] + 1, min[1] + 1];
    max = [max[0] - 1, max[1] - 1];
  }

  return ans;
};
