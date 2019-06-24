/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 2, 1, -1, -4]，
 * 满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (!nums.length) {
    return [];
  }

  // 排序
  nums.sort((a, b) => a - b);
  let r = [];

  for (let i = 0; i < nums.length - 1; i++) {
    let fix = nums[i]; // 确定最小值
    if (fix > 0) break; // 最小值大于0break
    if (i > 0 && fix == nums[i - 1]) continue; // 最小值相同，break

    let left = i + 1; // 左指针
    let right = nums.length - 1; // 右指针

    // 找出以num[i]为最小值的所有组合
    while (left < right) {
      let temp = fix + nums[left] + nums[right];
      if (temp === 0) {
        if (left === i + 1) {
          r.push([fix, nums[left], nums[right]]);
        } else if (nums[left] !== nums[left - 1]) {
          // 避免三个数重复
          // 为什么条件这么写: 最小值相同，如果左指针相同那右指针也相同
          r.push([fix, nums[left], nums[right]]);
        }
        left++; right--;
      } else if (temp < 0) {
        ++left;
      } else {
        --right;
      }
    }
  }
  return r;
};

threeSum([-4, -1, -1, 0, 1, 2])
threeSum([-2,0,0,2,2])