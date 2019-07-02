/**
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 示例:
 * 输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 0) {
    return [];
  }
  if (nums.length === 1) {
    return [nums]
  }
  const result = [];
  permuteCore([], [...nums]);

  return result;

  function permuteCore(arr, other) {
    if (other.length === 0) {
      return result.push(arr);
    }
    for (let i = 0; i < other.length; ++i) {
      const copy = [...other];
      copy.splice(i, 1);
      permuteCore([...arr, other[i]], copy);
    }
  }
};

permute([1, 2, 3])