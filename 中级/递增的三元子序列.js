/**
 * 
 * 给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列*可以不连续*。
 * 
 * 数学表达式如下:
 * 
 * 如果存在这样的 i, j, k,  且满足 0 ≤ i < j < k ≤ n-1，
 * 使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。
 * 
 * 说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。
 * 
 * 示例 1:
 * 输入: [1,2,3,4,5]
 * 输出: true
 * 
 * 示例 2:
 * 输入: [5,4,3,2,1]
 * 输出: false
 * 
 *  示例 3:
 * 输入: [1,2,0,0,3]
 * 输出: true
 * 
 * 说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。
 */

// 思路：找到目前为止的最小值和次小值,然后当前值大于次小值则成立

// 正确性的保证
// 1:如果遇到比最小值还要小的值，将最小值赋予并不影响结果。 因为后面的值只要大于次小值就ok了 exp [2, 3, 0, 4]
// 2: 如果遇到大于最小值小于次小值,将次小值赋予并不影响结果。 因为次小值都变小了，后面的数只要大于次小值机会变多了，exp [0, 2, 1, 2, 1]

/**
* @param {number[]} nums
* @return {boolean}
*/
var increasingTriplet = function (nums) {
  if (nums.length < 3) {
    return false;
  }
  let min = second = Infinity;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] < min) {
      min = nums[i] // 目前为止的最小值
    } else if (nums[i] < second && min < nums[i]) {
      second = nums[i]; // 目前为止的次小值
    } else if (nums[i] > second) {
      return true;
    }
  }
  return false;
};

// test
console.log(increasingTriplet([0, 2, 1, 2, 1]) === true);
console.log(increasingTriplet([0, 4, 3, 2, 1]) === false);
console.log(increasingTriplet([3, 4, 2, 3, 1, 2, 3]) === true);
console.log(increasingTriplet([1, 1, -2, 6]) === false);
console.log(increasingTriplet([1, 1, 1, 1]) === false);
console.log(increasingTriplet([1, 2, 0, 1, 2]) === true);
console.log(increasingTriplet([1, 2, 3, 4, 5]) === true);
console.log(increasingTriplet([1, 2, 0, 0, 3]) === true);
console.log(increasingTriplet([5, 4, 3, 2, 1]) === false);