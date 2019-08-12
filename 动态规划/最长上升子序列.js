/**
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * 示例:
 * 输入: [10,9,2,5,3,7,101,18]
 * 输出: 4 
 * 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
 * 
 * 说明:
 * 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
 * 你算法的时间复杂度应该为 O(n2) 。
 * 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length < 2) {
    return nums.length;
  }
  const dp = [];
  let max = -Infinity;
  for (let i = 0; i < nums.length; ++i) {
    dp[i] = 1;
    for (let n = 0; n < i; ++n) {
      if (nums[i] > nums[n]) {
        dp[i] = Math.max(dp[i], dp[n] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};

lengthOfLIS([4, 10, 4, 3, 8, 9]);
