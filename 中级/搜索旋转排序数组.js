/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * (例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * 
 * 你可以假设数组中不存在重复的元素。
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 *  示例 1:
 * 输入: nums = [4,5,6,7,0,1,2], target = 0
 * 输出: 4
 * 
 * 示例 2:
 * 输入: nums = [4,5,6,7,0,1,2], target = 3
 * 输出: -1
 */

// 思路：先二分查找找到broken，然后再二分查找target

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  if (nums[r] < nums[l]) {
    while (r > l) {
      const mid = l + Math.floor((r - l) / 2);
      const value = nums[mid];
      if (value >= nums[l] && value > nums[r]) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    if (target >= nums[0]) {
      r = l;
      l = 0;
    } else {
      r = nums.length - 1;
    }
  }

  while (r > l) {
    const mid = l + Math.floor((r - l) / 2);
    const value = nums[mid];
    if (value >= target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  if (nums[l] === target) {
    return l;
  } else {
    return -1;
  }
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 12) === -1);
console.log(search([], 1) === -1);
console.log(search([4, 5, 6, 7, 0, 1, 2], 2) === 6);
console.log(search([4, 5, 6, 7, 0, 1, 2], 0) === 4);
console.log(search([4, 5, 6, 7, 0, 1, 2], 4) === 0);
console.log(search([4, 5, 6, 7, 0, 1, 2], 7) === 3);
console.log(search([4, 5, 6, 7, 0, 1, 2], 5) === 1);
console.log(search([3, 1], 3) === 0);
console.log(search([3, 1], 1) === 1);
console.log(search([1, 2, 3], 2) === 1);
console.log(search([1, 2], 2) === 1);
console.log(search([1, 2], 1) === 0);
// [0,1,2,4,5,6,7]
// [4,5,6,7,0,1,2]
// [5,6,7,0,1,2,4]