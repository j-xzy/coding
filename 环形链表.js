/**
 * 给定一个链表，判断链表中是否有环
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
 * @return {boolean}
 */
function hasCycle(head) {
  let fast = slow = head;

  while (fast && fast.next) {
    if(fast.next === slow) {
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }

  return false;
}
