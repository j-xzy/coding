/**
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 
 * 示例：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
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
function mergeTwoLists(l1, l2) {
  let node = null;

  if(l1 || l2){
    node = new ListNode();
  }

  let head = node;
  let l1Node = l1;
  let l2Node = l2;

  while (l1Node || l2Node) {
    if (l1Node && l2Node) {
      if (l1Node.val > l2Node.val) {
        node.val = l2Node.val;
        l2Node = l2Node.next;
      } else if (l1Node.val < l2Node.val) {
        node.val = l1Node.val;
        l1Node = l1Node.next;
      } else if (l1Node.val === l2Node.val) {
        node.val = l1Node.val;
        node.next = new ListNode(l1Node.val);
        node = node.next;
        l2Node = l2Node.next;
        l1Node = l1Node.next;
      }
    } else {
      if (!l1Node && l2Node) {
        node.val = l2Node.val;
        l2Node = l2Node.next;
      }

      if (l1Node && !l2Node) {
        node.val = l1Node.val;
        l1Node = l1Node.next;
      }
    }

    if(l1Node || l2Node) {
      node.next = new ListNode();
      node = node.next;
    }
  }

  return head;
}