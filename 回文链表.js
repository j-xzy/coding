/**
 * 请判断一个链表是否为回文链表
 * 
 * 示例 1:
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 */

// 1->2-3->2->1
// slow 2 3
// fast 3 1

// 1->2-3->2
// slow 2 3
// fast 3 null

// 1->2
// slow 2
// fast null

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let pre = null;
  let cur = slow;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  let first = head;
  let second = pre;

  while (second) {
    if (first.val !== second.val) {
      return false;
    }
    second = second.next;
    first = first.next;
  }

  return true;
}

const node1 = new ListNode(1);
const node2 = new ListNode(0);
const node3 = new ListNode(1);
node1.next = node2;
node2.next = node3;

isPalindrome(node1);
