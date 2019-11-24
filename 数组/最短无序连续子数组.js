/**
给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

你找到的子数组应是最短的，请输出它的长度。

示例 1:

输入: [2, 6, 4, 8, 10, 9, 15]
输出: 5
解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
说明 :

输入的数组长度范围在 [1, 10,000]。
输入的数组可能包含重复元素 ，所以升序的意思是<=。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  let l = Infinity;
  let r = -Infinity;
  nums.forEach((n, idx) => {
    if (n !== sortedNums[idx]) {
      l = Math.min(l, idx);
      r = Math.max(r, idx);
    }
  });
  return r - l > 0 ? r - l + 1 : 0;
};
