/**
合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  return lists.reduce((pre, cur) => merge(pre, cur), null);
};

function merge(list1, list2) {
  let dummy = node = new ListNode(null);
  let p = list1;
  let q = list2;
  while (p || q) {
    if (!p) {
      node.next = q;
      break;
    }
    if (!q) {
      node.next = p;
      break;
    }
    if (p.val < q.val) {
      node.next = p;
      p = p.next;
    } else {
      node.next = q;
      q = q.next;
    }
    node = node.next;
  }

  return dummy.next;
}