/**
有 n 个气球，编号为0 到 n-1，每个气球上都标有一个数字，这些数字存在数组 nums 中。

现在要求你戳破所有的气球。每当你戳破一个气球 i 时，你可以获得 nums[left] * nums[i] * nums[right] 个硬币。 这里的 left 和 right 代表和 i 相邻的两个气球的序号。注意当你戳破了气球 i 后，气球 left 和气球 right 就变成了相邻的气球。

求所能获得硬币的最大数量。

说明:

你可以假设 nums[-1] = nums[n] = 1，但注意它们不是真实存在的所以并不能被戳破。
0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
示例:

输入: [3,1,5,8]
输出: 167 
解释: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
     coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  const N = nums.length;
  nums.push(1);
  nums.unshift(1);
  const len = nums.length;
  const d = [...Array(len)].map(() => Array(len).fill(0));
  for (let c = 1; c <= N; ++c) {
    for (let i = 1; i + c - 1 <= N; ++i) {
      const j = i + c - 1;
      for (let k = i; k <= j; ++k) {
        d[i][j] = Math.max(d[i][j], nums[i - 1] * nums[k] * nums[j + 1] + d[i][k - 1] + d[k + 1][j]);
      }
    }
  }
  return d[1][N];
};
