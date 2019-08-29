/**
 * 给定一个整数 n，生成所有由 1 ... n 为节点所组成的二叉搜索树。
 * 示例:
 * 输入: 3
 * 输出:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
解释:
以上的输出对应以下 5 种不同结构的二叉搜索树：

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) {
    return [];
  }

  return generate(1, n);
};

function generate(start, end) {
  if (start > end) {
    return [null];
  }
  const ans = []
  for (let i = start; i <= end; ++i) {
    const lefts = generate(start, i - 1);
    const rights = generate(i + 1, end);
    lefts.forEach((left) => {
      rights.forEach((right) => {
        const node = new TreeNode(i);
        node.left = left;
        node.right = right;
        ans.push(node);
      });
    });
  }

  return ans;
}

generateTrees(3);