/**
给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

示例:
输入:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
输出: 6
 */

// 题解：https://leetcode-cn.com/problems/maximal-rectangle/solution/zui-da-ju-xing-by-leetcode/ 

// 思路：方法2
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const rowCount = matrix.length;
  if (rowCount === 0) {
    return 0;
  }
  let ans = 0;
  const colCount = matrix[0].length;
  const stack = [...Array(rowCount)].map(() => Array(colCount).fill(0));
  for (let r = 0; r < rowCount; ++r) {
    for (let c = 0; c < colCount; ++c) {
      if (matrix[r][c] === '0') {
        continue;
      }
      if (c === 0) {
        stack[r][c] = 1;
      } else {
        stack[r][c] = stack[r][c - 1] + 1;
      }
      let width = stack[r][c];
      for (let j = r; j >= 0; --j) {
        width = Math.min(width, stack[j][c]);
        let height = r - j + 1;
        let area = width * height;
        ans = Math.max(ans, area);
      }
    }
  }
  return ans;
};


// 单调栈
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const rowCount = matrix.length;
  if (rowCount === 0) {
    return 0;
  }
  let ans = 0;
  const colCount = matrix[0].length;
  const stack = Array(colCount).fill(0);
  for (let r = 0; r < rowCount; ++r) {
    for (let c = 0; c < colCount; ++c) {
      stack[c] = matrix[r][c] === '1' ? stack[c] + 1 : 0;
    }
    ans = Math.max(ans, largestRectangleArea(stack));
  }
  return ans;
};

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
    const area = heights[stack.pop()] * (heights.length - stack[stack.length - 1] - 1);
    ans = Math.max(ans, area);
  }
  return ans;
};

// dp
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const rowCount = matrix.length;
  if (rowCount === 0) {
    return 0;
  }
  let ans = 0;
  const colCount = matrix[0].length;
  const heights = Array(colCount).fill(0);
  const lefts = Array(colCount).fill(0);
  const rights = Array(colCount).fill(colCount);
  for (let r = 0; r < rowCount; ++r) {
    let curLeft = 0;
    let curRight = colCount;

    // update height
    for (let c = 0; c < colCount; ++c) {
      if (matrix[r][c] === '1') {
        ++heights[c];
      } else {
        heights[c] = 0;
      }
    }

    // update left
    for (let c = 0; c < colCount; ++c) {
      if (matrix[r][c] === '1') {
        lefts[c] = Math.max(lefts[c], curLeft);
      } else {
        lefts[c] = 0;
        curLeft = c + 1;
      }
    }

    // update right
    for (let c = colCount; c >= 0; --c) {
      if (matrix[r][c] === '1') {
        rights[c] = Math.min(rights[c], curRight);
      } else {
        rights[c] = colCount;
        curRight = c;
      }
    }
    // area
    for (let c = 0; c < colCount; ++c) {
      ans = Math.max(ans, heights[c] * (rights[c] - lefts[c]));
    }
  }
  return ans;
};