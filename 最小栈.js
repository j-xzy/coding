/**
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
 * push(x) -- 将元素 x 推入栈中。
 * pop() -- 删除栈顶的元素。
 * top() -- 获取栈顶元素。
 * getMin() -- 检索栈中的最小元素。
 * 
 * 示例:
 * MinStack minStack = new MinStack()
 * minStack.push(-2)
 * minStack.push(0)
 * minStack.push(-3)
 * minStack.getMin();   --> 返回 -3
 * minStack.pop()
 * minStack.top();      --> 返回 0
 * minStack.getMin();   --> 返回 -2.
 */

/**
* initialize your data structure here.
*/
var MinStack = function () {
  this.stack = [];
  this.min = null;
  this.secondMin = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (this.stack.length === 1) {
    this.min = this.secondMin = x;
  } else {
    this.min = Math.min(this.min, x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const n = this.stack.pop();
  if (n === this.min) {
    this.min = Infinity;
    this.stack.forEach((num) => {
      this.min = Math.min(this.min, num);
    });
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};


var obj = new MinStack()
obj.push(x)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()
