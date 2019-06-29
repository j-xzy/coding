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
  if(!root) {
    return [];
  }
  const result = [];
  let queue = [root];
  let flag = true;
  while (queue.length > 0) {
    const count = queue.length;
    result.push([]);
    for (let i = 0; i < count; ++i) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      if(flag) {
        result[result.length - 1].push(node.val);
      }else {
        result[result.length - 1].unshift(node.val);
      }
    }
    flag = !flag
  }
  return result;
};

const node3 = new TreeNode(3);
const node9 = new TreeNode(9);
const node20 = new TreeNode(20);
const node15 = new TreeNode(15);
const node7 = new TreeNode(7);
node3.left = node9;
node3.right = node20;
node20.left = node15;
node20.right = node7;
zigzagLevelOrder(node3);