/**
运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。
获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

进阶:
你是否可以在 O(1) 时间复杂度内完成这两种操作？

示例:
LRUCache cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
 */

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.kv = {};
  this.head = {
    value: -1,
    key: null,
    pre: null,
    next: null
  };
  this.tail = {
    value: -1,
    key: null,
    pre: null,
    next: null
  };
  this.head.next = this.tail;
  this.tail.pre = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.kv[key];
  if (!node) {
    return -1;
  }
  this.__remove(node);
  this.__insertHead(node);
  return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) {
    return;
  }
  if (this.kv[key]) {
    // 如果key值存在，则覆盖
    const node = this.kv[key];
    node.value = value;
    this.__remove(node);
    this.__insertHead(node);
    return;
  }
  if (this.size >= this.capacity) {
    const node = this.__remove(this.tail.pre);
    delete this.kv[node.key];
  } else {
    ++this.size;
  }
  const node = {
    pre: null,
    next: null,
    key,
    value
  };
  this.kv[key] = node;
  this.__insertHead(node);
};

LRUCache.prototype.__remove = function (node) {
  node.pre.next = node.next;
  node.next.pre = node.pre;
  return node;
}

LRUCache.prototype.__insertHead = function (node) {
  const next = this.head.next;
  this.head.next = node;
  node.pre = this.head;
  node.next = next;
  next.pre = node;
  return node;
}