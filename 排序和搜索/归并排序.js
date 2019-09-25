// 时间复杂度：最好n*logn，平均：n*logn,最坏n*logn
// 空间复杂度：n
// 稳定排序

function mergeSort(nums) {
  if (nums.length === 1) {
    return nums;
  }
  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));
  const array = [];
  let p = 0;
  let q = 0;
  while (p < left.length || q < right.length) {
    if (p >= left.length) {
      array.push(right[q]);
      ++q;
      continue;
    }
    if (q >= right.length) {
      array.push(left[p]);
      ++p;
      continue;
    }
    if (left[p] < right[q]) {
      array.push(left[p]);
      ++p;
    } else {
      array.push(right[q]);
      ++q;
    }
  }
  return array;
}

console.log(mergeSort([4, 8, 1, 3, 4, 10, 3, 6, 8]).join(','))