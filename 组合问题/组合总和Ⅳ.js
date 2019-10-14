/**
 * 给定一个由正整数组成且不存在重复数字的数组，找出和为给定目标正整数的组合的个数。
 * 
 * 示例:
 * nums = [1, 2, 3]
 * target = 4
 * 所有可能的组合为：
 * (1, 1, 1, 1)
 * (1, 1, 2)
 * (1, 2, 1)
 * (1, 3)
 * (2, 1, 1)
 * (2, 2)
 * (3, 1)
 * 请注意，顺序不同的序列被视作不同的组合。
 * 因此输出为 7。
 */

const memo = {};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  if (target < 1) {
    return 0;
  }
  if (nums.length === 0) {
    return 0;
  }
  if (memo[target] !== undefined) {
    return memo[target];
  }
  let count = 0;
  for (let i = 0; i < nums.length; ++i) {
    const rest = target - nums[i];
    if (rest === 0) {
      count += 1;
    } else {
      count += combinationSum4(nums, rest);
    }
  }
  memo[target] = count;
  return count;
};
