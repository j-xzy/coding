// 时间复杂度：最好nlogn，平均：取决于步长系列,最坏n*logn*logn
// 空间复杂度： 1
// 不稳定排序

function shellSort(nums) {
  let gap = Math.floor(nums.length / 2);
  while (gap > 0) {
    for (let i = 0; i < nums.length - gap; i += 1) {
      let currentIndex = i;
      let gapShiftedIndex = i + gap;
      while (currentIndex >= 0) {
        if (nums[gapShiftedIndex] < nums[currentIndex]) {
          const tmp = nums[currentIndex];
          nums[currentIndex] = nums[gapShiftedIndex];
          nums[gapShiftedIndex] = tmp;
        } else {
          break;
        }
        gapShiftedIndex = currentIndex;
        currentIndex -= gap;
      }
    }
    gap = Math.floor(gap / 2);
  }
  return nums;
}
