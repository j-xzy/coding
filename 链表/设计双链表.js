/**
设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。

在链表类中实现这些功能：

get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
 

示例：

MyLinkedList linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
linkedList.get(1);            //返回2
linkedList.deleteAtIndex(1);  //现在链表是1-> 3
linkedList.get(1);            //返回3
 
提示：

所有val值都在 [1, 1000] 之内。
操作次数将在  [1, 1000] 之内。
请不要使用内置的 LinkedList 库。
 */

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.len = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.len) {
    return - 1;
  }
  if (index === 0) {
    return this.head.val;
  }
  if (index === this.len - 1) {
    return this.tail.val;
  }
  let idx = 0;
  let node = this.head;
  while (node && idx < index) {
    node = node.next;
    ++idx;
  }
  return node.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val)
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.len, val)
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.len) {
    return;
  }
  if (this.len === 0) {
    this.head = this.tail = {
      pre: null,
      next: null,
      val
    };
    ++this.len;
    return;
  }
  if (index <= 0) {
    const h = this.head;
    this.head = {
      pre: null,
      next: h,
      val
    };
    h.pre = this.head;
    if (this.len === 1) {
      this.tail = h;
    }
    ++this.len;
    return;
  }
  if (index === this.len) {
    const t = this.tail;
    this.tail = {
      pre: t,
      next: null,
      val
    }
    t.next = this.tail;
    if (this.len === 1) {
      this.head = t;
    }
    ++this.len;
    return;
  }
  let curr = this.head;
  for (let i = 0; i < index; ++i) {
    curr = curr.next;
  }
  const node = {
    val
  };
  curr.pre.next = node;
  node.next = curr;
  node.pre = curr.pre;
  curr.pre = node;
  ++this.len;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.len) {
    return;
  }
  if (this.len === 1) {
    this.head = this.tail = null;
    --this.len;
    return;
  }
  if (index === 0) {
    if (this.len === 2) {
      this.head = this.tail;
      this.tail.pre = null;
    } else {
      this.head.next.pre = null;
      this.head = this.head.next;
    }
    --this.len;
    return;
  }
  if (index === this.len - 1) {
    if (this.len === 2) {
      this.tail = this.head;
      this.head.next = null;
    } else {
      this.tail.pre.next = null;
      this.tail = this.tail.pre;
    }
    --this.len;
    return;
  }
  let curr = this.head;
  for (let i = 0; i < index; ++i) {
    curr = curr.next;
  }
  curr.pre.next = curr.next;
  curr.next.pre = curr.pre;
  --this.len;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const ops = ["addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"];
const params = [[1], [3], [1, 2], [1], [1], [1]];
var obj = new MyLinkedList()
ops.forEach((op, idx) => {
  obj[op].apply(obj, params[idx]);
});