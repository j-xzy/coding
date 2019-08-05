/**
 * 给定一个二叉树，返回它的中序遍历。
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

//迭代
function inorderTraversal(root) {
  const stack = [];
  const result = [];
  let curr = root;
  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    const top = stack.pop();
    result.push(top.val);
    curr = top.right;
  }
  return result;
}

// 递归
var inorderTraversal1 = function (root) {
  const result = [];
  function traverCore(node) {
    if (!node) {
      return;
    }
    traverCore(node.left);
    result.push(node.val);
    traverCore(node.right);
  }
  traverCore(root);
  return result;
};

