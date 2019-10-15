/**
给定一个未排序的整数数组，找出其中没有出现的最小的正整数。

示例 1:

输入: [1,2,0]
输出: 3
示例 2:

输入: [3,4,-1,1]
输出: 2
示例 3:

输入: [7,8,9,11,12]
输出: 1
说明:

你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length;
  let hasOne = false;
  for (let i = 0; i < n; ++i) {
    if (nums[i] === 1) {
      hasOne = true;
    }
  }
  if(!hasOne) {
    return 1;
  }
  for (let i = 0; i < n; ++i) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = 1;
    }
  }
  for (let i = 0; i < n; ++i) {
    const a = Math.abs(nums[i]);
    if (a === n) {
      nums[0] = -Math.abs(nums[0]);
    } else {
      nums[a] = -Math.abs(nums[a]);
    }
  }
  for (let i = 1; i < n; ++i) {
    if (nums[i] > 0) {
      return i;
    }
  }
  if (nums[0] > 0) {
    return n;
  }
  return n + 1;
};

firstMissingPositive([5, 0, 2])

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length;
  const map = {};
  nums.forEach((num) => {
    if (num <= n && num >= 1) {
      map[num] = true;
    }
  });
  for (let i = 1; i <= n; ++i) {
    if (map[i] === undefined) {
      return i;
    }
  }
  return n + 1;
};

firstMissingPositive([1, 2, 4]);
