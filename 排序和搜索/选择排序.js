// 时间复杂度：最好n*n，平均：n*n,最坏n*n
// 空间复杂度： 1
// 不稳定排序

function selectionSort(nums) {
  const len = nums.length;
  for (let i = 0; i < len; ++i) {
    let minIdx = i;
    for (let j = i + 1; j < len; ++j) {
      if (nums[minIdx] > nums[j]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [nums[i], nums[minIdx]] = [nums[minIdx], [i]];
    }
  }
  return nums;
}