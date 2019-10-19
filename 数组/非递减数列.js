/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let changeCount = 0;
  let curIdx = 0;
  while (curIdx < nums.length-1) {
    if (nums[curIdx] > nums[curIdx + 1]) {
      if (nums[curIdx - 1] > nums[curIdx + 1]) {
        nums[curIdx + 1] = nums[curIdx];
      } else {
        nums[curIdx] = nums[curIdx + 1];
        if (curIdx > 0) {
          --curIdx;
        }
      }
      ++changeCount;
      continue;
    }
    if (changeCount >= 2) {
      return false;
    }
    ++curIdx;
  }
  return changeCount <= 1;
};
