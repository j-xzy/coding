/**
 * 求众数
 * 给定一个大小为n的数组，找到其中的众数。众数是指在数组中*出现次数大于⌊n/2⌋*的元素。
 * 你可以假设数组是*非空*的，并且给定的数组*总是存在众数*。
 * 
 * 示例 1:
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 示例 2:
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 */

/**
 * 思路:
 * 采用map计数有额外的空间不考虑。
 * 
 * 摩尔投票法:
 * 每一轮投票中找出两个不同的元素并删除,最后剩下的可能就是投票最多的
 * 因为众数出现次数>⌊n/2⌋,所以一半被其它元素抵消,剩下的就只剩众数了
 */

 /**
 * 时间复杂度: n
 * 空间复杂度: 0
 */

/**
* @param {number[]} nums
* @return {number}
*/
function majorityElement(nums) {
  if (nums.length === 0) {
    return;
  }
  if (nums.length === 1) {
    return nums[0];
  }

  let count = 0;
  let result;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      result = nums[i]; // 减到0时替换
    }
    if (result === nums[i]) {
      ++count; // 遇到相等+1
    } else {
      --count; //　不等-1
    }
  }
  return result;
}

// test
console.log(majorityElement([3, 2, 3]) === 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]) === 2);