/**
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 说明:
 * 1 ≤ m ≤ n ≤ 链表长度。
 * 
 * 示例:
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (!head) {
    return null;
  }
  if (m === n) {
    return head;
  }
  let pre = null;
  let h1 = null;
  let h2;
  let end1;
  let end2 = null;
  let node = head;
  let c = 0;
  while (node) {
    ++c;
    if (c < m) {
      h1 = node;
    }
    if (c === m) {
      end1 = node;
    }
    if (c === n) {
      h2 = node;
    }
    if (c === n + 1) {
      end2 = node;
    }
    if (c >= m && c <= n) {
      const next = node.next;
      node.next = pre;
      pre = node;
      node = next;
    } else {
      node = node.next;
    }
  }
  if (h1) {
    h1.next = h2;
  }
  end1.next = end2;
  if (m === 1) {
    return h2;
  } else {
    return head;
  }
};