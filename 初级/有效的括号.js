/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 输入: "()"
 * 输出: true
 * 
 * 示例 2:
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 示例 3:
 * 输入: "(]"
 * 输出: false
 * 
 * 示例 4:
 * 输入: "([)]"
 * 输出: false
 * 
 * 示例 5:
 * 输入: "{[]}"
 * 输出: true
 */

/**
* @param {string} s
* @return {boolean}
*/
var isValid = function (s) {
  s = s.replace(/\s/g, '');
  const stack = [];
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      const top = stack.pop();
      if(typeof top === 'undefined') {
        return false;
      }
      if (top === '(' && s[i] !== ')') {
        return false;
      }
      if (top === '{' && s[i] !== '}') {
        return false;
      }
      if (top === '[' && s[i] !== ']') {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid(')') === false);
console.log(isValid('(') === false);
console.log(isValid(' (  )') === true);
console.log(isValid('()[]{}') === true);
console.log(isValid('(]') === false);
console.log(isValid('([)]') === false);
console.log(isValid('{[]}') === true);
console.log(isValid('{{{[[') === false);