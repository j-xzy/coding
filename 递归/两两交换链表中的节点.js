/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 示例:
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

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
var swapPairs = function (head) {
  return swap(head);

  function swap(h) {
    if (!h) {
      return null;
    }
    if(!h.next) {
      return h;
    }
    const temp = h.next.next;
    const n = h.next;
    h.next.next = h;
    h.next = swap(temp);
    return n;
  }
};