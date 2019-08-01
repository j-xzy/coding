/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 示例 2:
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 说明:
 * 所有输入只包含小写字母 a-z 。
 */

/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }
  let prefix = '';
  for (let i = 0; i < strs[0].length; ++i) {
    const c = strs[0][i];
    for (let n = 1; n < strs.length; ++n) {
      if(strs[n][i] === undefined || strs[n][i] !== c) {
        return prefix;
      }
    }
    prefix += c;
  }
  return prefix;
};

longestCommonPrefix(["flower","flow","flight"]);