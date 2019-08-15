/**
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 例如，给出 n = 3，生成结果为：
 * [
 *   "((()))",
 *   "(()())",
 *   "(())()",
 *   "()(())",
 *   "()()()"
 * ]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = [];
  backtrack('', 0, 0);
  return ans;

  function backtrack(cur, open, close) {
    if (cur.length === n * 2) {
      ans.push(cur);
      return;
    }
    if (open < n) {
      backtrack(cur + '(', open + 1, close);
    }
    if (close < open) {
      backtrack(cur + ')', open, close + 1);
    }
  }
};

generateParenthesis(3);
