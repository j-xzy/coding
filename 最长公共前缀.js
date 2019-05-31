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
 * 所有输入只包含小写字母 a-z。
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; ++i) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substr(0, prefix.length - 1);
      if (prefix === '') {
        return ''
      }
    }
  }
  return prefix;
}

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix2(strs) {
  if (strs.length === 0) {
    return '';
  }
  let prefix = '';
  for (let i = 0; i < strs[0].length; ++i) {
    let c = strs[0].charAt(i);
    for (let j = 1; j < strs.length; ++j) {
      if (typeof strs[j].charAt(i) === 'undefined' || strs[j].charAt(i) !== c) {
        return prefix;
      }
    }
    prefix += c;
  }
  return prefix;
}


// test
console.log(longestCommonPrefix2(['flower', 'flow', 'flight']) === 'fl');
console.log(longestCommonPrefix2(['dog', 'racecar', 'car']) === '');
console.log(longestCommonPrefix2(['']) === '');
