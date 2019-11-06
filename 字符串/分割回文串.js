/**
给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
返回 s 所有可能的分割方案。

示例:
输入: "aab"
输出:
[
  ["aa","b"],
  ["a","a","b"]
]
 */

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  if (s.length === 0) {
    return [];
  }
  if (s.length === 1) {
    return [[s]];
  }
  let ans = [];
  for (let i = 1; i < s.length; ++i) {
    const left = s.substring(0, i);
    if (!isPin(left)) {
      continue;
    }
    const right = s.substring(i);
    const arr = partition(right);
    arr.forEach((item) => {
      ans.push([left,...item]);
    });
  }
  if(isPin(s)) {
    ans.push([s]);
  }
  return ans;
};

function isPin(s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    ++l;
    --r;
  }
  return true;
}
