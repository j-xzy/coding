/**
中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。

例如，
[2,3,4] 的中位数是 3
[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：
void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。

示例：
addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2

进阶:
如果数据流中所有整数都在 0 到 100 范围内，你将如何优化你的算法？
如果数据流中 99% 的整数都在 0 到 100 范围内，你将如何优化你的算法？
 */

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.nums.push(num);
  this.nums.sort((a, b) => a - b);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const size = this.nums.length;
  if (size % 2 === 0) {
    const n1 = size / 2;
    return (this.nums[n1] + this.nums[n1 - 1]) / 2
  } else {
    return this.nums[Math.floor(size / 2)];
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var obj = new MedianFinder()
obj.addNum(1)
obj.addNum(2)
// obj.addNum(3)
obj.findMedian();