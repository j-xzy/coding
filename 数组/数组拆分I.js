/**
 * 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。
 * 示例 1:
 * 输入: [1,4,3,2]
 * 输出: 4
 * 解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
 * 
 * 提示:
 * n 是正整数,范围在 [1, 10000].
 * 数组中的元素范围在 [-10000, 10000].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  if (nums.length % 2 !== 0) {
    throw Error('个数不为偶数');
  }
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < nums.length; i = i + 2) {
    ans += nums[i];
  }
  return ans;
};
