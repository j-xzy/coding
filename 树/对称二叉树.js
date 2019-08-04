/**
 * 给定一个二叉树，检查它是否是镜像对称的。
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  return isSymmetricCore(root.left, root.right);
};

function isSymmetricCore(node1, node2) {
  if (node1 && !node2) {
    return false;
  }
  if (node2 && !node1) {
    return false;
  }
  if (!node1 && !node2) {
    return true;
  }
  if (node1.val !== node2.val) {
    return false;
  }
  return isSymmetricCore(node1.left, node2.right) && isSymmetricCore(node1.right, node2.left);
}
