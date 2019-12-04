/**
给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字母的最小子串。
示例：
输入: S = "ADOBECODEBANC", T = "ABC"
输出: "BANC"
说明：
如果 S 中不存这样的子串，则返回空字符串 ""。
如果 S 中存在这样的子串，我们保证它是唯一的答案。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minwindows = function (s, t) {
  if (t.length > s.length) {
    return '';
  }
  const need = {};
  [].forEach.call(t, (char) => {
    need[char] = (need[char] || 0) + 1;
  });

  let ans = '';
  const windows = {};
  let match = 0;
  let left = 0;
  let right = 0;
  while (left < s.length && right < s.length) {
    const char = s[right];
    if (need[char]) {
      windows[char] = (windows[char] || 0) + 1;
      if (windows[char] === need[char]) {
        ++match;
      }
    }

    while (left <= right && match === Object.keys(need).length) {
      const str = s.slice(left, right + 1);
      if (ans === '') {
        ans = str;
      } else if (str.length < ans.length) {
        ans = str;
      }
      const c = s[left];
      if (!need[c]) {
        ++left;
        continue;
      }
      --windows[c];
      if(windows[c] < need[c]) {
        --match;
      }
      ++left;
    }
    ++right;
  }

  return ans;
};

minwindows('a', 'a');