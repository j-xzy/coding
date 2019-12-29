/**
给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
求在该柱状图中，能够勾勒出来的矩形的最大面积。
以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。

示例:

输入: [2,1,5,6,2,3]
输出: 10

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/largest-rectangle-in-histogram
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// 单调栈
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const stack = [-1];
  let ans = 0;
  for (let i = 0; i < heights.length; ++i) {
    while (stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] > heights[i]) {
      const area = heights[stack.pop()] * (i - stack[stack.length - 1] - 1);
      ans = Math.max(ans, area);
    }
    stack.push(i);
  }
  while (stack.length > 1) {
    const area = heights[stack.pop()]  * (heights.length - stack[stack.length - 1] - 1);
    ans = Math.max(ans, area);
  }
  return ans;
};

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let ans = 0;
  for (let l = 0; l < heights.length; ++l) {
    let height = Infinity;
    for (let r = l; r < heights.length; ++r) {
      height = Math.min(height, heights[r]);
      ans = Math.max(ans, height * (r - l + 1));
    }
  }
  return ans;
};
