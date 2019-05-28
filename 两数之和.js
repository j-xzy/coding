/**
 * 
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 **/

/**
 * 思路:Map存值
 * 空间换时间
 * 
 * 空间复杂度O(n)
 * 时间复杂度O(n)
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; ++i) {
    const result = target - nums[i];
    if (map.has(result)) {
      return [map.get(result), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// test
console.log(twoSum([2, 7, 11, 15], 9).join(',') === '0,1');
console.log(twoSum([9, 2, 11, 15], 26).join(',') === '2,3');
console.log(twoSum([], 26).join(',') === '');
console.log(twoSum([1, 2, 3], 10).join(',') === '');