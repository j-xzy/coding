/**
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
 * 
 * 示例 1:
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 * 
 * 示例 2:
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
 */

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
var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const temp = slow.next;
  slow.next = null;

  const list1 = sortList(head);
  const list2 = sortList(temp);

  const dummy = new ListNode();
  let h = dummy;
  let p1 = list1;
  let p2 = list2;

  while (p1 && p2) {
    if (p1.val > p2.val) {
      h.next = p2;
      p2 = p2.next;
    } else {
      h.next = p1;
      p1 = p1.next;
    }
    h = h.next;
  }
  h.next = p1 ? p1 : p2;
  return dummy.next;
};
