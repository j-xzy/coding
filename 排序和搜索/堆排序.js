// 时间复杂度：最好n*logn，平均：n*logn,最坏n*logn
// 空间复杂度： 1
// 不稳定排序

function heapSort(nums) {
  const size = nums.length;
  // 初始化大顶堆
  for (let i = Math.floor((size / 2) - 1); i >= 0; --i) {
    heapifyMax(nums, size, i);
  }
  for (let i = size - 1; i >= 0; --i) {
    // 将最大值移动到数组末尾
    [nums[0], nums[i]] = [nums[i], nums[0]];

    // 数组大小减1,从
    heapifyMax(nums, i, 0);
  }
  return nums;
}

// 大顶堆化(循环)
function heapifyMax(nums, size, root) {
  while (root * 2 + 1 < size) {
    let left = root * 2 + 1;
    let right = root * 2 + 2;
    if ((right >= size || nums[left] >= nums[right]) && nums[left] > nums[root]) {
      [nums[root], nums[left]] = [nums[left], nums[root]];
      root = left;
      continue;
    }
    if (right < size && nums[right] > nums[left] && nums[right] > nums[root]) {
      [nums[root], nums[right]] = [nums[right], nums[root]];
      root = right;
      continue;
    }
    break;
  }
}

// 大顶堆化(递归)
// function heapifyMax(nums, size, root) {
//   let largest = root;
//   const left = root * 2 + 1;
//   const right = root * 2 + 2;
//   if (left < size && nums[left] > nums[largest]) {
//     largest = left;
//   }
//   if (right < size && nums[right] > nums[largest]) {
//     largest = right;
//   }
//   if (largest !== root) {
//     [nums[root], nums[largest]] = [nums[largest], nums[root]];
//     heapifyMax(nums, size, largest);
//   }
// }
