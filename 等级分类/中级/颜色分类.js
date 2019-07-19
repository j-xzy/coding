/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 
 * 注意:
 * 不能使用代码库中的排序函数来解决这道题。
 * 
 * 示例:
 * 
 * 输入: [2,0,2,1,1,0]
 * 输出: [0,0,1,1,2,2]
 * 
 * 进阶：
 *  一个直观的解决方案是使用计数排序的两趟扫描算法。
 * 首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
 * 你能想出一个仅使用常数空间的一趟扫描算法吗？
 */

// #region 解法一
// 思路： 遇到"0"放入队头, 遇到"2"放入队尾
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors1 = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length;) {
    ++count;
    if (count > nums.length) {
      break;
    }
    if (nums[i] === 2) {
      nums.splice(i, 1);
      nums.push(2);
      continue;
    }
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.unshift(0);
      ++i;
      continue;
    }
    ++i;
  }
};
// #endregion

// #region 解法二 荷兰国旗
// 三个指针（p0, p2 和curr）来分别追踪0的最右边界，2的最左边界和当前考虑的元素。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors2 = function (nums) {
  let p0 = 0;
  let p2 = nums.length - 1;
  let curr = 0;
  while (curr <= p2) {
    if(nums[curr] === 2) {
      const temp = nums[p2];
      nums[p2] = nums[curr];
      nums[curr] = temp;
      --p2;
      continue;
    }
    if(nums[curr] === 0) {
      const temp = nums[p0];
      nums[p0] = nums[curr];
      nums[curr] = temp;
      ++p0;
      ++curr;
      continue;
    }
    ++curr;
  }
};
// #endregion

sortColors2([2, 0, 2, 1, 1, 0]);