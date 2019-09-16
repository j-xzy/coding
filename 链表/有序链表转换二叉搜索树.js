/**
 * 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 * 
 * 示例:
 * 给定的有序链表： [-10, -3, 0, 5, 9],
 * 一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) {
    return null;
  }
  const nums = [];
  let node = head;
  while (node) {
    nums.push(node.val);
    node = node.next;
  }
  return sortedArrayToBST(nums, 0, nums.length - 1);
};

var sortedArrayToBST = function (nums, start, end) {
  const mid = start + Math.floor((end - start) / 2);
  const node = new TreeNode(nums[mid]);
  if (mid - 1 >= start) {
    node.left = sortedArrayToBST(nums, start, mid - 1);
  }
  if (end >= mid + 1) {
    node.right = sortedArrayToBST(nums, mid + 1, end);
  }
  return node;
};
