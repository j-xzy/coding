// 时间复杂度：最好n，平均：n*n,最坏n*n
// 空间复杂度： 1
// 稳定排序

function insertionSort(nums) {
  let len = nums.length;
  for (let i = 1; i < len; ++i) {
    let currIdx = i;
    while (nums[currIdx - 1] !== undefined && nums[currIdx] < nums[currIdx - 1]) {
      [nums[currIdx], nums[currIdx - 1]] = [nums[currIdx - 1], nums[currIdx]];
      --currIdx;
    }
  }
  return nums;
}
