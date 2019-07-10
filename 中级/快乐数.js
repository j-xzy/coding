/**
 * 编写一个算法来判断一个数是不是“快乐数”。
 * 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。
 * 
 * 示例: 
 * 
 * 输入: 19
 * 输出: true
 * 解释: 
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 02 = 1
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const map = {};
  while (typeof map[n] === 'undefined') {
    map[n] = null;
    let sum = 0;
    while (n > 0) {
      sum += Math.pow((n % 10), 2);
      n = Math.floor(n / 10);
    }
    if (sum === 1) {
      return true;
    }
    n = sum;
  }
  return false;
};

// test
console.log(isHappy(17) === true);