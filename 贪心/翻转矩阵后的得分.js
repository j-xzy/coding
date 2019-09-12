/**
 * 有一个二维矩阵 A 其中每个元素的值为 0 或 1 。
 * 移动是指选择任一行或列，并转换该行或列中的每一个值：将所有 0 都更改为 1，将所有 1 都更改为 0。
 * 在做出任意次数的移动后，将该矩阵的每一行都按照二进制数来解释，矩阵的得分就是这些数字的总和。
 * 返回尽可能高的分数。
 * 
 * 示例：
 * 输入：[[0,0,1,1],[1,0,1,0],[1,1,0,0]]
 * 输出：39
 * 解释：
 * 转换为 [[1,1,1,1],[1,0,0,1],[1,1,1,1]]
 * 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
 * 
 * 提示：
 * 1 <= A.length <= 20
 * 1 <= A[0].length <= 20
 * A[i][j] 是 0 或 1
 */

// A[r][0] === 0 ？ 当前列反转 ： 不变
// 计算当前列有多少个1，那么反转后1的个数为总行数减去当前多少个1

/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (A) {
  const rowCount = A.length;
  const colCount = A[0].length;
  let ans = 0;
  for (let c = 1; c < colCount; ++c) {
    let col = 0;
    for (let r = 0; r < rowCount; ++r) {
      if (A[r][0] === 0) {
        A[r][c] = A[r][c] ^ 1;
      }
      col += A[r][c];
    }
    ans += Math.max(col, rowCount - col) * Math.pow(2, colCount - 1 - c);
  }
  return ans + rowCount * Math.pow(2, colCount - 1);
};

matrixScore([
  [0, 0, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 0]
]);
