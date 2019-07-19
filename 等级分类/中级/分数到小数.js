/**
 * 给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以字符串形式返回小数。
 * 如果小数部分为循环小数，则将循环的部分括在括号内。
 * 
 * 示例 1:
 * 输入: numerator = 1, denominator = 2
 * 输出: "0.5"
 * 
 * 示例 2:
 * 输入: numerator = 2, denominator = 1
 * 输出: "2"
 * 
 * 示例 3:
 * 输入: numerator = 2, denominator = 3
 * 输出: "0.(6)"
 */

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  if (numerator === denominator) {
    return 1;
  }
  if (denominator === 1) {
    return numerator.toString();
  }
  if (denominator === -1) {
    return (0 - numerator).toString();
  }
  if (numerator === 0) {
    return '0';
  }
  const dividend = Math.abs(numerator);
  const divisor = Math.abs(denominator);
  let integer = Math.floor(dividend / divisor);
  let remainder = dividend % divisor;
  if (remainder === 0) {
    return integer.toString();
  }
  let decimals = [];
  let map = { [remainder]: 0 };
  let startRepeat = -1;
  while (remainder !== 0) {
    const v = Math.floor(remainder * 10 / divisor);
    decimals.push(v);
    remainder = remainder * 10 % divisor;
    if (typeof map[remainder] !== 'undefined') {
      startRepeat = map[remainder];
      break;
    }
    map[remainder] = decimals.length;
  }
  let decimal = ''
  for (let i = 0; i < decimals.length; ++i) {
    if (startRepeat === i) {
      decimal += '(';
    }
    decimal += decimals[i];
  }
  if (startRepeat !== -1) {
    decimal += ')';
  }
  let result = integer.toString() + '.' + decimal;
  if ((numerator ^ denominator) > 0) {
    return result;
  } else {
    return '-' + result;
  }
};

// test
console.log(fractionToDecimal(1, 6) === '0.1(6)');
console.log(fractionToDecimal(2, -1) === '-2');
console.log(fractionToDecimal(-2, -1) === '2');
console.log(fractionToDecimal(-2, 1) === '-2');
console.log(fractionToDecimal(1, 2) === '0.5');
console.log(fractionToDecimal(2, 1) === '2');
console.log(fractionToDecimal(2, 3) === '0.(6)');