/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
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

function ListNode(val) {
  this.val = val;
  this.next = null;
}
[1, 2]
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 使用dummy可以很好解决删除head节点的问题
  const dummy = new ListNode(0);
  dummy.next = head;
  let slow = dummy;
  let fast = head;
  for (let i = 0; i < n; ++i) {
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};

const node1 = new ListNode(1);
const node2 = new ListNode(2);
node1.next = node2;

removeNthFromEnd(node1, 2);