/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 满足要求的三元组集合为：
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */
[-3, -1, 0, 3, 4]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  nums.sort((a, b) => a - b);
  if (nums[0] > 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < nums.length - 2; ++i) {
    const value = nums[i];
    if (value === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (right > left) {
      let rest = value + nums[left] + nums[right];
      if (rest === 0) {
        if (left - 1 === i) {
          result.push([value, nums[left], nums[right]]);
        } else if (nums[left] !== nums[left - 1]) {
          result.push([value, nums[left], nums[right]]);
        }
        ++left;
        --right;
        continue;
      }
      if (rest > 0) {
        --right;
      } else {
        ++left;
      }
    }
  }

  return result;
};

threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]);