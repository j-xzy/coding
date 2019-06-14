/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */

// #region 暴力法(O(n*3))
/**
* @param {number[]} nums
* @return {number}
*/
function maxSubArray1(nums) {
  if (nums.length === 0) {
    return null;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  let result = -Infinity;
  for (let start = 0; start < nums.length; ++start) {
    for (let end = start; end < nums.length; ++end) {
      result = Math.max(result, max(nums, start, end));
    }
  }
  return result;
}

function max1(nums, start, end) {
  let sum = 0;
  for (let i = start; i <= end; ++i) {
    sum += nums[i];
  }
  return sum;
}
// #endregion

// #region 改进暴力法(O(n*2))
/**
* @param {number[]} nums
* @return {number}
*/
function maxSubArray2(nums) {
  if (nums.length === 0) {
    return null;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  let max = -Infinity;
  for (let start = 0; start < nums.length; ++start) {
    let sum = 0;
    for (let end = start; end < nums.length; ++end) {
      sum += nums[end];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}
// #endregion

// #region 动态规划 (O(n))
// s[i]代表以第i位结尾的最大子序列和，s[i] = max(num[i], s[i-1])
function maxSubArray3(nums) {
  if (nums.length === 0) {
    return null;
  }
  let last = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    if (last < 0) {
      last = nums[i];
    } else {
      last = nums[i] + last;
    }
    max = Math.max(max, last);
  }
  return max;
}
// #endregion

// test
console.log(maxSubArray3([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
console.log(maxSubArray3([-2, 1]) === 1);
console.log(maxSubArray3([-2]) === -2);
