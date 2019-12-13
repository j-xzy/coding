/**
给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

示例:
输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let matrix = [];
  for (let i = 0; i < n; ++i) {
    matrix.push(Array(n));
  }
  const target = n * n;
  let num = 1;
  let t = 0, r = n - 1, b = n - 1, l = 0;
  while (num <= target) {
    for (let i = l; i <= r; ++i) {
      matrix[t][i] = num++;
    }
    ++t;
    for (let i = t; i <= b; ++i) {
      matrix[i][r] = num++;
    }
    --r;
    for (let i = r; i >= l; --i) {
      matrix[b][i] = num++;
    }
    --b;
    for (let i = b; i >= t; --i) {
      matrix[i][l] = num++;
    }
    ++l;
  }
  return matrix;
};