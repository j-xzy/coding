/**
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 
 * 示例:
 * 输入: 3
 * 输出: [1,3,3,1]
 * 
 * 进阶：
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const ans = [];
  for (let i = 0; i < rowIndex + 1; ++i) {
    for (let n = i; n >= 0; --n) {
      if (n === 0 || n === i) {
        ans[n] = 1;
        continue;
      }
      ans[n] = ans[n] + ans[n - 1];
    }
  }
  return ans;
};
