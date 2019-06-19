/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转
 * 
 * 示例 1:
 * 输入: 123
 * 输出: 321
 * 
 * 示例 2:
 * 输入: -123
 * 输出: -321
 * 
 * 示例 3:
 * 输入: 120
 * 输出: 21
 * 
 * 注意:
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。
 * 请根据这个假设，如果反转后整数溢出那么就返回 0。
 */

/**
* @param {number}
* @return {number}
*/
function reverse(x) {
  const str = x.toString();
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr[i] = str[str.length - i - 1];
  }
  if (x < 0) {
    arr.unshift('-');
  }
  let num = parseInt(arr.join(''));
  if (isNaN(num)) {
    return 0;
  }
  if(num> Math.pow(2,31) -1 || num < Math.pow(-2,31)) {
    return 0;
  }
  return num;
}

// test
console.log(reverse(123) === 321);
console.log(reverse(-123) === -321);
console.log(reverse(120) === 21);
console.log(reverse(1534236469) === 0)