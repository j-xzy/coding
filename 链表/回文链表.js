/**
 * 请判断一个链表是否为回文链表。
 * 示例 1:
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 输入: 1->2->2
 * 输出: true
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题
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
var isPalindrome = function (head) {
  if (!head) {
    return true;
  }
  if (!head.next) {
    return true;
  }

  let slow = fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let mid = slow.next;
  if (fast === null) {
    mid = slow;
  }

  let pre = null;
  while(mid) {
    const temp = mid.next;
    mid.next= pre;
    pre = mid;
    mid = temp;
  }
  mid = pre;

  while (mid) {
    if (head.val !== mid.val) {
      return false;
    }
    head = head.next;
    mid = mid.next;
  }

  return true;
};
