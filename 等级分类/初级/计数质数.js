/**
 * 统计所有小于非负整数 n 的质数的数量。
 * 示例:
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 */

/**
* @param {number} n
* @return {number}
*/
var countPrimes = function (n) {
  if (n < 3) {
    return 0;
  }
  let count = 0;
  for (let i = 2; i < n; ++i) {
    isPrime(i) && ++count;
  }
  return count;
};

function isPrime(n) {
  if (n === 0) {
    return false;
  }
  if (n === 1) {
    return false;
  }
  const s = parseInt(Math.sqrt(n));
  for (let i = 2; i <= s; ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}