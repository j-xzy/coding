/**
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    result.push([]);
    const temp = [];
    while (queue.length > 0) {
      temp.push(queue.shift());
    }
    temp.forEach((node) => {
      result[result.length - 1].push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    });
  }
  return result;
};