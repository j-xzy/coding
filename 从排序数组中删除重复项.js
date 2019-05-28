/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 
 * 示例
 * 给定 nums = [0,0,1,1,1,2,2,3,3,4]
 * 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4
 * 你不需要考虑数组中超出新长度后面的元素。
 */

/**
 * 思路:快慢指针
 * 一个快指针j,一个慢指针i
 * nums[i] === nums[j] 遇到重复时j跳一个
 * nums[i] !== nums[j] 遇到不等时说明已经跳过了重复,++i,再赋值
 */

/**
 * 空间复杂度 o(1)
 * 时间复杂度 o(n)
 */

/**
* @param {number[]} nums
* @return {number}
*/
function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < nums.length; ++j) {
    // 遇到相同的就跳过
    if (nums[j] !== nums[i]) {
      // 遇到不同的说明相同的已经跳过完了,该赋值了
      ++i;
      nums[i] = nums[j];
    }
  }
  nums.length = i + 1;
  return nums.length;
}

console.log(removeDuplicates([1, 1, 1]) === 1);
console.log(removeDuplicates([1, 2, 3]) === 3);
console.log(removeDuplicates([0, 0, 0, 1, 1, 2, 2, 3, 3, 4]) === 5);
