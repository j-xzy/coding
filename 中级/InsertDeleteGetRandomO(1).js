/**
 * 设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构。
 * insert(val)：当元素 val 不存在时，向集合中插入该项。
 * remove(val)：元素 val 存在时，从集合中移除该项。
 * getRandom：随机返回现有集合中的一项。每个元素应该有相同的概率被返回。
 *
 * 示例 :
 * // 初始化一个空的集合。
 * RandomizedSet randomSet = new RandomizedSet();
 *
 * // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
 * randomSet.insert(1);
 *
 * // 返回 false ，表示集合中不存在 2 。
 * randomSet.remove(2);
 *
 *  // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
 * randomSet.insert(2);
 *
 * // getRandom 应随机返回 1 或 2 。
 * randomSet.getRandom();
 *
 * // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
 * randomSet.remove(1);
 *
 * // 2 已在集合中，所以返回 false 。
 * randomSet.insert(2);
 *
 * // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
 * randomSet.getRandom();
 */

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.map = {};
  this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (typeof this.map[val] === 'undefined') {
    this.arr.push(val);
    this.map[val] = this.arr.length - 1;;
    return true;
  }
  return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (typeof this.map[val] === 'undefined') {
    return false;
  }
  if (this.arr.length === 1) {
    delete this.map[val];
    this.arr.pop();
    return true;
  }
  const idx = this.map[val];
  if (idx === this.arr.length - 1) {
    this.arr.pop();
    delete this.map[val];
    return true;
  }
  this.arr[idx] = this.arr.pop();
  this.map[this.arr[idx]] = idx;
  delete this.map[val];
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  if (this.arr.length === 0) {
    return null;
  }
  const idx = Math.floor(Math.random() * this.arr.length);
  return this.arr[idx];
};

var obj = new RandomizedSet();

obj.insert(0);
obj.insert(1);
obj.insert(2);
obj.insert(3);
obj.remove(3);
obj.remove(1);
obj.getRandom();

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */