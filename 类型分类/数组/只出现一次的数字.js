/**
 * 只出现一次的数字
 * 给定一个非空整数数组，除了某个元素*只出现一次*以外，其余每个元素*均出现两次*。找出那个只出现了一次的元素。
 * 说明：你的算法应该具有*线性时间复杂度*。你可以*不使用额外空间*来实现吗？
 * 
 * 示例 1:
 * 输入: [2,2,1]
 * 输出: 1
 * 
 * 示例 2:
 * 输入: [4,1,2,1,2]
 * 输出: 4
 */

/**
* @param {number[]} nums
* @return {number}
*/
function singleNumber(nums) {
  return nums.reduce((pre, cur) => pre ^ cur, 0)
}

// test
console.log(singleNumber([2, 3, 3, 1, 2]) === 1);
console.log(singleNumber([2, 9, 8, 1, 8, 9, 1]) === 2);
console.log(singleNumber([2]) === 2);