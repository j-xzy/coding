/**
 * 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
 * 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被计为是不同的子串。
 * 
 * 示例 1:
 * 输入: "abc"
 * 输出: 3
 * 解释: 三个回文子串: "a", "b", "c".
 * 
 * 示例 2:
 * 输入: "aaa"
 * 输出: 6
 * 说明: 6个回文子串: "a", "a", "a", "aa", "aa", "aaa".
 * 
 * 注意:
 * 输入的字符串长度不会超过1000。
 */

// dp

// f(i,j) = num[i] === num[j] && f(i+1,j-1)

// f(0,0) = true
// f(1,1) = true
// f(0,1) = num[0] === num[j]
// ...
// f(0,2) = num[0] === num[2] && f(1,1)
/**
* @param {string} s
* @return {number}
*/
var countSubstrings = function (s) {
  const dp = {};
  let count = 0;
  for (let i = 0; i < s.length; ++i) {
    for (let n = 0; n < s.length - i; ++n) {
      const str = s.slice(n, i + n + 1);
      if (str[0] === str[i] && (str.length < 3 || dp[`${n + 1}#${n + i - 1}`] === true)) {
        dp[`${n}#${n + i}`] = true;
        ++count;
      }
    }
  }
  return count;
};

// 中心扩散法
/**
* @param {string} s
* @return {number}
*/
var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; ++i) {
    count += countSubstringsCore(i, i) + countSubstringsCore(i, i + 1);
  }

  function countSubstringsCore(start, end) {
    let num = 0;
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      ++num;
      --start;
      ++end;
    }
    return num;
  }

  return count;
};