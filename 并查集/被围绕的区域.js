/**
给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。

找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

示例:

X X X X
X O O X
X X O X
X O X X
运行你的函数后，矩阵变为：

X X X X
X X X X
X X X X
X O X X
解释:

被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 */


class UnionFind {
  constructor(nodeCount) {
    this.parents = [...Array(nodeCount)].map((_, idx) => idx);
  }

  union(node1, node2) {
    const root1 = this.find(node1);
    const root2 = this.find(node2);
    if (root1 !== root2) {
      this.parents[root2] = root1;
    }
  }

  find(node) {
    while (this.parents[node] !== node) {
      this.parents[node] = this.parents[this.parents[node]];
      node = this.parents[node];
    }
    return node;
  }

  isConnected(node1, node2) {
    return this.find(node1) === this.find(node2);
  }
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const rowCount = board.length;
  if (rowCount === 0) {
    return;
  }
  const directions = [[0, -1], [-1, 0], [0, 1], [1, 0]];
  const colCount = board[0].length;
  const unionFind = new UnionFind(rowCount * colCount);
  const dummyNode = rowCount * colCount + 1;

  for (let r = 0; r < rowCount; ++r) {
    for (let c = 0; c < colCount; ++c) {
      if (board[r][c] === 'X') {
        continue;
      }
      if (r === 0 || c === 0 || r === rowCount - 1 || c === colCount - 1) {
        unionFind.union(getNode(r, c), dummyNode);
        continue;
      }
      for (let i = 0; i < directions.length; ++i) {
        const d = directions[i];
        const r1 = r + d[0];
        const c1 = c + d[1];
        if (r1 < 0 || r1 >= rowCount || c1 < 0 || c1 >= colCount) {
          continue;
        }
        if (board[r1][c1] === 'X') {
          continue;
        }
        unionFind.union(getNode(r, c), getNode(r1, c1));
      }
    }
  }

  for (let r = 1; r < rowCount - 1; ++r) {
    for (let c = 1; c < colCount - 1; ++c) {
      if (board[r][c] === 'X') {
        continue;
      }
      if (unionFind.isConnected(getNode(r, c), dummyNode)) {
        continue;
      }
      board[r][c] = 'X';
    }
  }
  function getNode(r, c) {
    return r * colCount + c;
  }
};

solve([
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X']
]);
