/**
实现一个数据结构支持以下操作：

Inc(key) - 插入一个新的值为 1 的 key。或者使一个存在的 key 增加一，保证 key 不为空字符串。
Dec(key) - 如果这个 key 的值是 1，那么把他从数据结构中移除掉。否者使一个存在的 key 值减一。如果这个 key 不存在，这个函数不做任何事情。key 保证不为空字符串。
GetMaxKey() - 返回 key 中值最大的任意一个。如果没有元素存在，返回一个空字符串""。
GetMinKey() - 返回 key 中值最小的任意一个。如果没有元素存在，返回一个空字符串""。
挑战：以 O(1) 的时间复杂度实现所有操作。
 */

/**
 * Initialize your data structure here.
 */
var AllOne = function () {
  this.map = {};
  this.list = new List();
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
  let node = this.map[key];
  if (node) {
    let next = node.next;
    if (!next || next.count !== node.count + 1) {
      next = {
        prev: null,
        next: null,
        count: node.count + 1,
        keys: {}
      };
      this.list.insertAfter(node, next);
    }
    delete node.keys[key];
    next.keys[key] = true;
    this.map[key] = next;
    this.clearNode(node);
  } else {
    let h = this.list.getHead();
    if (!h || h.count !== 1) {
      h = {
        prev: null,
        next: null,
        count: 1,
        keys: {}
      }
      this.list.addAtHead(h);
    }
    h.keys[key] = true;
    this.map[key] = h;
  }
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
  let node = this.map[key];
  if (!node) {
    return;
  }
  if (node.count === 1) {
    delete node.keys[key];
    delete this.map[key];
    this.clearNode(node);
  } else {
    let prev = node.prev;
    if (!prev || prev.count !== node.count - 1) {
      prev = {
        prev: null,
        next: null,
        count: node.count - 1,
        keys: {}
      }
      this.list.insertBefore(node, prev);
    }
    delete node.keys[key];
    this.clearNode(node);
    prev.keys[key] = true;
    this.map[key] = prev;
  }
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
  if (this.list.size === 0) {
    return '';
  }
  const tail = this.list.getTail();
  return Object.keys(tail.keys)[0];
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
  if (this.list.size === 0) {
    return '';
  }
  const head = this.list.getHead();
  return Object.keys(head.keys)[0];
};

AllOne.prototype.clearNode = function (node) {
  if (this.list.size === 0) {
    return '';
  }
  if (Object.keys(node.keys).length > 0) {
    return;
  }
  this.list.remove(node);
};

class List {
  constructor() {
    this.head = { prev: null, next: null, count: 0, keys: {} };
    this.tail = { prev: null, next: null, count: 0, keys: {} };
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  getHead() {
    if (!this.size) {
      return null;
    }
    return this.head.next;
  }

  getTail() {
    if (!this.size) {
      return null;
    }
    return this.tail.prev;
  }

  remove(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    --this.size;
  }

  addAtHead(node) {
    const next = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    next.prev = node;
    node.next = next;
    ++this.size;
  }

  insertAfter(after, node) {
    const next = after.next;
    after.next = node;
    node.prev = after;
    next.prev = node;
    node.next = next;
    ++this.size;
  }

  insertBefore(before, node) {
    const prev = before.prev;
    prev.next = node;
    node.prev = prev;
    node.next = before;
    before.prev = node;
    ++this.size;
  }
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
