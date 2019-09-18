/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 示例 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * 则中位数是 2.0
 * 
 * 示例 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 则中位数是 (2 + 3)/2 = 2.5
 */

// 二分法
//                          left-part                          right-part
// 在num1中从c1点切一刀 [nums1[0],nums1[1] ...nums1[c1-1]], [nums1[c1],nums1[c1+1] ...nums1[len1-1]]
// 在num2中从c2点切一刀 [nums2[0],nums2[1] ...nums2[c2-1]], [nums2[c2],nums2[c2+1] ...nums2[len2-1]]
// 因为num1、num2有序。所以nums1[c1-1]<=nums1[c1] && nums2[c2-1] <= nums2[c2]
// 假如 nums1[c1-1] <=nums2[c2] && nums2[c2-1] <= nums1[c1]，
// 那么 任意left-part元素都是小于right-part元素
// 那么 math.max(nums1[c1-1],nums2[c2-1]) 就为num1、num2中第c1+c2大的数

// 先考虑m+n为奇数情况
// 所以现在问题转换为 已知 mid = math.ceil((len1 + len2)/2) (第mid大的数为中位数)  c2 === mid -c1, 
// 找到一个c1满足 nums1[c1-1] <=nums2[c2] && nums2[c2-1] <= nums1[c1]，
// 如果 nums1[c1-1] > nums2[2] 表明nums1[c1-1]应该减小，c1应该减小
// 如果 nums2[c2-1]> nums1[c1] 表明nums2[c2-1]应该减小，c2应该减小，所以c1应该增大

// m+n为偶数情况
// 中位数有两个，大的一个为math.min(nums1[c1],nums1[c2]);

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    // 始终让num1元素最少
    const temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }
  const len1 = nums1.length;
  const len2 = nums2.length;
  const mid = Math.ceil((len1 + len2) / 2);
  let start = 0;
  let end = len1;
  let l;
  let r;
  while (start <= end) {
    let c1 = start + Math.floor((end - start) / 2);
    let c2 = mid - c1;
    const left1 = c1 === 0 ? -Infinity : nums1[c1 - 1];
    const left2 = c2 === 0 ? -Infinity : nums2[c2 - 1];
    const right1 = c1 === len1 ? Infinity : nums1[c1];
    const right2 = c2 === len2 ? Infinity : nums2[c2];
    l = Math.max(left1, left2);
    r = Math.min(right2, right1);
    if (left1 > right2) {
      end = c1 - 1;
    } else if (left2 > right1) {
      start = c1 + 1;
    } else {
      break;
    }
  }
  if ((len2 + len1) % 2) {
    // 为奇数
    return l;
  } else {
    // 为偶数
    return (l + r) / 2
  }
};

console.log(findMedianSortedArrays(
  [1, 5, 6],
  [2, 3, 4],
) === 3.5);


console.log(findMedianSortedArrays(
  [],
  [1, 2, 3, 4, 5, 6, 7],
) === 4);

console.log(findMedianSortedArrays(
  [6, 7],
  [1, 2, 3, 4, 5],
) === 4);

console.log(findMedianSortedArrays(
  [1, 3],
  [2, 4, 5, 6, 7],
) === 4);

console.log(findMedianSortedArrays(
  [1],
  [2, 3, 4, 5, 6, 7],
) === 4);

console.log(findMedianSortedArrays(
  [],
  [1, 2, 3, 4, 5, 6, 7],
) === 4);

console.log(findMedianSortedArrays(
  [1, 6, 7],
  [2, 3, 4, 5],
) === 4);

console.log(findMedianSortedArrays(
  [1, 4, 7],
  [2, 3, 5, 6],
) === 4);