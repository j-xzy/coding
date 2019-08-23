/**
 * 给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。
 * 
 * 示例 1:
 * 输入: [1,3,4,2,2]
 * 输出: 2
 * 
 * 示例 2:
 * 输入: [3,1,3,4,2]
 * 输出: 3
 * 
 * 说明：
 * 不能更改原数组（假设数组是只读的）。
 * 只能使用额外的 O(1) 的空间。
 * 时间复杂度小于 O(n2) 。
 * 数组中只有一个重复的数字，但它可能不止重复出现一次。
 */

// #region 解法一 二分法

// [1,2,3,4,5,6,7,7] 
// 8个数的范围为1-7，所以必然存在重复
// 二分法中位数4（注意：不是数组范围的中间而是数字的中位数）， 统计整个数组 小于4的个数，如果大于4，重复必然在1-4之间。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let left = 1;
  let right = nums.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    let count = 0;
    nums.forEach((n) => {
      if (n <= mid) {
        ++count;
      }
    });
    if (count > mid) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
