/**
 * 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。
 * 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
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
  if (!root) {
    return 'null';
  }
  const obj = {};
  traverse(root, obj);
  return JSON.stringify(obj);
  function traverse(node, t) {
    if (!node) {
      return;
    }
    t.val = node.val;
    if (node.left) {
      t.left = {};
      traverse(node.left, t.left);
    }
    if (node.right) {
      t.right = {};
      traverse(node.right, t.right);
    }
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const obj = JSON.parse(data);
  if(obj === null){
    return null;
  }
  const root = new TreeNode();
  traverse(obj, root);
  return root;
  function traverse(node, t) {
    if (!node) {
      return;
    }
    t.val = node.val;
    if (node.left) {
      t.left = new TreeNode();
      traverse(node.left, t.left);
    }
    if (node.right) {
      t.right = new TreeNode();
      traverse(node.right, t.right);
    }
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */