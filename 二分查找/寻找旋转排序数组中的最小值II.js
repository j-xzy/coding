/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * (例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2])。
 * 
 * 请找出其中最小的元素。
 * 注意数组中可能存在重复的元素。
 * 
 * 示例 1：
 * 输入: [1,3,5]
 * 输出: 1
 * 
 * 示例 2：
 * 输入: [2,2,2,0,1]
 * 输出: 0
 * 说明：
 * 这道题是 寻找旋转排序数组中的最小值 的延伸题目。
 * 允许重复会影响算法的时间复杂度吗？会如何影响，为什么？
 */

// #region 解法一 最优
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else if (nums[mid] < nums[end]) {
      end = mid;
    } else if (nums[mid] === nums[end]) {
      // mid 与 end相等的时候end左移一位
      --end;
    }
  }
  return nums[start];
}
// #endregion

// #region 解法二 先去重再二分
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 0) {
    return -1;
  }

  const unique = [];
  const map = {};
  for (let i = 0; i < nums.length; ++i) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = null;
      unique.push(nums[i]);
      continue;
    }
  }

  if (unique.length === 1) {
    return nums[0];
  }

  let start = 0;
  let end = unique.length - 1;

  if (unique[end] > unique[start]) {
    return unique[start];
  }

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    if (unique[mid] > unique[mid + 1]) {
      return unique[mid + 1];
    }
    if (unique[mid - 1] > unique[mid]) {
      return unique[mid];
    }
    if (unique[mid] > unique[0]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};
// #endregion