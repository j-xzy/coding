/**
 * 给定一个整数 n，生成所有由 1 ... n 为节点所组成的二叉搜索树。
 * 示例:
 * 输入: 3
 * 输出: 5
 * 解释:
 * 以上的输出对应以下 5 种不同结构的二叉搜索树：
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
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */


// 动态规划

// 1. G(n): 长度为n的序列的不同二叉搜索树的个数
// 2. F(i,n) 以i为根的不同二叉搜索树的个数

// G(n) = F(1,n) + F(2,n) + F(3,n) + ... + F(n,n)
// F(i,n) = G(i-1)*G(n-i)
// G(n) = G(0)*G(n-1) + G(1)*G(n-2)  + ... + G(n-1)*G(0)

// G(0) = 1
// G(1) = 1
// G(2) = G(0)*G(1) + G(1)*G(0) = 2

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const g = [1, 1];
  for (let i = 2; i <= n; ++i) {
    g[i] = 0;
    for (let j = 1; j <= i; ++j) {
      g[i] += g[j - 1] * g[i - j];
    }
  }
  return g[n];
};
