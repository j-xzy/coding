/**
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个位置。
 * 
 * 示例 1:
 * 输入: [2,3,1,1,4]
 * 输出: true
 * 解释: 从位置 0 到 1 跳 1 步, 然后跳 3 步到达最后一个位置。
 * 
 * 示例 2:
 * 输入: [3,2,1,0,4]
 * 输出: false
 * 解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
 */

// 思路：动态规划，从1开始计算边界

// f(4) = f(3) + 1
// f(4) = f(1) + 3
// f(3) = f(2) + 1  f(1) + 2

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length < 2) {
    return true;
  }
  let region = 0;

  for (let i = 0; i < nums.length - 1; ++i) {
    if (i > region) {
      return false;
    }
    const step = nums[i];
    if (step >= nums.length - i) {
      return true;
    }
    region = Math.max(region, i + step);
  }
  return region >= nums.length - 1;
};

// test
console.log(canJump([0, 2, 3]) === false);
console.log(canJump([2, 3, 1, 1, 4]) === true);
console.log(canJump([3, 2, 1, 0, 4]) === false);
