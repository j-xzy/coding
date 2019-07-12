/**
 * 实现 int sqrt(int x) 函数。
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 *  由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1:
 * 输入: 4
 * 输出: 2
 * 
 * 示例 2:
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842..., 
 * 由于返回类型是整数，小数部分将被舍去。
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 1) {
    return x;
  }
  let l = 0;
  let r = x;
  while (r > l) {
    const mid = l + Math.floor((r - l) / 2);
    if (mid * mid > x) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l - 1;
};

// test
console.log(mySqrt(0) === 0);
console.log(mySqrt(1) === 1);
console.log(mySqrt(4) === 2);
console.log(mySqrt(8) === 2);
console.log(mySqrt(16) === 4);
console.log(mySqrt(65) === 8);