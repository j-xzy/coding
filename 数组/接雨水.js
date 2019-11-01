/**
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

示例:
输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length === 0) {
    return 0;
  }
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let ans = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] > leftMax) {
        leftMax = height[left];
      } else {
        ans += leftMax - height[left];
      }
      ++left;
    } else {
      if (height[right] > rightMax) {
        rightMax = height[right];
      } else {
        ans += rightMax - height[right];
      }
      --right;
    }
  }
  return ans;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length === 0) {
    return 0;
  }
  const leftMax = [height[0]];
  for (let i = 1; i < height.length; ++i) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }
  const rightMax = [];
  rightMax[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; --i) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }
  let ans = 0;
  for (let i = 0; i < height.length; ++i) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return ans;
};
