/**
 * 合并两个有序数组
 * 给定两个*有序整数数组* nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 *成为一个有序数组*。
 * 说明:
 *   - 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 *   - 你可以假设nums1有足够的空间（空间大小大于或等于 m + n）*来保存 nums2*中的元素。
 * 示例:
 * 输入:
 *   nums1 = [1,2,3,0,0,0], m = 3
 *   nums2 = [2,5,6],       n = 3
 * 输出: [1,2,2,3,5,6]
 */

/**
 * 思路:
 * 从末尾比较两个数组的最大值
 */

 /**
 * 时间复杂度: n
 * 空间复杂度: 0
 */

/**
* @param {number[]} nums1
* @param {number} m
* @param {number[]} nums2
* @param {number} n
* @return {void} Do not return anything, modify nums1 in-place instead.
*/

function merge(nums1, m, nums2, n) {
  let mIdx = m - 1; //1
  let nIdx = n - 1; // 2

  while (nIdx >= 0 && mIdx >= 0) {
    if (nums2[nIdx] > nums1[mIdx]) {
      nums1[nIdx + mIdx + 1] = nums2[nIdx];
      --nIdx;
    } else {
      nums1[nIdx + mIdx + 1] = nums1[mIdx];
      --mIdx;
    }
  }
  if (nIdx >= 0) {
    nums1.splice(0, nIdx + 1, ...nums2.slice(0, nIdx + 1));
  }
}

// test
let num1 = [1, 2, 3];
let num2 = [2, 5, 6];
merge(num1, 3, num2, 3);
console.log(num1.join(',') === '1,2,2,3,5,6')

num1 = [0];
num2 = [1];
merge(num1, 1, num2, 1);
console.log(num1.join(',') === '0,1')

num1 = [];
num2 = [1];
merge(num1, 0, num2, 1);
console.log(num1.join(',') === '1')

num1 = [1];
num2 = [];
merge(num1, 1, num2, 0);
console.log(num1.join(',') === '1')