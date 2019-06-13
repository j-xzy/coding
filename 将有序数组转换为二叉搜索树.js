/**
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 */

/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
  if (nums.length === 0) {
    return null;
  }
  return toBST(nums, 0, nums.length - 1);
}

function toBST(nums, start, end) {
  const middle = (start + end) >> 1;
  const node = new TreeNode(nums[middle]);
  if (start <= middle - 1) {
    node.left = toBST(nums, start, middle - 1);
  }
  if (middle + 1 <= end) {
    node.right = toBST(nums, middle + 1, end);
  }
  return node;
}

sortedArrayToBST([-10, -3, 0, 5, 9])