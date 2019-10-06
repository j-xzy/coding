/**
 * 给定一棵有 n 个结点的二叉树，你的任务是检查是否可以通过去掉树上的一条边将树分成两棵，且这两棵树结点之和相等。
 * 样例 1:
 * 输入:     
    5
   / \
  10 10
    /  \
   2   3
输出: True
解释: 
    5
   / 
  10
      
和: 15

   10
  /  \
 2    3

和: 15
 
样例 2:
输入:     
    1
   / \
  2  10
    /  \
   2   20

输出: False
解释: 无法通过移除一条树边将这棵树划分成结点之和相等的两棵子树。
 

注释 :

树上结点的权值范围 [-100000, 100000]。
1 <= n <= 10000
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
 * @return {boolean}
 */
var checkEqualTree = function (root) {
  const stack = [];
  const total = sum(root);
  // 排除根节点
  stack.pop();

  if (total % 2 !== 0) {
    // 不是偶数
    return false;
  }

  const target = total / 2;

  for (let i = 0; i < stack.length; ++i) {
    if(stack[i] === target) {
      return true;
    }
  }

  return false;

  function sum(node) {
    if (!node) {
      return 0;
    }
    const val = sum(node.left) + sum(node.right) + node.val;
    stack.push(val);
    return val;
  }
};