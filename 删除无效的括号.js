/**
删除最小数量的无效括号，使得输入的字符串有效，返回所有可能的结果。

说明: 输入可能包含了除 ( 和 ) 以外的字符。

示例 1:

输入: "()())()"
输出: ["()()()", "(())()"]
示例 2:

输入: "(a)())()"
输出: ["(a)()()", "(a())()"]
示例 3:

输入: ")("
输出: [""]
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  const set = new Set();
  const ans = [];
  const deleted = validate(s);
  const queue = [{ str: s, left: 0, right: 0 }];
  let maxLength = -1;

  while (queue.length) {
    const { str, left, right } = queue.shift();
    if (set.has(str)) {
      continue;
    }
    if (left > deleted.left || right > deleted.right) {
      continue;
    }
    if (maxLength > str.length) {
      continue;
    }
    set.add(str);
    const v = validate(str);
    if (v.left === 0 && v.right === 0) {
      if (maxLength === -1) {
        maxLength = str.length;
      }
      ans.push(str);
    } else {
      for (let i = 0; i < str.length; ++i) {
        const slice = str.slice(0, i) + str.slice(i + 1);
        const item = { str: slice, left, right };
        if (str[i] === '(') {
          ++item.left;
        } else if (str[i] === ')') {
          ++item.right;
        }
        queue.push(item);
      }
    }
  }

  return ans;
};

function validate(s) {
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; ++i) {
    const c = s[i];
    if (c === '(') {
      ++left;
    } else if (c === ')') {
      if (left > 0) {
        --left;
      } else {
        ++right;
      }
    }
  }

  return { left, right };
}

removeInvalidParentheses(')(((()(y((u()(z()()');