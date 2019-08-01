/**
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 
 * 示例 1:
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 示例 2:
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; ++i) {
    if (intervals[i][0] <= result[result.length - 1][1]) {
      result[result.length - 1][1] = Math.max(intervals[i][1], result[result.length - 1][1]);
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
};

merge([[2, 3], [0, 1], [1, 2], [3, 4], [4, 5], [1, 1], [0, 1], [4, 6], [5, 7], [1, 1], [3, 5]])