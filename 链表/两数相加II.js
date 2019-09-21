/**
 * 给定两个非空链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储单个数字。将这两数相加会返回一个新的链表。
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 * 
 * 进阶:
 * 如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。
 * 
 * 示例:
 * 输入: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出: 7 -> 8 -> 0 -> 7
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  l1 = reverseList(l1);
  l2 = reverseList(l2);
  const dummy = new ListNode();
  let node = dummy;
  let carry = 0;
  while (l1 && l2) {
    const value = l1.val + l2.val + carry;
    if (value > 9) {
      carry = 1;
    } else {
      carry = 0;
    }
    node.next = new ListNode(value % 10);
    l1 = l1.next;
    l2 = l2.next;
    node = node.next;
  }
  let l = l1 ? l1 : l2;
  while (l) {
    const value = l.val + carry;
    if (value > 9) {
      carry = 1;
    } else {
      carry = 0;
    }
    node.next = new ListNode(value % 10);
    l = l.next;
    node = node.next;
  }
  if (carry === 1) {
    node.next = new ListNode(1);
  }

  return reverseList(dummy.next);
};

var reverseList = function (head) {
  if (head === null) {
    return null;
  }
  if (head.next === null) {
    return head;
  }
  let cur = null;
  let next = head;
  while (next) {
    const temp = next.next;
    next.next = cur;
    cur = next;
    next = temp;
  }

  return cur;
};