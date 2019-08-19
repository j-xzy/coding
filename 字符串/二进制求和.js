/**
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (a === '') {
    return b;
  }
  if (b === '') {
    return a;
  }
  let ans = '';
  let idx = 0;
  let carry = 0;
  while (idx < a.length || idx < b.length) {
    let aValue = idx >= a.length ? 0 : parseInt(a[a.length - idx - 1]);
    let bValue = idx >= b.length ? 0 : parseInt(b[b.length - idx - 1]);
    const value = bValue + aValue + carry;
    if (value > 1) {
      carry = 1;
      ans = value % 2 + ans;
    } else {
      carry = 0;
      ans = value + ans;
    }
    ++idx;
  }
  if (carry > 0) {
    return '1' + ans;
  }
  return ans;
};
