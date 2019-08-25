/**
 * 删除链表中等于给定值 val 的所有节点。
 * 
 * 示例:
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const dummy = new ListNode(-1);
  dummy.next = head;
  let node = dummy;
  while (node && node.next) {
    if (node.next.val === val) {
      node.next = node.next.next;
    }else {
      node = node.next;
    }
  }

  return dummy.next;
};

const node1 = new ListNode(1);
const node2 = new ListNode(1);
node1.next = node2;
