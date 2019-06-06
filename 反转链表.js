/**
 * 反转一个单链表。
 * 
 * 示例:
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  let cur = head;
  let pre = null;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

// 1 -> 2 -> 3 -> 4
// 1 -> 2 <- 3 <- 4 

function reverseList2(head) {
  if (head === null || head.next === null) {
    return head;
  }
  const p = reverseList2(head.next);
  head.next.next = head;
  head.next = null;
  return p;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;

reverseList2(node1);