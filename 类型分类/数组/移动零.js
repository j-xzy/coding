/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 示例:
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 说明:
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;
  let right = 0;
  while (right <= nums.length - 1) {
    if (nums[right] === 0 && nums[left] !== 0) {
      left = right;
    }
    if (nums[right] !== 0 && nums[left] === 0) {
      nums[left] = nums[right];
      nums[right] = 0;
      ++left;
    }
    ++right;
  }
};