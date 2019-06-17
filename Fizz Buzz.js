/**
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 * 1. 如果 n 是3的倍数，输出“Fizz”；
 *  2. 如果 n 是5的倍数，输出“Buzz”；
 * 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
 */

/**
* @param {number} n
* @return {string[]}
*/
var fizzBuzz = function (n) {
  const result = [];
  for (let i = 0; i < n; ++i) {
    const j = i + 1;
    if (j % 3 === 0 && j % 5 === 0) {
      result.push('FizzBuzz');
    } else {
      if (j % 3 === 0) {
        result.push('Fizz');
        continue;
      }
      if (j % 5 === 0) {
        result.push('Buzz');
        continue;
      }
      result.push(String(j));
    }
  }
  return result;
}