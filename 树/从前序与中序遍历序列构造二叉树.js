/**
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 * 注意:
 * 你可以假设树中没有重复的元素。 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }
  if (preorder.length === 1) {
    return new TreeNode(preorder[0]);
  }

  function buildTreeCore(preStart, preEnd, inStart, inEnd) {
    const node = new TreeNode(preorder[preStart]);

    let idx = inStart;
    while (inorder[idx] !== preorder[preStart] && idx <= inEnd) {
      ++idx;
    }
    if (inorder[idx] !== preorder[preStart]) {
      throw Error('输入不合法');
    }
    const length = idx - inStart;
    if (length > 0) {
      node.left = buildTreeCore(preStart + 1, preStart + length, inStart, inStart + length - 1);
    }
    if (idx < inEnd) {
      node.right = buildTreeCore(preStart + length + 1, preEnd, idx + 1, inEnd);
    }
    return node;
  }

  return buildTreeCore(0, inorder.length - 1, 0, inorder.length - 1);
};