/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 案例:
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 * 
 *  注意事项：您可以假定该字符串只包含小写字母。
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = {};
  for (let i = 0; i < s.length; ++i) {
    if (map[s[i]] !== undefined) {
      map[s[i]] = map[s[i]] + 1;
    }else {
      map[s[i]] = 1;
    }
  }
  for (let i = 0; i < s.length; ++i) {
    if(map[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};
