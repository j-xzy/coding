/**
 * 序列化是将数据结构或对象转换为一系列位的过程，以便它可以存储在文件或内存缓冲区中，或通过网络连接链路传输，以便稍后在同一个或另一个计算机环境中重建。
 * 设计一个算法来序列化和反序列化二叉搜索树。 对序列化/反序列化算法的工作方式没有限制。 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。
 * 编码的字符串应尽可能紧凑。
 * 注意：不要使用类成员/全局/静态变量来存储状态。 你的序列化和反序列化算法应该是无状态的。
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let str = '';
  traverse(root);
  return str.slice(1);

  function traverse(node) {
    if (!node) {
      return;
    }
    str += ',' + node.val;
    traverse(node.left);
    traverse(node.right);
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if(!data) {
    return null;
  }
  const preOrder = data.split(',').map((v) => Number(v));
  return reCon(0, preOrder.length - 1);

  function reCon(start, end) {
    const val = preOrder[start];
    const node = new TreeNode(val);
    let mid = start + 1;
    while (mid <= end && preOrder[mid] < val) {
      ++mid;
    }
    if (start + 1 <= mid - 1) {
      node.left = reCon(start + 1, mid - 1);
    }
    if (mid <= end) {
      node.right = reCon(mid, end);
    }
    return node;
  }
};
deserialize('2,1');
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */