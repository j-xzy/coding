/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 
 * 说明:
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 要求使用空间复杂度为 O(1) 的原地算法。
 * 
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 */

/**
 * 思路1
 * 循环移动 
 * 时间复杂度O(k*n)
 * 空间复杂度O(1)
 */

/**
* @param {number[]} nums
* @param {number} k
* @return {void} Do not return anything, modify nums in-place instead.
*/
function rotate1(nums, k) {
  let step = k % nums.length;
  while (step > 0) {
    let temp = nums[nums.length - 1];
    for (let i = nums.length - 1; i > 0; --i) {
      nums[i] = nums[i - 1];
    }
    nums[0] = temp;
    --step
  }
}

/**
 * 思路2
 * 交换位置
 * 时间复杂度O(k*n)
 * 空间复杂度O(1)
 */

/**
* @param {number[]} nums
* @param {number} k
* @return {void} Do not return anything, modify nums in-place instead.
*/
function rotate2(nums, k) {
  let step = k % nums.length;
  while (step > 0) {
    for (let i = nums.length - 1; i > 0; --i) {
      const temp = nums[i];
      nums[i] = nums[i - 1];
      nums[i - 1] = temp;
    }
    --step;
  }
}

/**
 * 思路3
 * 三次旋转
 * 
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 */
function rotate3(nums, k) {
  let step = k % nums.length;
  if (step > 0) {
    reverse(nums, 0, nums.length - step - 1);
    reverse(nums, nums.length - step, nums.length - 1);
    reverse(nums, 0, nums.length - 1);
  }
}

function reverse(nums, start, end) {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    ++start;
    --end;
  }
}

rotate3([1, 2], 1);
rotate3([1, 2, 3, 4, 5, 6, 7], 3);