/**
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 
 * 示例 1:
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc" 
 * 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.split(' ').map((item) => reverse(item));
  return arr.join(' ');
};

function reverse(s) {
  let ans = '';
  for (let i = s.length - 1; i >= 0; --i) {
    ans += s[i];
  }
  return ans;
}