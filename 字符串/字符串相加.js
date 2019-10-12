/**
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

注意：
num1 和num2 的长度都小于 5100.
num1 和num2 都只包含数字 0-9.
num1 和num2 都不包含任何前导零。
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;
  let ans = '';
  while (i >= 0 || j >= 0) {
    let one = i >= 0 ? parseInt(num1[i], 10) : 0;
    let two = j >= 0 ? parseInt(num2[j], 10) : 0;
    let sum = one + two + carry;
    ans = sum % 10 + ans;
    if (sum >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }
    --i;
    --j;
  }
  if (carry === 1) {
    ans = '1' + ans;
  }
  return ans;
};
