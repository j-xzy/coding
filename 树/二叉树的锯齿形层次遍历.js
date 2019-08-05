/**
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
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
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  let leftToRight = true;
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    result.push([]);
    const temp = [];
    while (queue.length > 0) {
      temp.push(queue.shift());
    }

    temp.forEach((node) => {
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);

      if (leftToRight) {
        result[result.length - 1].push(node.val);
      } else {
        result[result.length - 1].unshift(node.val);
      }
    })
    leftToRight = !leftToRight;
  }
  return result;
};