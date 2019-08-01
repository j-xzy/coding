/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const dummyHead = new ListNode();
  let p = l1;
  let q = l2;
  let carry = 0;
  let cur = dummyHead;
  while (p || q) {
    const x = p ? p.val : 0;
    const y = q ? q.val : 0;
    const val = x + y + carry;
    if (val > 10) {
      carry = 1;
    } else {
      carry = 0;
    }
    cur.next = new ListNode(val % 10);
    cur = cur.next;
    if(p) {
      p = p.next;
    }
    if(q) {
      q = q.next;
    }
  }

  if(carry > 0) {
    cur.next = new ListNode(1);
  }

  return dummyHead.next;
};

const node1 = new ListNode(2);
const node2 = new ListNode(4);
const node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;

const node4 = new ListNode(5);
const node5 = new ListNode(6);
const node6 = new ListNode(4);
node4.next = node5;
node5.next = node6;

addTwoNumbers(node1, node4);