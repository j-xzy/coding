/**
 * 给定一个未排序的整数数组，找到最长递增子序列的个数。
 * 
 * 示例 1:
 * 输入: [1,3,5,4,7]
 * 输出: 2
 * 解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
 * 
 * 示例 2:
 * 输入: [2,2,2,2,2]
 * 输出: 5
 * 解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
 * 
 * 注意: 给定的数组长度不超过 2000 并且结果一定是32位有符号整数。
 */

// lens[i] 以i为末尾的 最长递增子序列 的长度
// lens[i] = (0<=n<i)max(nums[i] > nums[n] ? lens[n] + 1 : 1)
// counts[i] 以i为末尾的 最长递增子序列 长度的数量

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  if (nums.length < 2) {
    return nums.length;
  }
  const lens = [];
  const counts = [];
  let max = -Infinity;

  for (let i = 0; i < nums.length; ++i) {
    lens[i] = 1;
    counts[i] = 1;
    for (let n = 0; n < i; ++n) {
      if (nums[i] > nums[n]) {
        if (lens[n] + 1 > lens[i]) {
          lens[i] = lens[n] + 1;
          // 在n第一次遇见最长
          counts[i] = counts[n];
        } else if (lens[n] + 1 === lens[i]) {
          // 后几次遇见最长
          counts[i] += counts[n];
        }
      }
    }
    max = Math.max(max, lens[i]);
  }

  let count = 0;
  lens.forEach((c, idx) => {
    if (c === max) {
      count += counts[idx];
    }
  });
  return count;
};

findNumberOfLIS([1, 2, 4, 3, 5, 4, 7, 2]);