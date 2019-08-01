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
 * 思路:
 * 因为要求*不使用额外空间*所以排除使用Map计数
 * 注意到*某个元素只出现一次*和*其余每个元素均出现两次*所以采用异或可解
 * 
 * 异或: 
 * 相同数字异或为0,不同数字异或为1; 83^83 = 0
 * 0与任何数字异或为数字本身; 0^34 = 34
 */

/**
 * 时间复杂度: n
 * 空间复杂度: 0
 */

/**
* @param {number[]} nums
* @return {number}
*/
function singleNumber(nums) {
  if (nums.length === []) {
    return;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return console.error('不合法');
  }
  let result = 0;
  nums.forEach((num) => {
    result = result ^ num;
  });
  return result;
}

// test
console.log(singleNumber([2, 3, 3, 1, 2]) === 1);
console.log(singleNumber([2, 9, 8, 1, 8, 9, 1]) === 2);
console.log(singleNumber([2]) === 2);