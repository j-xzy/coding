/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都围成一圈，这意味着第一个房屋和最后一个房屋是紧挨着的。
 * 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
 * 
 * 示例 1:
 * 输入: [2,3,2]
 * 输出: 3
 * 解释: 你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
 * 
 * 示例 2:
 * 输入: [1,2,3,1]
 * 输出: 4
 * 解释: 你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 */

// dp[i] 代表偷第i家能得到的最高金额
// dp[i] = max(dp[i-2],dp[i-3]) + nums[i]

/**
* @param {number[]} nums
* @return {number}
*/
var rob = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  if (nums.length === 3) {
    return Math.max(nums[0], nums[1], nums[2]);
  }
  return Math.max(robCore(nums, 0, nums.length - 2), robCore(nums, 1, nums.length - 1))
};

function robCore(nums, start, end) {
  if (end - start === 2) {
    return Math.max(nums[start + 1], nums[start]+ nums[end]);
  }
  const dp = [nums[start], nums[start + 1], nums[start] + nums[start + 2]];
  let max = dp.reduce((pre, curr) => Math.max(pre, curr), -Infinity);
  for (let i = 3; i < end - start + 1; ++i) {
    dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[start + i];
    max = Math.max(max, dp[i]);
  }
  return max;
}

console.log(rob([1, 2, 3, 1]));