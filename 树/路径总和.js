/**
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例: 
 * 给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) {
    return false;
  }
  sum -= root.val;
  if (!root.left && !root.right) {
    return sum === 0;
  }
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) {
    return false;
  }
  const stack = [root];
  const sumStack = [root.val];
  while (stack.length > 0) {
    const node = stack.pop();
    const curSum = sumStack.pop();
    if (node.right) {
      stack.push(node.right);
      sumStack.push(curSum + node.right.val)
    }
    if (node.left) {
      stack.push(node.left);
      sumStack.push(curSum + node.left.val)
    }
    if (!node.left && !node.right && curSum === sum) {
      return true;
    }
  }
  return false;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const node5 = new TreeNode(5);
const node4 = new TreeNode(4);
const node11 = new TreeNode(11);
const node7 = new TreeNode(7);
const node2 = new TreeNode(2);
node5.left = node4;
node4.left = node11;
node11.left = node7;
node11.right = node2;

hasPathSum(node5, 22);