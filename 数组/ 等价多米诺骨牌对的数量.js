/**
给你一个由一些多米诺骨牌组成的列表 dominoes。
如果其中某一张多米诺骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌，我们就认为这两张牌是等价的。
形式上，dominoes[i] = [a, b] 和 dominoes[j] = [c, d] 等价的前提是 a==c 且 b==d，或是 a==d 且 b==c。
在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对 (i, j) 的数量。

示例：
输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
输出：1
 
提示：
1 <= dominoes.length <= 40000
1 <= dominoes[i][j] <= 9
 */

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  const stamps = {};
  let ans = 0;
  dominoes.forEach(([a, b]) => {
    if (stamps[stamp(a, b)]) {
      ans += stamps[stamp(a, b)];
      ++stamps[stamp(a, b)];
    } else if (stamps[stamp(b, a)]) {
      ans += stamps[stamp(b, a)];
      ++stamps[stamp(b, a)];
    } else {
      stamps[stamp(a, b)] = 1;
    }
  });
  return ans;
};

function stamp(a, b) {
  return a + '#' + b;
}

numEquivDominoPairs([[1, 2], [2, 1], [2, 1], [5, 6]]);