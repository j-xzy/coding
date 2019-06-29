/**
 * 编写一个程序，找到两个单链表相交的起始节点。
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
 * 思路：消除两个链表的长度差
 * 假如长度相同，就只用两个链表每次移动1比较就行了
 * A,B链表同时向后移动，移动到末尾后a=b,b=a，就能消除长度差了
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let pa = headA;
  let pb = headB;
  while (pa !== pb) {
    pa = pa === null ? headB : pa.next;
    pb = pb === null ? headA : pb.next;
  }
  return pa;
};