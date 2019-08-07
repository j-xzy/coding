/**
 * 给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
 * struct Node {
 *   int val;
 *   Node *left;
 *   Node *right;
 *   Node *next;
 * }
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 初始状态下，所有 next 指针都被设置为 NULL
 */

function Node(val, left, right, next) {
  this.val = val;
  this.left = left;
  this.right = right;
  this.next = next;
};

/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */

// 中序遍历
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) {
    return null;
  }
  const queue = [root];
  while (queue.length > 0) {
    let n = queue.length;
    let lastNode = null;
    for (let i = 0; i < n; ++i) {
      const node = queue.shift();
      if (lastNode) {
        lastNode.next = node;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      lastNode = node;
    }
  }
  return root;
};

// 递归
/**
 * @param {Node} root
 * @return {Node}
 */
var connect2 = function (root) {
  if (!root) {
    return null;
  }
  let left = root.left;
  let right = root.right;

  while (left) {
    left.next = right;
    left = left.right;
    right = right.left;
  }

  connect2(root.left);
  connect2(root.right);

  return root;
};