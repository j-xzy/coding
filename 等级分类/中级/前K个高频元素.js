/**
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 * 
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
  const map = new Map();
  nums.forEach((n) => {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  });
  const arr = [];
  for (let [key, value] of map.entries()) {
    if (typeof arr[value] !== 'undefined') {
      arr[value].push(key);
    } else {
      arr[value] = [key];
    }
  }
  const result = [];
  for (let i = arr.length - 1; i >= 0; --i) {
    if (result.length >= k) {
      break;
    }
    if (typeof arr[i] !== 'undefined') {
      result.push(...arr[i])
    }
  }

  return result;
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);