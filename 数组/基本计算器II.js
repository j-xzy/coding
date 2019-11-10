/**
实现一个基本的计算器来计算一个简单的字符串表达式的值。

字符串表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。

示例 1:

输入: "3+2*2"
输出: 7
示例 2:

输入: " 3/2 "
输出: 1
示例 3:

输入: " 3+5 / 2 "
输出: 5
说明：

你可以假设所给定的表达式都是有效的。
请不要使用内置的库函数 eval。
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const ops = [];
  const nums = [];
  let idx = 0;
  while (idx <= s.length) {
    if (s[idx] === ' ') {
      ++idx;
      continue;
    }
    if (/[0-9]/.test(s[idx])) {
      let n = '';
      while (/[0-9]/.test(s[idx])) {
        n = n + s[idx];
        ++idx;
      }
      if (ops[ops.length - 1] === '*') {
        nums.push(nums.pop() * n);
        ops.pop();
      } else if (ops[ops.length - 1] === '/') {
        nums.push(Math.floor(nums.pop() / n));
        ops.pop();
      } else {
        nums.push(parseInt(n));
      }
      continue;
    }
    if (/\/|\*/.test(s[idx])) {
      ops.push(s[idx]);
      ++idx;
      continue;
    }
    if (nums.length > 1) {
      const op = ops.pop();
      const n1 = nums.pop();
      const n2 = nums.pop();
      if (op === '+') {
        nums.push(n1 + n2);
      } else {
        nums.push(n2 - n1);
      }
    }
    ops.push(s[idx]);
    ++idx;
  }
  return nums[0];
};
