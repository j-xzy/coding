/**
给定一个二叉树，原地将它展开为链表。

例如，给定二叉树

    1
   / \
  2   5
 / \   \
3   4   6
将其展开为：

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) {
    return;
  }
  if (!root.left) {
    return flatten(root.right);
  }
  let node = root.left;
  while (node.right) {
    node = node.right;
  }
  node.right = root.right;
  root.right = root.left;
  root.left = null;
  flatten(root.right);
};
