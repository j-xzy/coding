/**
给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。

若可行，输出任意可行的结果。若不可行，返回空字符串。

示例 1:

输入: S = "aab"
输出: "aba"
示例 2:

输入: S = "aaab"
输出: ""
注意:

S 只包含小写字母并且长度在[1, 500]区间内。
 */

/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
  const map = {};
  [].forEach.call(S, (w) => {
    const n = w;
    map[n] = (map[n] || 0) + 1;
  });
  const chars = Object.keys(map);
  chars.sort((a, b) => map[b] - map[a]);
  if (map[chars[0]] > Math.ceil(S.length / 2)) {
    return '';
  }
  let i = 0;
  let str = [];
  while (chars.length > 0) {
    const c = chars.shift();
    let count = map[c];
    while (count--) {
      if (i >= S.length) {
        i = 1;
      }
      str[i] = c;
      i += 2;
    }
  }
  return str.join('');
};

reorganizeString('aaabb');