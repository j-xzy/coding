/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词
 * 
 * 示例 1:
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 
 * 示例 2:
 * 输入: s = "rat", t = "car"
 * 输出: false
 */

/**
 * 思路:
 * 1. 排序之后比对
 * 2. 两个hashamp存值
 */

/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sDic = new Map();
  const tDic = new Map();
  for (let i = 0; i < s.length; i++) {
    if (sDic.has(s[i])) {
      sDic.set(s[i], sDic.get(s[i]) + 1);
    } else {
      sDic.set(s[i], 1);
    }

    if (tDic.has(t[i])) {
      tDic.set(t[i], tDic.get(t[i]) + 1);
    } else {
      tDic.set(t[i], 1);
    }
  }
  for (const [key, value] of tDic) {
    if (sDic.get(key) !== value) {
      return false;
    }
  }
  return true;
}

// test
console.log(isAnagram('anagram', 'nagaram') === true);
console.log(isAnagram('rat', 'car') === false);