/**
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 * 示例 1:
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 * 
 * 示例 2:
 * 输入: nums = [1], k = 1
 * 输出: [1]
 * 
 * 说明：
 * 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
 * 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};
  nums.forEach((n) => {
    if (map[n] !== undefined) {
      map[n] = map[n] + 1;
    } else {
      map[n] = 1;
    }
  });
  const bucket = [];
  for (const k in map) {
    const count = map[k];
    if (bucket[count]) {
      bucket[count].push(k);
    } else {
      bucket[count] = [k];
    }
  }
  const result = [];
  for (let i = bucket.length - 1; i >= 0; --i) {
    if (bucket[i]) {
      if (result.length < k) {
        result.push(...bucket[i]);
      } else {
        break;
      }
    }
  }
  return result;
};

topKFrequent([4,1,-1,2,-1,2,3], 2);