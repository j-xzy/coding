/**
给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

注意:
每个数组中的元素不会超过 100
数组的大小不会超过 200

示例 1:
输入: [1, 5, 11, 5]
输出: true
解释: 数组可以分割成 [1, 5, 5] 和 [11].
 
示例 2:
输入: [1, 2, 3, 5]
输出: false
解释: 数组不能分割成两个元素和相等的子集.
 */

// dp[i][j] [0-j]中是否存在一些元素相加等于j
// dp[i][j] = dp[i-1][j] (不选择nums[i]) || dp[i-1][j-nums[i]]
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) {
    return false;
  }
  const middle = sum / 2;
  const dp = [];
  for (let r = 0; r < nums.length; ++r) {
    dp.push([true]);
  }

  for (let r = 0; r < nums.length; ++r) {
    for (let c = 1; c<= middle; ++c) {
      if (r === 0) {
        dp[r][c] = nums[0] === c;
      } else {
        dp[r][c] = dp[r - 1][c] ? dp[r - 1][c] : dp[r - 1][c - nums[r]];
      }
      if(c===middle && dp[r][c]) {
        return true;
      }
    }
  }

  return dp[nums.length - 1][middle] ? true: false;
};

canPartition([1, 5, 11, 5]);

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) {
    return false;
  }
  const middle = sum / 2;
  let flag = false;
  dfs(middle, 0);
  return flag;

  function dfs(rest, idx) {
    if (rest === 0) {
      flag = true;
      return;
    }
    if (flag) {
      return;
    }
    for (let i = idx; i < nums.length; ++i) {
      dfs(rest - nums[i], i + 1);
    }
  }
};
