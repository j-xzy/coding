/**
 * 你需要从一个包括括号和整数的字符串构建一棵二叉树。
 * 输入的字符串代表一棵二叉树。它包括整数和随后的0，1或2对括号。整数代表根的值，一对括号内表示同样结构的子树。
 * 若存在左子结点，则从左子结点开始构建。
 * 
 * 示例:
 * 输入: "4(2(3)(1))(6(5))"
 * 输出: 返回代表下列二叉树的根节点:

       4
     /   \
    2     6
   / \   / 
  3   1 5   
 
注意:
输入字符串中只包含 '(', ')', '-' 和 '0' ~ '9' 
空树由 "" 而非"()"表示。
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
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function (s) {
  if (!s) {
    return null;
  }
  let c = 0;
  while (s[c] !== '(' && s[c] !== ')' && s[c] !== undefined) {
    ++c;
  }
  const node = new TreeNode(s.slice(0, c));
  const strs = bracket(s.slice(c));
  node.left = str2tree(strs[0]);
  node.right = str2tree(strs[1]);
  return node;
};

function bracket(s) {
  const brackets = [];
  let strs = [];
  let start = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '(') {
      brackets.push('(');
    } else if (s[i] === ')') {
      brackets.pop();
      if (brackets.length === 0) {
        strs.push(s.slice(start + 1, i));
        start = i + 1;
      }
    }
  }
  return strs;
}

let a = str2tree('-4(2(3)(1))(6(5)(7))');
debugger