/**
 * 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
 * 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。
 *
 * 示例 1:
 * 输入: 1->2->3->4->5->NULL
 * 输出: 1->3->5->2->4->NULL
 * 
 * 输入: 1->2->3->4->NULL
 * 输出: 1->3->2->4->NULL
 * 
 *  1->3->4->5->null  (1)
 *  2->3->4->5->null
 * 
 *  1->3->4->5->null  (2)
 *  2->4->5->null
 * 
 *  1->3->5->null  (3)
 *  2->4->5->null
 * 
 *  1->3->5->null  (4)
 *  2->4->null
 * 
 *  1->3->5->null  (5)
 *  2->4->null
 * 
 * 示例 2:
 * 输入: 2->1->3->5->6->4->7->NULL 
 * 输出: 2->3->6->7->1->5->4->NULL
 * 
 * 说明:
 * 应当保持奇数节点和偶数节点的相对顺序。
 * 链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。
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
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }

  let even = head;
  let odd = head.next;
  let oddHead = odd;
  let cur = head;
  let isOdd = false;

  while (cur) {
    if (isOdd) {
      odd = cur;
    } else {
      even = cur;
    }
    isOdd = !isOdd;
    temp = cur.next;
    if (cur.next) {
      cur.next = cur.next.next;
    }
    cur = temp;
  }

  even.next = oddHead;

  return head;
};

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5= new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

oddEvenList(node1);