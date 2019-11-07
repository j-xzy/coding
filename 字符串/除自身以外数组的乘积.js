/**
给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

示例:

输入: [1,2,3,4]
输出: [24,12,8,6]
说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

进阶：
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
 */

var productExceptSelf = function (nums) {
  let res = [];
  let prod = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prod;
    prod *= nums[i];
  }

  prod = 1;
  for (let i = nums.length - 1; i > -1; i--) {
    res[i] *= prod;
    prod *= nums[i];
  }

  return res;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const left = [nums[0]];
  const right = [];
  right[nums.length - 1] = nums[nums.length - 1]
  for (let i = 1; i < nums.length; ++i) {
    left.push(left[left.length - 1] * nums[i]);
  }
  for (let i = nums.length - 2; i >= 0; --i) {
    right[i] = right[i + 1] * nums[i];
  }
  return nums.map((n, idx) => {
    if (idx === 0) {
      return right[1];
    }
    if (idx === nums.length - 1) {
      return left[left.length - 2];
    }
    return left[idx - 1] * right[idx + 1];
  });
};