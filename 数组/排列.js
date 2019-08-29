/**
 * 给定一个不存在重复的数组，返回所有长度为n的组合,
 * n 小于等于数组长度
 */

function permute(nums, n) {
  if (n === 0) {
    return [];
  }
  if (n === nums.length) {
    return [arr];
  }
  const ans = [];
  permuteCore([], 0);

  return ans;

  function permuteCore(arr, start) {
    if (arr.length === n) {
      ans.push(arr);
      return;
    }
    for (let i = start; i < nums.length; ++i) {
      permuteCore([...arr, nums[i]], i + 1);
    }
  }
}

permute([0,1,2,3,4],4)