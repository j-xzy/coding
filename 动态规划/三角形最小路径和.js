/**
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * 例如，给定三角形：
 [
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

说明：
如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
 */

// f(r,c) = num[r,c] + min(f(r-1,c-1),f(r-1,c))
// f(0,0) = num[0,0]
// f(1,0) = num[1,0] + num[0,0]
// f(1,1) = num[1,1] + num[0,0]
// f(2,0) = num[2,0] + f(1,1)
// f(2,1) = num[2,1] + min(f(1,0),f(1,1))

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  if (triangle.length === 0) {
    return 0;
  }
  const dp = [[triangle[0][0]]];
  for (let r = 1; r < triangle.length; ++r) {
    dp.push([]);
    for (let c = 0; c <= r; ++c) {
      if (c === 0) {
        dp[r][c] = triangle[r][c] + dp[r - 1][c];
        continue;
      }
      if (c === r) {
        dp[r][c] = triangle[r][c] + dp[r - 1][c - 1];
        continue;
      }
      dp[r][c] =  triangle[r][c] + Math.min(dp[r - 1][c - 1], dp[r - 1][c]);
    }
  }
  let min = Infinity;
  dp[dp.length - 1].forEach((n) => {
    min = Math.min(min, n);
  });
  return min;
};

minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]);