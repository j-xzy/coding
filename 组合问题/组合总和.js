/**
* 给定一个**无重复**元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
* candidates中的数字可以**无限制重复被**选取。
* 说明：
* 所有数字（包括 target）都是正整数。
* 解集不能包含重复的组合。
* 示例 1:
* 输入: candidates = [2,3,6,7], target = 7,
* 所求解集为:
[
  [7],
  [2,2,3]
]
示例 2:

输入: candidates = [2,3,5], target = 8,
所求解集为:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = [];
  const len = candidates.length;
  combine(target, 0, []);
  return ans;
  
  // idx不走回头路以避免重复
  function combine(t, idx, nums) {
    for (let i = idx; i < len; ++i) {
      const rest = t - candidates[i];
      if (rest === 0) {
        ans.push([...nums, candidates[i]]);
        continue;
      }
      if (rest < 0) {
        continue;
      }
      combine(rest, i, [...nums, candidates[i]]);
    }
  }
};
