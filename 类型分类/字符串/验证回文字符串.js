/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 示例 2:
 * 输入: "race a car"
 * 输出: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length < 2) {
    return true;
  }
  let left = 0;
  let right = s.length - 1;
  while (right> left) {
    if (!/[a-z]|[A-Z]|[0-9]/.test(s[left]) || s[left] === ' ') {
      ++left;
      continue;
    }
    if (!/[a-z]|[A-Z]|[0-9]/.test(s[right]) || s[right] === ' ') {
      --right;
      continue;
    }
    if(s[right].toLowerCase() !== s[left].toLowerCase() ) {
      return false;
    }
    ++left;
    --right;
  }

  return true;
};
