/**
给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。

按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

"123"
"132"
"213"
"231"
"312"
"321"
给定 n 和 k，返回第 k 个排列。

说明：

给定 n 的范围是 [1, 9]。
给定 k 的范围是[1,  n!]。
示例 1:

输入: n = 3, k = 3
输出: "213"
示例 2:

输入: n = 4, k = 9
输出: "2314"
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let gap = factorial(n - 1);
  let str = '';
  const nums = [...Array(n)].map((v, idx) => idx + 1);
  while (nums.length > 0) {
    let c = gap === 0 ? 0 : Math.ceil(k / gap) - 1;
    const s = nums.splice(c, 1);
    str = str + s[0];
    k = k % gap;
    --n;
    gap = gap / n;
  }
  return str;
};

function factorial(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorial(n - 1);
}

getPermutation(3, 3)