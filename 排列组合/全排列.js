/**
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 1) {
    return [nums];
  }
  const ans = [];
  for (let i = 0; i < nums.length; ++i) {
    const newNum = [...nums];
    newNum.splice(i, 1);
    const result = permute(newNum);
    result.forEach((arr) => {
      ans.push([nums[i], ...arr])
    });
  }
  return ans;
};

let a = permute([1, 2, 3]);

