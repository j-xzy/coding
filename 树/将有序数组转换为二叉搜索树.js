/**
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }

  return toBST(0, nums.length - 1);

  function toBST(left, right) {
    const mid = left + Math.floor((right - left) / 2);
    const node = new TreeNode(nums[mid]);
    if (mid - 1 >= left) {
      node.left = toBST(left, mid - 1);
    }
    if (mid + 1 <= right) {
      node.right = toBST(mid + 1, right);
    }
    return node;
  }
};
