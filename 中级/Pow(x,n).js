/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 * 
 * 示例 1:
 * 输入: 2.00000, 10
 * 输出: 1024.00000
 * 
 * 示例 2:
 * 输入: 2.10000, 3
 * 输出: 9.26100
 * 
 * 示例 3:
 * 输入: 2.00000, -2
 * 输出: 0.25000
 * 解释: 2-2 = 1/22 = 1/4 = 0.25
 * 
 * 说明:
 * -100.0 < x < 100.0
 * n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const absn = Math.abs(n);
  if (n === 0) {
    return 1;
  }
  if (x === 1) {
    return 1;
  }
  if(x === -1) {
    if((n % 2) === 0) {
      return 1;
    }
    return -1;
  }
  let result = 1;
  for (let i = 0; i < absn; ++i) {
    result = result * x;
  }
  if (n < 0) {
    return 1 / result;
  }
  return result;
};

// test
console.log(Math.abs(myPow(2.00000, 10) - 1024.00000) < Number.EPSILON);
console.log(Math.abs(myPow(2.10000, 3) - 9.26100) < Number.EPSILON);
console.log(Math.abs(myPow(2.00000, -2) - 0.25000) < Number.EPSILON);