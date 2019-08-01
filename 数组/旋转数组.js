/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 
 * 说明:
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 要求使用空间复杂度为 O(1) 的原地算法。
 * 
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出 [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 */

/**
* @param {number[]} nums
* @param {number} k
* @return {void} Do not return anything, modify nums in-place instead.
*/
function rotate(nums, k) {
  if (k % nums.length === 0) {
    return;
  }
  k = k % nums.length;
  reverse(nums, 0, nums.length - k - 1);
  reverse(nums, nums.length - k, nums.length - 1);
  reverse(nums, 0, nums.length - 1);
}

function reverse(nums, l, r) {
  while (r > l) {
    const temp = nums[r];
    nums[r] = nums[l];
    nums[l] = temp;
    ++l;
    --r;
  }
}
rotate([1, 2], 3);
rotate([-1], 2);
rotate([1, 2], 1);
rotate([1, 2, 3, 4, 5, 6, 7], 3);