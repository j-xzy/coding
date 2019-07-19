/**
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * 
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

// #region 解法1

// 动态规划，记录每个以第idx结束的最长上升子序列个数

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  const dp = [];
  let max = 1;
  for (let i = 0; i < nums.length; ++i) {
    const v = nums[i];
    dp[i] = 1;
    for (let n = i - 1; n >= 0; --n) {
      const cur = nums[n];
      if (v > cur) {
        dp[i] = Math.max(dp[i], dp[n] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};

// #endregion

// #region 解法2

// 辅助数组tail保持升序
// 当前值大于最大值（tail最后一位）时，push
// 当前值小于最大值时，在tail中替换(这样并不影响结果)
// 替换tail中第一个大于当前值：二分查找

var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0
  const tail = []
  tail.push(nums[0])
  for (let i = 0; i < nums.length; i++) {
    const target = nums[i];
    if (target > tail[tail.length - 1]) {
      tail.push(nums[i])
    } else {
      let l = 0;
      let r = tail.length - 1;
      while (r > l) {
        const mid = l + Math.floor((r - l) / 2);
        if (target > tail[mid]) {
          l = mid + 1;
        } else {
          r = mid;
        }
      }
      tail[l] = target;
    }
  }
  return tail.length;
};

// #endregion
console.log(lengthOfLIS([3, 6, 8, 4, 5, 6]) === 4);
console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]) === 3);
console.log(lengthOfLIS([10, 9, 2, 5, 3, 4]) === 3);
console.log(lengthOfLIS([1, 3, 5, 6, 9, 7, 8]) === 6);