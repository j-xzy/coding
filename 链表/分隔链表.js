/**
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
 * 你应当保留两个分区中每个节点的初始相对位置。
 * 示例:
 * 输入: head = 1->4->3->2->5->2, x = 3
 * 输出: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) {
    return null;
  }
  const dummy = new ListNode();
  dummy.next = head;
  let node = head;
  let pre = dummy;
  let p = dummy;
  while (node) {
    if (node.val < x) {
      if (p.next === node) {
        p = node;
        pre = node;
        node = node.next;
      } else {
        const next = node.next;
        pre.next = pre.next.next;
        node.next = p.next;
        p.next = node;
        p = node;
        node = next;
      }
    } else {
      pre = node;
      node = node.next;
    }
  }
  return dummy.next;
};
