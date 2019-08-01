/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 示例 1:
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 
 * 示例 2:
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 说明:
 * 
 * 你可以假设字符串只包含小写字母。
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sMap = {};
  const tMap = {};
  for (let i = 0; i < s.length; ++i) {
    if (sMap[s[i]] === undefined) {
      sMap[s[i]] = 1;
    } else {
      sMap[s[i]] = sMap[s[i]] + 1;
    }
    if (tMap[t[i]] === undefined) {
      tMap[t[i]] = 1;
    } else {
      tMap[t[i]] = tMap[t[i]] + 1;
    }
  }
  if (Object.keys(sMap).length !== Object.keys(tMap).length) {
    return false;
  }
  const keys = Object.keys(sMap);
  for (let i = 0; i < keys.length; ++i) {
    const k = keys[i];
    if(sMap[k] !== tMap[k]) {
      return false;
    }
  }
  return true;
};

isAnagram('car', 'rat');