/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 示例:
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 说明:
 *  - 必须在原数组上操作，不能拷贝额外的数组。
 *  - 尽量减少操作次数。
 */

/**
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
*/
function moveZeroes(nums) {
  let i = -1;
  for (let j = 0; j < nums.length; ++j) {
    if(nums[j]===0 && i < 0) {
      i = j;
    }
    if (nums[j] !== 0 && i > -1) {
      nums[i] = nums[j];
      nums[j] = 0;
      ++i;
    }
  }
}

// test
const arr1 = [0, 1, 0, 3, 12];
moveZeroes(arr1);
console.log(arr1.join('') === '131200')

const arr2 = [0, 0, 0, 0, 0];
moveZeroes(arr2);
console.log(arr2.join('') === '00000')

const arr3 = [1, 2, 3, 4, 0];
moveZeroes(arr3);
console.log(arr3.join('') === '12340')

const arr4 = [1, 2, 3, 4, 5];
moveZeroes(arr4);
console.log(arr4.join('') === '12345')

const arr5 = [];
moveZeroes(arr5);
console.log(arr5.join('') === '')