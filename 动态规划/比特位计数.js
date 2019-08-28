/**
 * 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
 * 示例 1:
 * 输入: 2
 * 输出: [0,1,1]
 * 
 * 示例 2:
 * 输入: 5
 * 输出: [0,1,1,2,1,2]
 * 
 * 进阶:
 * 给出时间复杂度为O(n*sizeof(integer))的解答非常容易。但你可以在线性时间O(n)内用一趟扫描做到吗？
 * 要求算法的空间复杂度为O(n)。
 * 你能进一步完善解法吗？要求在C++或任何其他语言中不使用任何内置函数（如 C++ 中的 __builtin_popcount）来执行此操作。
 */

// #region 解法一 动态规划 O(n)
// f(x) = f(x/2) + x % 2
var countBits = function (num) {
  const ans = [0];
  for (let i = 0; i <= num; ++i) {
    ans[i] = ans[Math.floor(i / 2)] + i & 1;
  }
  return ans;
};
// #endregion

// #endregion 解法二

// #region 解法二 遍历统计 O(nk)
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  const ans = [];
  for (let i = 0; i <= num; ++i) {
    ans.push(countBitCore(i));
  }
  return ans;
  function countBitCore(num) {
    let count = 0;
    while (num > 0) {
      const mod = num % 2;
      if (mod === 1) {
        ++count;
      }
      num = Math.floor(num / 2);
    }
    return count;
  }
};
// #endregion