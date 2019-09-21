/**
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 * 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 示例 1:
 * 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
 * 
 * 示例 2:
 * 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
 */


// 从中间开始反转链表

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head) {
    return null;
  }
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let node = slow.next;
  slow.next = null;
  let pre = null;
  while (node) {
    let next = node.next;
    node.next = pre;
    pre = node;
    node = next;
  }
  let p = head;
  let q = pre;
  while (q) {
    let pNext = p.next;
    let qNext = q.next;
    p.next = q;
    q.next = pNext;
    p = pNext;
    q = qNext;
  }
  return head;
};