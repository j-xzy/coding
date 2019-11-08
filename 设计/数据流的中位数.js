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

const { HeapMin, HeapMax } = require('./堆');

// 大小堆解决
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.lo = new HeapMax();
  this.hi = new HeapMin();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.lo.push(num);
  this.hi.push(this.lo.pop());
  if (this.hi.size() > this.lo.size()) {
    this.lo.push(this.hi.pop());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.lo.size() === this.hi.size()) {
    return (this.lo.top() + this.hi.top()) / 2;
  }
  return this.lo.top();
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
