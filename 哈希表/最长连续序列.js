/**
给定一个未排序的整数数组，找出最长连续序列的长度。

要求算法的时间复杂度为 O(n)。

示例:

输入: [100, 4, 200, 1, 3, 2]
输出: 4
解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  const set = new Set();
  nums.forEach((n) => {
    set.add(n);
  });

  let ans = 1;
  // 这个双层循环最多执行n+n次([1,2,3,4,5]),每个元素最多被访问两次
  set.forEach((n) => {
    // 从n-1开始检查，如果n-1存在，说明n已出现在别的序列中了
    // 如果n-1不存在，那么n就为序列的起始点
    if (!set.has(n - 1)) {
      let len = 1;
      while (set.has(n + 1)) {
        n += 1;
        ++len;
      }
      ans = Math.max(ans, len);
    }
  });

  return ans;
};
