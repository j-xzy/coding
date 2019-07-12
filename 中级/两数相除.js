/**
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 
 * 示例 1:
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 * 示例 2:
 * 
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 * 说明:
 * 
 * 被除数和除数均为 32 位有符号整数。
 * 除数不为 0。
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。
 */

// 100 / 30 = 3.3333
// 30 + 30 + 30
// 

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === 0) {
    return 0;
  }
  if (dividend === divisor) {
    return 1;
  }
  if (divisor === 1) {
    return over(dividend);
  }
  if (divisor === -1) {
    return over(0 - dividend);
  }
  const a = Math.abs(dividend);
  const b = Math.abs(divisor);
  if (b > a) {
    return 0;
  }
  let c = 0;
  let r = b;
  while (true) {
    ++c;
    r += b;
    if (r === a) {
      ++c;
      break;
    }
    if (r > a) {
      break;
    }
  }

  const aIsAbs = dividend > 0;
  const bIsAbs = divisor > 0;
  if (aIsAbs && bIsAbs) {
    return over(c);
  }
  if (!aIsAbs && !bIsAbs) {
    return over(c);
  }
  return over(0 - c);
};

function over(num) {
  if (num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }
  return num;
}

// console.log(divide(-2147483648, -1));
console.log(divide(7, -3));
console.log(divide(12, 5));
console.log(divide(15, 5));
console.log(divide(100, 3));