/**
返回 A 的最短的非空连续子数组的长度，该子数组的和至少为 K 。

如果没有和至少为 K 的非空子数组，返回 -1 。

 

示例 1：

输入：A = [1], K = 1
输出：1
示例 2：

输入：A = [1,2], K = 4
输出：-1
示例 3：

输入：A = [2,-1,2], K = 3
输出：3
 

提示：

1 <= A.length <= 50000
-10 ^ 5 <= A[i] <= 10 ^ 5
1 <= K <= 10 ^ 9
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function (A, K) {
  const N = A.length;
  // 前缀和
  const p = [0];
  for (let i = 0; i < N; ++i) {
    p[i + 1] = p[i] + A[i];
  }
  let ans = Infinity;
  // 保存着前缀和的单调递增下标
  const monoq = [];
  for (let i = 0; i < p.length; ++i) {
    while (monoq.length > 0 && p[i] <= p[monoq[monoq.length - 1]]) {
      // 维持monoq递增
      monoq.pop();
    }
    while (monoq.length > 0 && p[i] - p[monoq[0]] >= K) {
      const idx = monoq.shift();
      ans = Math.min(ans, i - idx);
    }
    monoq.push(i);
  }
  return ans === Infinity ? -1 : ans;
};

// shortestSubarray([1, 2, 1, 1, 3, 2], 5);
shortestSubarray([84, -37, -32, 40, 95], 167);