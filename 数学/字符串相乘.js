/**
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
  const products = []
  for (let i = num2.length - 1,n = 0; i >= 0; --i,++n) {
    const single = num2[i];
    let p = multiplySingle(num1, single);
    for (let j = 0; j < n; ++j) {
      p = p + '0';
    }
    products.push(p);
  }
  return products.reduce((p, q) => sum(p, q), '0');
};

function sum(num1, num2) {
  if (num1 === '0') {
    return num2;
  }
  if (num2 === '0') {
    return num1;
  }
  let carry = 0;
  let ans = '';
  let idx = 0;
  while (idx < num1.length || idx < num2.length) {
    let n1 = num1[num1.length - idx - 1] === undefined ? 0 : parseInt(num1[num1.length - idx - 1]);
    let n2 = num2[num2.length - idx - 1] === undefined ? 0 : parseInt(num2[num2.length - idx - 1]);
    const s = n1 + n2 + carry;
    ans = s % 10 + ans;
    carry = s > 9 ? 1 : 0;
    ++idx;
  }
  if (carry !== 0) {
    ans = 1 + ans;
  }
  return ans;
}

function multiplySingle(num, single) {
  let carry = 0;
  let ans = '';
  let r = parseInt(single);
  for (let i = num.length - 1; i >= 0; --i) {
    const l = parseInt(num[i]);
    const product = r * l + carry;
    ans = product % 10 + ans;
    carry = Math.floor(product / 10);
  }
  if (carry !== 0) {
    ans = carry + ans;
  }
  return ans;
}

console.log(multiply('123', '456'));