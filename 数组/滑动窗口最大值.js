/**
给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。

 

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 
  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 

提示：
你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

进阶：
你能在线性时间复杂度内解决此题吗？
 */

// 双向队列，保持队列头部始终为最大值
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0) {
    return [];
  }
  if (k === 1) {
    return nums;
  }
  const queue = [];
  const ans = [];
  for (let i = 0; i < k; ++i) {
    const n = nums[i];
    while (n > nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
  }
  ans[0] = nums[queue[0]];
  for (let i = k; i < nums.length; ++i) {
    if (queue[0] <= i - k) {
      queue.shift();
    }
    const n = nums[i];
    while (n > nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
    ans.push(nums[queue[0]]);
  }
  return ans;
};

// dp 左右分块
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0) {
    return [];
  }
  if (k === 1) {
    return nums;
  }
  let left = [];
  let right = [];
  const ans = [];
  for (let i = 0, j = nums.length - 1; i < nums.length; ++i, --j) {
    if (i % k === 0) {
      left.push(nums[i])
    } else {
      left.push(Math.max(left[left.length - 1], nums[i]))
    }

    if (i === 0 || (j + 1) % k === 0) {
      right[j] = nums[j];
    } else {
      right[j] = Math.max(right[j + 1], nums[j]);
    }
  }
  for (let i = 0; i < nums.length - k + 1; ++i) {
    ans.push(Math.max(left[i + k - 1], right[i]));
  }
  return ans;
};



maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);