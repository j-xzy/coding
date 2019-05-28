/**
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false
 * 
 * 示例 1:
 * 输入: [1,2,3,1]
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: [1,2,3,4]
 * 输出: false
 */

 /**
  * 时间复杂度O(n2+n)
  * 空间复杂度O(1)
  */

 /**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  nums.sort()
  for(let i = 1; i < nums.length;i++) {
      if(nums[i]===nums[i-1]){
         return true
         }
  }
  return false;
}

console.log(containsDuplicate([1,2,3,1]) === true);
console.log(containsDuplicate([1,2,3,4]) === false);
