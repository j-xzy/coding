/**
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 * 
 * 示例:
 * 输入: nums = [1,2,3]
输出:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 */

/**
* @param {number[]} nums
* @return {number[][]}
*/
var subsets = function (nums) {
  if (nums.length === 0) {
    return [];
  }
  if (nums.length === 1) {
    return [nums, []];
  }
  const result = [];
  for (let i = 0; i < nums.length; ++i) {
    subsetsCore(nums[i]);
  }

  result.push([]);
  return result;

  function subsetsCore(num) {
    const count = result.length;
    for (let i = 0; i < count; ++i) {
      result.push([...result[i], num]);
    }
    result.push([num]);
  }
};

subsets = function (nums) {
  const size = nums.length;
  const list = [];
  for (let i = 0; i < (1 << size); ++i) {
    const ax = [];
    for (let j = 0; j < size; j++) {
      if ((i & (1 << j)) != 0) {
        ax.push(nums[j]);
      }
    }
    list.push(ax);
  }

  return list;
}

subsets([1, 2]);