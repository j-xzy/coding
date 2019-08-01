/**
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 例如，给出 n = 3，生成结果为：
 * [
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
  ]
 */

/**
 * 回溯算法
 */

/**
* @param {number} n
* @return {string[]}
*/
var generateParenthesis = function (n) {
  if (n === 1) {
    return ['()']
  }
  const result = [];
  generateParenthesisCore('(', n - 1, n);

  return result;

  /**
   * 
   * @param {*} str 
   * @param {*} leftCount 剩下的左括号个数
   * @param {*} rightCount 剩下的右括号个数
   */
  function generateParenthesisCore(str, leftCount, rightCount) {
    if(leftCount < 0 || rightCount < 0) {
      return;
    }

    if (leftCount === 0 && rightCount === 0) {
      result.push(str);
      return;
    }

    // 左括号个数不能大于右括号
    if (leftCount > rightCount) {
      return;
    }

    // 检查当前是否合法
    const stack = [];
    for (let i = 0; i < str.length; ++i) {
      if (str[i] === '(') {
        stack.push('(');
      }
      if (str[i] === ')') {
        if (stack.pop() !== '(') {
          return;
        }
      }
    }
    if(stack.length > 0 && stack[0] === ')') {
      return;
    }

    generateParenthesisCore(str + '(', leftCount - 1, rightCount);
    generateParenthesisCore(str + ')', leftCount, rightCount - 1);
  }
};

generateParenthesis(3);