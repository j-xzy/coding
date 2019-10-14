/**
给定一个可包含重复数字的序列，返回所有不重复的全排列。

示例:

输入: [1,1,2]
输出:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  return permute(nums);

  function permute(arr) {
    if (arr.length === 1) {
      return [arr];
    }
    const ans = [];
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i] === arr[i - 1]) {
        continue;
      }
      const newArr = [...arr];
      newArr.splice(i, 1);
      const temp = permute(newArr);
      temp.forEach((n) => {
        ans.push([arr[i], ...n])
      });
    }
    return ans;
  }
};
