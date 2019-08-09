/**
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 如果数组中不存在目标值，返回 [-1, -1]。
 * 
 * 示例 1:
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 * 
 * 示例 2:
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length === 0) {
    return [-1, -1];
  }

  const left = searchRangeCore(true);
  if (nums[left] !== target) {
    return [-1, -1];
  }

  const right = searchRangeCore(false) - 1;
  return [left, right];

  function searchRangeCore(left) {
    let start = 0;
    let end = nums.length;
    while (start < end) {
      const mid = start + Math.floor((end - start) / 2);
      if (nums[mid] > target) {
        end = mid;
        continue;
      }
      if (nums[mid] < target) {
        start = mid + 1;
        continue;
      }
      if (left) {
        end = mid
      } else {
        start = mid + 1;
      }
    }
    return start;
  }
};

searchRange([1],1);