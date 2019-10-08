/**
给定一个非空二叉树，返回其最大路径和。

本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。

示例 1:

输入: [1,2,3]

       1
      / \
     2   3

输出: 6
示例 2:

输入: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

输出: 42
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let ans = -Infinity;
  gain(root);
  return ans;

  function gain(node) {
    if (!node) {
      return 0;
    }
    const leftGain = Math.max(gain(node.left), 0);
    const rightGain = Math.max(gain(node.right), 0);
    const price = node.val + leftGain + rightGain;
    ans = Math.max(ans, price);

    // 选择左边的路径还是右边的路径
    return node.val + Math.max(leftGain, rightGain);
  }
};