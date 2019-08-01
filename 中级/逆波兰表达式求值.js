/**
 * 根据逆波兰表示法，求表达式的值。
 * 有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 *
 * 说明：
 * 整数除法只保留整数部分。
 * 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 *
 * 示例 1：
 * 输入: ['2', '1', '+', '3', '*']
 * 输出: 9
 * 解释: ((2 + 1) * 3) = 9
 *
 * 示例 2：
 * 输入: ['4', '13', '5', '/', '+']
 * 输出: 6
 * 解释: (4 + (13 / 5)) = 6
 *
 * 示例 3：
 * 输入: ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']
 * 输出: 22
 * 解释:
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
 */


/**
* @param {string[]} tokens
* @return {number}
*/
var evalRPN = function (tokens) {
  if(tokens.length === 1) {
    return Number(tokens[0]);
  }
  let result = 0;
  const operators = ['+', '-', '*', '/'];
  while (tokens.length > 1) {
    for (let i = tokens.length - 3; i >= 0; --i) {
      if (operators.includes(tokens[i + 2]) && !operators.includes(tokens[i + 1]) && !operators.includes(tokens[i])) {
        if (tokens[i + 2] === '+') {
          result = Number(tokens[i + 1]) + Number(tokens[i]);
        } else if (tokens[i + 2] === '-') {
          result =  Number(tokens[i]) -  Number(tokens[i + 1]);
        } else if (tokens[i + 2] === '*') {
          result = Number(tokens[i]) * Number(tokens[i + 1]);
        } else {
          result = parseInt(Number(tokens[i]) / Number(tokens[i + 1]), 10);
        }
        tokens.splice(i, 3, result);
        break;
      }
    }
  }
  return result;
};

// test
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']) === 22);