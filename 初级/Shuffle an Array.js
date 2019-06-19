/**
 * 打乱一个没有重复元素的数组。
 * 
 * 示例:
 * 
 * // 以数字集合 1, 2 和 3 初始化数组。
 * int[] nums = {1,2,3};
 * Solution solution = new Solution(nums);
 * // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
 * solution.shuffle();
 * 
 * // 重设数组到它的初始状态[1,2,3]。
 * solution.reset();
 * 
 * // 随机返回数组[1,2,3]打乱后的结果。
 * solution.shuffle();
 */

/**
* @param {number[]} nums
*/
var Solution = function (nums) {
  this.origin = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.origin;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let arr = [...this.origin];
  const result = [];
  while (arr.length > 0) {
    const randomIdx = Math.ceil(Math.random() * arr.length - 1);
    result.push(arr.splice(randomIdx, 1)[0]);
  }
  return result;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

var obj = new Solution([1,2,3,4,5])
var param_1 = obj.reset()
var param_2 = obj.shuffle()