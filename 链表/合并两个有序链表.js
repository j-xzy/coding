/**
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 示例：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  const dummy = new ListNode(0);
  let l3 = dummy.next = new ListNode();
  while (l1 || l2) {
    if (!l1) {
      l3.val = l2.val;
      l3.next = l2.next;
      break;
    }
    if (!l2) {
      l3.val = l1.val;
      l3.next = l1.next;
      break;
    }
    if (l1.val < l2.val) {
      l3.val = l1.val;
      l1 = l1.next;
    } else {
      l3.val = l2.val;
      l2 = l2.next;
    }
    l3 = l3.next = new ListNode();
  }

  return dummy.next;
};