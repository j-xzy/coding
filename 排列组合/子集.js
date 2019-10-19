/**
给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:

输入: nums = [1,2,3]
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
    return [[]];
  }
  const ans = sub(nums);
  ans.push([]);
  return ans;

  function sub(arr) {
    if (arr.length === 1) {
      return [arr];
    }
    let result = [[arr[0]]];
    const temp = sub(arr.slice(1));
    temp.forEach((n) => {
      result.push([arr[0], ...n]);
    });
    result.push(...temp);
    return result;
  }
};
