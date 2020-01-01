/**
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let ans = Infinity;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; ++i) {
    const fix = nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = fix + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(ans - target)) {
        ans = sum;
      }
      if (sum > target) {
        --right;
      } else if (sum < target) {
        ++left;
      } else {
        return ans;
      }
    }
  }
  return ans;
};
