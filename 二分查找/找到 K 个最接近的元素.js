/**
 * 给定一个排序好的数组，两个整数 k 和 x，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。如果有两个数与 x 的差值一样，优先选择数值较小的那个数。
 * 
 * 示例 1:
 * 输入: [1,2,3,4,5], k=4, x=3
 * 输出: [1,2,3,4]
 * 
 * 示例 2:
 * 输入: [1,2,3,4,5], k=4, x=-1
 * 输出: [1,2,3,4]
 * 
 * 说明:
 * k 的值为正数，且总是小于给定排序数组的长度。
 * 数组不为空，且长度不超过 104
 * 数组里的每个元素与 x 的绝对值不超过 104
 */


// #region 解法一 最优解法

// 问题可以转换为找到左边界，因为（左边界 + k）就是问题的解
// 1,2,3,4,5 k=4, x=3, 的解可以是（1,2,3,4)、(2,3,4,5), 因为它们(2、3、4)是相同的，所以得比较只用比较1、5谁离3近就选谁

/**
* @param {number[]} arr
* @param {number} k
* @param {number} x
* @return {number[]}
*/
var findClosestElements = function (arr, k, x) {
  if (k === 0) {
    return [];
  }
  const len = arr.length;
  if (len === 0) {
    return [];
  }
  let left = 0;
  let right = len - k;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid
    }
  }
  return arr.slice(left, left + k);
}
// #endregion


// #region 解法二
/**
* @param {number[]} arr
* @param {number} k
* @param {number} x
* @return {number[]}
*/
var findClosestElements = function (arr, k, x) {
  if (k === 0) {
    return [];
  }
  const idx = find(arr, x);
  const ans = [arr[idx]];
  let left = idx - 1;
  let right = idx + 1;
  while (ans.length < k) {
    if (left < 0) {
      ans.push(arr[right]);
      ++right;
      continue;
    }
    if (right >= arr.length) {
      ans.unshift(arr[left]);
      --left;
      continue;
    }
    if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
      ans.unshift(arr[left]);
      --left;
    } else {
      ans.push(arr[right]);
      ++right;
    }
  }

  return ans;
};

function find(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    if (arr[mid] >= x) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  if (start === 0) {
    return 0;
  }
  if (Math.abs(arr[start] - x) < Math.abs(arr[start - 1] - x)) {
    return start;
  }
  return start - 1;
}
// #endregion
