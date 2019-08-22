/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * (例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2])。
 * 请找出其中最小的元素。
 * 你可以假设数组中不存在重复元素。
 * 
 * 示例 1:
 * 输入: [3,4,5,1,2]
 * 输出: 1
 * 
 * 示例 2:
 * 输入: [4,5,6,7,0,1,2]
 * 输出: 0
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 0) {
    return -1;
  }
  if (nums.length === 1) {
    return nums[0];
  }

  let start = 0;
  let end = nums.length - 1;

  if (nums[end] > nums[start]) {
    return nums[start];
  }

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }
    if (nums[mid] > nums[0]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

console.log(findMin([1, 2]));