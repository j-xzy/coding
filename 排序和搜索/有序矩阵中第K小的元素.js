/**
给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素。
请注意，它是排序后的第k小元素，而不是第k个元素。

示例:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

返回 13。
说明:
你可以假设 k 的值永远是有效的, 1 ≤ k ≤ n2 。
 */

// 二分查找解法
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length;
  let low = matrix[0][0];
  let high = matrix[n - 1][n - 1];
  while (low < high) {
    const mid = Math.floor((high + low) / 2);
    let count = 0;
    let r = 0;
    let c = n - 1;
    while (r < n && c >= 0) {
      if (matrix[r][c] > mid) {
        --c;
      } else {
        count = count + c + 1;
        ++r;
      }
    }
    if (count < k) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};

// 堆解法

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const len = matrix.length;
  const heap = matrix.map((nums, col) => ({ val: nums[0], col, row: 0 }));
  for (let i = Math.floor(len / 2) - 1; i >= 0; --i) {
    heapifyMin(heap, i);
  }
  let ans = heap[0].val;
  for (let i = 1; i < k; ++i) {
    heap[0] = {
      val: heap[0].row + 1 >= len ? Infinity : matrix[heap[0].col][heap[0].row + 1],
      col: heap[0].col,
      row: heap[0].row + 1
    };
    heapifyMin(heap, 0);
    ans = heap[0].val;
  }
  return ans;
};

function heapifyMin(nums, root) {
  let min = root;
  const left = 2 * min + 1;
  const right = 2 * min + 2;
  if (left < nums.length && nums[left].val < nums[min].val) {
    min = left;
  }
  if (right < nums.length && nums[right].val < nums[min].val) {
    min = right;
  }
  if (min !== root) {
    [nums[root], nums[min]] = [nums[min], nums[root]];
    heapifyMin(nums, min);
  }
}
