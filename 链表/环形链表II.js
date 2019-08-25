/**
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 进阶：
 * 你是否可以不用额外空间解决此题？
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// #region 解法一 双指针
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = fast = head;
  while (fast && fast.next && slow) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let p1 = head;
      let p2 = fast;
      while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
      }
      return p1;
    }
  }
  return null;
};
// #endregion

// #region 解法二 hash引用

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const map = new Map();
  let node = head;
  while (node) {
    if (map.has(node)) {
      return node;
    } else {
      map.set(node, -1);
    }
    node = node.next;
  }
  return null;
};
// #endregion