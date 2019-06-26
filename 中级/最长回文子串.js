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

// #region 暴力法

// 时间复杂度O(n*n*n)
// 空间复杂度O(1)

/**
* @param {string} s
* @return {string}
*/
var longestPalindrome1 = function (s) {
  if (s.length === 0) {
    return '';
  }
  if (s.length === 1) {
    return s;
  }
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length - 1; ++i) {
    for (let n = i + 1; n < s.length; ++n) {
      if (isPine(s, i, n)) {
        if (n - i > end - start) {
          start = i;
          end = n;
        }
      }
    }
  }
  if (start === end) {
    return s[0];
  }
  return s.slice(start, end + 1);
};

function isPine(s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    ++start;
    --end;
  }
  return true
}
// #endregion

// #region 动态规划

// 时间复杂度O(n*n)
// 空间复杂度O(n*n)

/**
* @param {string} s
* @return {string}
*/

var longestPalindrome2 = function (s) {
  if (s.length === 0) {
    return '';
  }
  if (s.length === 1) {
    return s;
  }
  let count = 2;
  let start = 0;
  let end = 0;
  const map = new Map();
  while (count <= s.length) {
    for (let i = 0; i < s.length - count + 1; ++i) {
      let str = s.slice(i, i + count);
      if (str[0] === str[count - 1]) {
        let childStr = str.slice(1, count - 1);
        if (childStr.length === 0 || childStr.length === 1 || map.has(childStr)) {
          map.set(str, true);
          if (count > end - start + 1) {
            start = i;
            end = i + count - 1;
          }
        }
      }
    }
    ++count;
  }

  if (start === end) {
    return s[0];
  }
  return s.slice(start, end + 1);
};
// #endregion

// #region 中心扩散

// 时间复杂度O(n*n)
// 空间复杂度O(n*n)

// 因为回文串是镜像的，所以选取每个中心向左右扩散

/**
* @param {string} s
* @return {string}
*/
var longestPalindrome3 = function (s) {
  if (s.length === 0) {
    return '';
  }
  if (s.length === 1) {
    return s;
  }
  let start = 0;
  let end = 0;
  // 选取中心
  for (let i = 0; i < s.length; ++i) {
    const l1 = expandAroundCenter(s, i, i); // i为中心
    const l2 = expandAroundCenter(s, i, i + 1); // 中心有连两个 i与i+1 (abba)
    const l = Math.max(l1, l2);
    if (l > end - start + 1) {
      start = i - Math.floor((l - 1) / 2);
      end = i +  Math.floor(l / 2);
    }
  }

  if (start === end) {
    return s[0];
  }
  return s.slice(start, end + 1);
};

function expandAroundCenter(s, start, end) {
  while(start >= 0 && end < s.length && s[start] === s[end]) {
    --start;
    ++end;
  }
  return end - start - 1;
}

// #endregion

// test
console.log(longestPalindrome3('babad') === 'bab' || longestPalindrome3('babad') === 'aba');
console.log(longestPalindrome3('cbbd') === 'bb');
console.log(longestPalindrome3('aaaa') === 'aaaa');
