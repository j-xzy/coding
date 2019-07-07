/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 问总共有多少条不同的路径？ 
 * 说明：m 和 n 的值均不超过 100。
 * 
 * 示例 1:
 * 输入: m = 3, n = 2
 * 输出: 3
 * 解释:
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向右 -> 向下
 * 2. 向右 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向右
 * 
 * 示例 2:
 * 输入: m = 7, n = 3
 * 输出: 28
 */

// 思路：动态规划，从下向上计算每个格子的路劲 f(n,m) = f(n-1,m) + f(n, m -1)

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if(m < 1 || n < 1) {
    return 0;
  }
  const matrix = [];
  for (let r = 0; r < n; ++r) {
    const temp = [];
    for (let c = 0; c < m; ++c) {
      const value = r === 0 || c === 0 ? 1 : 0;
      temp.push(value);
    }
    matrix.push(temp);
  }
  for (let r = 1; r < n; ++r) {
    for (let c = 1; c < m; ++c) {
      matrix[r][c] = matrix[r - 1][c] + matrix[r][c - 1];
    }
  }

  return matrix[n - 1][m - 1];
};

// test
console.log(uniquePaths(3, 2) === 3);
console.log(uniquePaths(7, 3) === 28);