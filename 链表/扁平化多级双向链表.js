/**
 * 您将获得一个双向链表，除了下一个和前一个指针之外，它还有一个子指针，可能指向单独的双向链表。这些子列表可能有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。
 * 扁平化列表，使所有结点出现在单级双链表中。您将获得列表第一级的头部。
 * 
 * 示例:
 * 输入:
 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL

输出:
1-2-3-7-8-11-12-9-10-4-5-6-NULL
 */

function Node(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
};

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) {
    return null;
  }
  const stack = [];
  let pre = null;
  stack.push(head);
  while (stack.length > 0) {
    const node = stack.pop();
    if (node.next) {
      stack.push(node.next);
    }
    if (node.child) {
      stack.push(node.child);
      node.child = null;
    }
    if (pre) {
      pre.next = node;
      node.prev = pre;
    }
    pre = node;
  }
  return head;
};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
const node9 = new Node(9);
const node10 = new Node(10);
const node11 = new Node(11);
const node12 = new Node(12);
node1.next = node2;
node2.prev = node1;
node2.next = node3;

node3.prev = node2;
node3.next = node4;
node3.child = node7;

node4.prev = node3;
node4.next = node5;

node5.prev = node4;
node5.next = node6;

node6.prev = node5;

node7.next = node8;

node8.prev = node7;
node8.next = node9;
node8.child = node11;

node9.prev = node8;
node9.next = node10;

node10.prev = node9;

node11.next = node12;
node12.prev = node11;

flatten(node1);