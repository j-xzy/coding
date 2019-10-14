/**
找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

说明：

所有数字都是正整数。
解集不能包含重复的组合。
示例 1:

输入: k = 3, n = 7
输出: [[1,2,4]]
示例 2:

输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  if (n === 0 || n > 45) {
    return [];
  }
  const ans = [];
  combine(n, 1, []);
  return ans;

  function combine(t, start, nums) {
    if (nums.length >= k) {
      return;
    }
    for (let i = start; i <= 9; ++i) {
      const rest = t - i;
      if (rest === 0 && nums.length === k - 1) {
        ans.push([...nums, i]);
        continue;
      }
      if (rest < 0) {
        break;
      }
      combine(rest, i + 1, [...nums, i]);
    }
  }
};

combinationSum3(3, 7);