/**
 * 给定一个二叉树，找到其中最大的二叉搜索树（BST）子树，其中最大指的是子树节点数最多的。
 * 注意:
 * 子树必须包含其所有后代。
 * 
 * 示例:
 * 输入: [10,5,15,1,8,null,7]

   10 
   / \ 
  5  15 
 / \   \ 
1   8   7

输出: 3
解释: 高亮部分为最大的 BST 子树。
     返回值 3 在这个样例中为子树大小。
进阶:
你能想出用 O(n) 的时间复杂度解决这个问题吗？
 */

// 自底向上

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var largestBSTSubtree = function (root) {
  if (!root) {
    return 0;
  }
  let ans = 1;
  subtree(root);

  return ans;

  function subtree(node) {
    if (!node) {
      return { count: 0, min: Infinity, max: -Infinity };
    }
    let left = subtree(node.left);
    let right = subtree(node.right);
    if (left.count === -1 || right.count === -1) {
      return { count: -1 };
    }
    if (left.max >= node.val || right.min <= node.val) {
      // 当前节点小于左侧最大节点 或 大于右侧最小节点
      return { count: -1 };
    }

    // 以当前节点为根的最大最小值,如果为叶子节点,值为本身
    const max = right.max === -Infinity ? node.val : right.max;
    const min = left.min === Infinity ? node.val : left.min;
    
    // 左侧节点个数+右侧节点个数+本节点1 
    const count = left.count + right.count + 1;

    // 计算最大值
    ans = Math.max(ans, count);
    return { count, min, max };
  }
}

// 遍历每个节点。 复杂度n*n
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var largestBSTSubtree = function (root) {
  let max = 0;
  let noBst = new Map();
  traverse(root);
  return max;

  function traverse(node) {
    if (!node) {
      return null;
    }
    traverse(node.left);
    traverse(node.right);
    if (noBst.has(node.left) || noBst.has(node.right)) {
      return;
    }
    const count = bstCount(node);
    if (count === 0) {
      noBst.set(node, 0);
    }
    max = Math.max(max, count);
  }
};

function bstCount(root) {
  if (!root) {
    return 0;
  }
  let curr = root;
  let stack = [];
  let last;
  let count = 0;
  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    const node = stack.pop();
    if (last && last.val >= node.val) {
      return 0;
    }
    ++count;
    last = node;
    curr = node.right;
  }
  return count;
}