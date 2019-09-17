/**
 * 插入排序算法：
 * 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
 * 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
 * 重复直到所有输入数据插入完为止。
 * 
 * 示例 1：
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 * 
 * 示例 2：
 * 输入: -1->5->3->4->0
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
var insertionSortList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let end = head;
  while (end && end.next) {
    let target = end.next;
    let node = head;
    let pre = null;
    while (node !== target && target.val > node.val) {
      pre = node;
      node = node.next;
    }
    if (node === target) {
      end = end.next;
      continue;
    }
    if (pre === null) {
      end.next = target.next;
      target.next = head;
      head = target;
    } else {
      end.next = target.next;
      pre.next = target;
      target.next = node;
    }
  }
  return head;
};

let p1 = new ListNode(-1);
let p2 = new ListNode(5);
let p3 = new ListNode(3);
let p4 = new ListNode(4);
let p5 = new ListNode(0);

p1.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = p5;

insertionSortList(p1);
