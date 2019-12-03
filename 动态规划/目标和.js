/**
给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

示例 1:

输入: nums: [1, 1, 1, 1, 1], S: 3
输出: 5
解释: 

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。
注意:

数组非空，且长度不会超过20。
初始的数组的和不会超过1000。
保证返回的最终结果能被32位整数存下。
 */


// dp
// dp[i][j] 代表前i个数，组成和位j个个数
// dp[i][j] = dp[i-1][j - nums[i]] + dp[i-1][j+nums[i]]
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  const dp = [];
  for (let i = 0; i < nums.length; ++i) {
    dp.push(Array(2000).fill(0));
  }
  dp[0][nums[0] + 1000] = 1;
  dp[0][-nums[0] + 1000] += 1;

  for (let i = 1; i < nums.length; ++i) {
    for (let sum = -1000; sum <= 1000; ++sum) {
      dp[i][sum + 1000] = (dp[i - 1][sum + 1000 - nums[i]] || 0) + (dp[i - 1][sum + 1000 + nums[i]] || 0);
    }
  }
  return S > 1000 ? 0 : dp[nums.length - 1][1000 + S];
};
