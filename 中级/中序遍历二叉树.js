/**
 * 给定一个二叉树，返回它的中序 遍历。
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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

// 递归
var inorderTraversal = function (root) {
  const result = [];
  function recursive(root) {
    if (!root) {
      return null;
    }
    recursive(root.left)
    result.push(root.val);
    recursive(root.right)
  }

  recursive(root);

  return result;
};

// 迭代
var inorderTraversa2 = function (root) {
  const result = [];
  const stack = [];
  let curr = root;
  while (curr !== null || stack.length > 0) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }
    const top = stack.pop();
    result.push(top.val);
    curr = top.right;
  }
  return result;
};

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
node1.left = node2;
node1.right = node3;
inorderTraversa2(node1);