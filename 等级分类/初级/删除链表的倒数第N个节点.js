/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 说明：
 * 给定的 n 保证是有效的。
 * 
 * 进阶：
 * 你能尝试使用一趟扫描实现吗？
 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}
// [1,2]1
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  let first = head;
  let dummy = new ListNode(0);
  dummy.next = head;
  let second = dummy;

  for (let i = 0; i < n; ++i) {
    first = first.next;
  }
  while (first !== null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
// const node3 = new ListNode(3);
// const node4 = new ListNode(4);
// const node5 = new ListNode(5);
node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

removeNthFromEnd(node1, 2)