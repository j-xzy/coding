/**
 * 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
 * 说明：不要使用任何内置的库函数，如  sqrt。
 * 
 * 示例 1：
 * 输入：16
 * 输出：True
 * 
 * 示例 2：
 * 输入：14
 * 输出：False
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num <= 0) {
    return false;
  }
  if (num === 1) {
    return true;
  }
  let start = 0;
  let end = num;
  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    const value = mid * mid;
    if (value === num) {
      return true;
    }
    if (value > num) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return false;
};