/**
给你一个链表的头节点 head，请你编写代码，反复删去链表中由 总和 值为 0 的连续节点组成的序列，直到不存在这样的序列为止。
删除完毕后，请你返回最终结果链表的头节点。
你可以返回任何满足题目要求的答案。
（注意，下面示例中的所有序列，都是对 ListNode 对象序列化的表示。）

示例 1：
输入：head = [1,2,-3,3,1]
输出：[3,1]
提示：答案 [1,2,1] 也是正确的。

示例 2：
输入：head = [1,2,3,-3,4]
输出：[1,2,4]

示例 3：
输入：head = [1,2,3,-3,-2]
输出：[1]
 
提示：
给你的链表中可能有 1 到 1000 个节点。
对于链表中的每个节点，节点的值：-1000 <= node.val <= 1000.
 */

// 思路： 前缀和，对于数组，求其前缀和，若出现相同的数字，则出现和为0子数组
// [1,3,-1,-2] 前缀和[1,4,3,1],其中出现相同的1代表下标1到下标3的和为0

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
var removeZeroSumSublists = function (head) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let sum = 0;
  let map = {};
  for (let d = dummy; d !== null; d = d.next) {
    sum += d.val;
    map[sum] = d;
  }
  sum = 0;
  for (let d = dummy; d !== null; d = d.next) {
    sum += d.val;
    d.next = map[sum].next;
  }
  return dummy.next;
};