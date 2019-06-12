/**
 * 给定一个二叉树，检查它是否是镜像对称的
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
 * @return {boolean}
 */
function isSymmetric1(root) {
  return isMirror(root, root);
}

function isMirror(t1, t2) {
  if (t1 === null && t2 === null) {
    return true;
  }
  if (t1 === null || t2 === null) {
    return false;
  }
  return t1.val === t2.val && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric2(root) {
  const queue = [root, root];
  while (queue.length > 0) {
    const t1 = queue.shift();
    const t2 = queue.shift();
    if (t1 === null && t2 === null) {
      continue;
    }
    if (t1 === null || t2 === null) {
      return false;
    }
    if (t1.val !== t2.val) {
      return false;
    }
    queue.push(t1.left, t2.right, t1.right, t2.left);
  }

  return true;
}