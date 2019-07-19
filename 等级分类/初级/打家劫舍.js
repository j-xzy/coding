/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
 * 
 * 示例 1:
 * 输入: [1,2,3,1]
 * 输出: 4
 * 
 * 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 * 示例 2:
 * 输入: [2,1,1,2]
 * 输出: 4
 */

/**
 *  解法1: 动态规划
 *  记moneys[i]为偷窃到第i个房屋的最大值， moneys[i] = max(moneys[i-2], moneys[i-3])
 */

/**
* @param {number[]} nums
* @return {number}
*/
var rob1 = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return Math.max(nums[0]);
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  const moneys = [nums[0], nums[1], nums[0] + nums[2]];
  let max = Math.max(nums[0] + nums[2], nums[1]);
  for (let i = 3; i < nums.length; ++i) {
    const m = Math.max(nums[i] + moneys[i - 2], nums[i] + moneys[i - 3]);
    moneys[i] = m;
    max = Math.max(m, max);
  }
  return max;
}

/**
 * 解法2: 计算偶数和与奇数和
 * 若当前偶（奇）和小于奇（偶）, 则把大的赋予当前值
 */

/**
* @param {number[]} nums
* @return {number}
*/
var rob2 = function (nums) {
  let even = 0;
  let odd = 0;

  nums.forEach((num, i) => {
    if (i % 2 === 0) {
      even += num;
      even = Math.max(even, odd);
    } else {
      odd += num;
      odd = Math.max(even, odd);
    }
  });

  return Math.max(even, odd);
}
