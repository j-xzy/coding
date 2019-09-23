// 时间复杂度：最好n，平均：n*n,最坏n*n
// 空间复杂度： 1
// 稳定排序

function bubbleSort(nums) {
  const len = nums.length;
  for (let i = len; i >= 0; --i) {
    let swapped = false;
    for (let j = 1; j < i; ++j) {
      if (nums[j] < nums[j - 1]) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return nums;
}
