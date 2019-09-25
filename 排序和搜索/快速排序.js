// 时间复杂度：最好n*logn，平均：n*logn,最坏n*n
// 空间复杂度：n
// 不稳定排序

function quicksort(nums) {
  return quicksortCore(nums, 0, nums.length - 1);
}

function quicksortCore(nums, lo, hi) {
  if (hi - lo < 1) {
    return nums;
  }
  const mid = partition(nums, lo, hi);
  quicksortCore(nums, lo, mid);
  quicksortCore(nums, mid + 1, hi);
  return nums;
}

function partition(nums, lo, hi) {
  const pivot = nums[lo];
  let flag = true;
  while (lo < hi) {
    if (flag) {
      if (nums[hi] >= pivot) {
        --hi;
        continue;
      }
      nums[lo] = nums[hi];
      ++lo;
      flag = !flag;
    } else {
      if (nums[lo] < pivot) {
        ++lo;
        continue;
      }
      nums[hi] = nums[lo];
      --hi;
      flag = !flag;
    }
  }
  nums[lo] = pivot;
  return lo;
}
