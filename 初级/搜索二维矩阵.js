/**
 * 搜索二维矩阵
 * 编写一个*高效*的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：
 * - *每行的元素从左到右升序排列*
 * - *每列的元素从上到下升序排列*
 * 
 * 示例:
 * 现有矩阵 matrix 如下：
 * [
 *  [1,   4,  7, 11, 15],
 *  [2,   5,  8, 12, 19],
 *  [3,   6,  9, 16, 22],
 *  [10, 13, 14, 17, 24],
 *  [18, 21, 23, 26, 30]
 * ]
 * 给定 target = 5，返回 true。
 * 给定 target = 20，返回 false。
 */

/**
 * 思路:
 * 因为*每行的元素从左到右升序排列*、*每列的元素从上到下升序排列*
 * 所以从矩阵右上角出发，因为右上角的值是当前行最大、当前列最小，特殊
 * target比它大可排除当前行
 * target比它小可排除当前列
 * 每次比价都能排除一行或一列
 */

/**
 * 时间复杂度: 行+列
 * 空间复杂度: 0
 */

/**
* @param {number[][]} matrix
* @param {number} target
* @return {boolean}
*/
function searchMatrix(matrix, target) {
  const rowCount = matrix.length;
  if(!rowCount) {
    return false;
  }
  const colCount = matrix[0].length;
  if(!colCount) {
    return false;
  }
  let row = 0;
  let col = colCount - 1;

  while(!(row > rowCount - 1 || col <0)) {
    const value = matrix[row][col];
    if(value === target) {
      return true;
    }
    if(target < value) {
      --col
    }
    if(target > value) {
       ++row;
    }
  }
  return false;
}

// test
const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];

// 空矩阵情况
console.log(searchMatrix([], 1) === false)

// 一维矩阵情况
console.log(searchMatrix([1,2,3], 1) === false)

console.log(searchMatrix(matrix, 1) === true)
console.log(searchMatrix(matrix, 5) === true)
console.log(searchMatrix(matrix, 20) === false)
console.log(searchMatrix(matrix, 15) === true)
console.log(searchMatrix(matrix, 30) === true)