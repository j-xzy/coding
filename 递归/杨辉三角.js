/**
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 示例:
 * 输入: 5
 * 输出
 * [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const ans = [];
  const cache = {};
  for (let i = 0; i < numRows; ++i) {
    ans.push([]);
    for (let n = 0; n < i + 1; ++n) {
      ans[ans.length - 1].push(calc(i, n));
    }
  }
  return ans;

  function calc(level, i) {
    if (cache[level + ',' + i] !== undefined) {
      return cache[level + ',' + i];
    }
    if (i === 0 || i === level) {
      return 1;
    }
    const result = calc(level - 1, i - 1) + calc(level - 1, i);
    cache[level + ',' + i] = result;
    return result;
  }
};

generate(4)