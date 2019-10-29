/**
给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
换句话说，第一个字符串的排列之一是第二个字符串的子串。

示例1:
输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").

示例2:
输入: s1= "ab" s2 = "eidboaoo"
输出: False
 
注意：
输入的字符串只包含小写字母
两个字符串的长度都在 [1, 10,000] 之间
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }
  const s1Map = Array(26).fill(0);
  const s2Map = Array(26).fill(0);
  for (let i = 0; i < s1.length; ++i) {
    s1Map[s1.charCodeAt(i) - 97] += 1;
    s2Map[s2.charCodeAt(i) - 97] += 1;
  }
  let count = 0;
  for (let i = 0; i < 26; ++i) {
    if (s1Map[i] === s2Map[i]) {
      ++count;
    }
  }
  // 滑动窗口，比较新进入的后出去的频率
  for (let i = 0; i < s2.length - s1.length; ++i) {
    // 新进入的字符
    const r = s2.charCodeAt(i + s1.length) - 97;

    // 出去的字符
    const l = s2.charCodeAt(i) - 97;
    if (count === 26) {
      return true
    }

    // 新进入的字符频率匹配，但是后面要加一所以count-1
    if (s2Map[r] === s1Map[r]) {
      --count;
    }

    // 新进入的字符频率+1
    ++s2Map[r];
    if (s2Map[r] === s1Map[r]) {
      ++count;
    }

    if (s2Map[l] === s1Map[l]) {
      --count;
    }
    --s2Map[l];
    if (s2Map[l] === s1Map[l]) {
      ++count;
    }
  }
  return count === 26;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }
  const map = {};
  [].forEach.call(s1, (str) => {
    map[str] = (map[str] || 0) + 1;
  });
  let start = 0;
  while (start + s1.length <= s2.length) {
    const m = Object.assign({}, map);
    let i = start;
    for (i = start; i < start + s1.length; ++i) {
      if (m[s2[i]]) {
        m[s2[i]] -= 1;
      } else {
        break;
      }
    }
    if (i === start + s1.length) {
      return true;
    }
    ++start;
  }
  return false;
};
