/**
给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
示例:
输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length > 12) {
    return [];
  }
  const splitPos = [];
  const ans = [];

  backtrace(-1, 0);

  function backtrace(prePos, n) {
    const maxPos = Math.min(prePos + 3, s.length - 1);
    for (let pos = prePos + 1; pos <= maxPos; ++pos) {
      if (!valid(s, prePos + 1, pos)) {
        continue;
      }
      if (n === 2) {
        if (valid(s, pos + 1, s.length - 1)) {
          const str = s.substring(0, splitPos[0] + 1) + '.' + s.substring(splitPos[0] + 1, splitPos[1] + 1) + '.' + s.substring(splitPos[1] + 1, pos + 1) + '.' + s.substring(pos + 1);
          ans.push(str);
        }
      } else {
        splitPos.push(pos);
        backtrace(pos, n + 1);
        splitPos.pop();
      }
    }
  }

  return ans;
};

function valid(s, start, end) {
  if (start > end) {
    return false
  }
  if (end - start > 2) {
    return;
  }
  if (s[start] === '0' && start !== end) {
    return false;
  }
  return s.substring(start, end + 1) <= 255;
}
