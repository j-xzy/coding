/**
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 示例 1:
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 */

/**
 * 要点:大数情况 
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 */

/**
* @param {number[]} digits
* @return {number[]}
*/
function plusOne(digits) {
  let idx = digits.length - 1;
  while (idx >= 0) {
    if (digits[idx] + 1 < 10) {
      digits[idx] = digits[idx] + 1;
      break;
    } else {
      digits[idx] = 0;
    }
    --idx;
  }
  if (digits[0] === 0) {
    digits.unshift(1);
  }
  return digits;
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]).join('') === '6145390195186705544')
console.log(plusOne([9, 9]).join('') === '100')
console.log(plusOne([1, 9, 9]).join('') === '200')