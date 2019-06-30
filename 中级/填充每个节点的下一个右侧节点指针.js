/**
 * 给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
初始状态下，所有 next 指针都被设置为 NULL。

提示：

你只能使用常量级额外空间。
使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
 */

function Node(val, left, right, next) {
  this.val = val;
  this.left = left;
  this.right = right;
  this.next = next;
};


// #region 迭代
// 层次遍历
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) {
    return null;
  }
  if (!root.left || !root.right) {
    return root;
  }
  const queue = [root.left, root.right];
  while (queue.length > 0) {
    const count = queue.length;
    let last = queue.shift();
    if (last.left) {
      queue.push(last.left, last.right)
    }
    for (let i = 1; i < count; ++i) {
      const node = queue.shift();
      last.next = node;
      last = node;
      if (node.left && node.right) {
        queue.push(node.left, node.right)
      }
    }
  }
  return root;
};

// #endregion

// #region 递归

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) {
    return null;
  }
  let left = root.left;
  let right = root.right;
  while(left) {
    left.next = right;

    // 不同父节点
    left = left.right;
    right = right.left;
  }

  connect(root.left);
  connect(root.right);

  return root;
};

// #endregion

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

connect(node1);
