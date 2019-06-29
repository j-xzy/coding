/**
 * 根据一棵树的前序遍历与中序遍历构造二叉树。 
 * 注意:
 * 你可以假设树中没有重复的元素。
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }
  return reConstructor(0, preorder.length - 1, 0, inorder.length - 1);
  function reConstructor(preStart, preEnd, inStart, inEnd) {
    const rootValue = preorder[preStart];
    const root = new TreeNode(rootValue);
    let idx = inStart;
    while (inorder[idx] !== rootValue && idx <= inEnd) {
      ++idx;
    }
    if (inorder[idx] !== root.val) {
      throw Error('输入不合法');
    }
    const leftLength = idx - inStart;
    if (leftLength > 0) {
      root.left = reConstructor(preStart + 1, preStart + leftLength, inStart, idx - 1);
    }
    if (idx < inEnd) {
      root.right = reConstructor(preStart + leftLength + 1, preEnd, idx + 1, inEnd);
    }

    return root;
  }
};
