/**
给出一个无重叠的 ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

示例 1:

输入: intervals = [[1,3],[6,9]], newInterval = [2,5]
输出: [[1,5],[6,9]]
示例 2:

输入: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出: [[1,2],[3,10],[12,16]]
解释: 这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }
  let flag = true;
  for (let i = 0; i < intervals.length; ++i) {
    if (newInterval[0] <= intervals[i][0]) {
      intervals.splice(i, 0, newInterval);
      flag = false;
      break;
    }
  }
  if (flag) {
    intervals.push(newInterval);
  }

  for (let i = 0; i < intervals.length - 1; ++i) {
    const curr = intervals[i];
    const next = intervals[i + 1];
    if (curr[1] >= next[0]) {
      curr[1] = Math.max(curr[1], next[1]);
      intervals.splice(i + 1, 1);
      --i;
    }
  }
  return intervals;
};

insert([[1, 5]], [2, 7]);