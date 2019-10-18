/**
在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。

注意:
n 是正数且在32为整形范围内 ( n < 231)。

示例 1:

输入:
3

输出:
3
示例 2:

输入:
11

输出:
0

说明:
第11个数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是0，它是10的一部分。 
 */

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let figure = 1; // 位数
  let c = 9 * figure * 10 ** (figure - 1);
  let start = 1;
  while (n > c) {
    ++figure;
    start = c + 1;
    c += 9 * figure * 10 ** (figure - 1);
  }
  const interval = n - start;
  const startNum = 10 ** (figure - 1);
  const num = String(startNum + Math.floor(interval / figure));
  const step = interval % figure;
  return num[step];
};
