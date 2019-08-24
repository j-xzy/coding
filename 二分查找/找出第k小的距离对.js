/**
 * 给定一个整数数组，返回所有数对之间的第 k 个最小距离。一对 (A, B) 的距离被定义为 A 和 B 之间的绝对差值。
 * 
 * 示例 1:
 * 输入：
 * nums = [1,3,1]
 * k = 1
 * 输出：0 
 * 解释：
 * 所有数对如下：
 * (1,3) -> 2
 * (1,1) -> 0
 * (3,1) -> 2
 * 因此第 1 个最小距离的数对是 (1,1)，它们之间的距离为 0。
 * 
 * 提示:
 * 2 <= len(nums) <= 10000.
 * 0 <= nums[i] < 1000000.
 * 1 <= k <= len(nums) * (len(nums) - 1) / 2.
 */

// #region 解法1：二分+双指针

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  // 排序
  nums.sort((a, b) => a - b);
  let lo = 0;
  let hi = nums[nums.length - 1] - nums[0];
  while (lo < hi) {
    const mi = Math.floor((hi + lo) / 2);
    let count = 0;
    let left = 0;
    for (let right = 0; right < nums.length; ++right) {
      while (nums[right] - nums[left] > mi) {
        ++left;
      }
      count += right - left;
    }
    if (count >= k) {
      hi = mi;
    } else {
      lo = mi + 1;
    }
  }
  return lo;
}

// #region 解法2：二分法+前缀

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  // 排序
  nums.sort((a, b) => a - b);

  // multiplicity 保存相邻的元素的个数
  const multiplicity = [0];
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] === nums[i - 1]) {
      multiplicity[i] = 1 + multiplicity[i - 1];
    } else {
      multiplicity[i] = 0;
    }
  }

  // prefix[i] nums中小于元素i的个数
  const width = 2 * nums[nums.length - 1];
  const prefix = [];
  let left = 0;
  for (let i = 0; i < width; ++i) {
    while (left < nums.length && nums[left] <= i) {
      ++left;
    }
    prefix[i] = left;
  }

  // 第k小的距离对一定在 [0， max - min]中
  let lo = 0;
  let hi = nums[nums.length - 1] - nums[0];
  while (lo < hi) {
    const mi = Math.floor((lo + hi) / 2);
    let count = 0;
    for (let i = 0; i < nums.length; ++i) {
      count = count + prefix[nums[i] + mi] - prefix[nums[i]] + multiplicity[i];
    }
    if (count >= k) {
      hi = mi;
    } else {
      lo = mi + 1;
    }
  }
  return lo;
};

// #endregion
