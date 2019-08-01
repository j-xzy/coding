/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 示例 2：
 * 输入: "cbbd"
 * 输出: "bb"
 */

// abba // i = 1 l=4
// 0 3
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 0) {
    return '';
  }
  let maxL = 0;
  let l = 0;
  let r = 0;
  for (let i = 0; i < s.length - 1; ++i) {
    const l1 = pineLength(s, i, i);
    const l2 = pineLength(s, i, i + 1);
    if (maxL > Math.max(l1, l2)) {
      continue;
    }
    if (l1 >= l2) {
      l = i - Math.floor(l1 / 2);
      r = i + Math.floor(l1 / 2);
    } else {
      l = i - Math.floor(l2 / 2) + 1;
      r = i + Math.floor(l2 / 2);
    }
    maxL = r - l + 1;
  }
  return s.slice(l, r + 1);
};

function pineLength(s, lMid, rMid) {
  if(s[lMid] !== s[rMid]) {
    return 0;
  }
  while (lMid >= 0 && rMid < s.length) {
    if (s[lMid] !== s[rMid]) {
      break;
    }
    --lMid;
    ++rMid;
  }

  return rMid - lMid - 1;
}

console.log(longestPalindrome('cbbd'));