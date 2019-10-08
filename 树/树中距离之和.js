/**
 * 给定一个无向、连通的树。树中有 N 个标记为 0...N-1 的节点以及 N-1 条边 。
 * 第 i 条边连接节点 edges[i][0] 和 edges[i][1] 。
 * 返回一个表示节点 i 与其他所有节点距离之和的列表 ans。
 * 
 * 示例 1:
 * 输入: N = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
 * 输出: [8,12,6,10,10,10]
 * 解释: 
 * 如下为给定的树的示意图：
  0
 / \
1   2
   /|\
  3 4 5

我们可以计算出 dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5) 
也就是 1 + 1 + 2 + 2 + 2 = 8。 因此，answer[0] = 8，以此类推。
说明: 1 <= N <= 10000
 */

/**
 * 解析： 
 * https://leetcode.com/problems/sum-of-distances-in-tree/solution/
 * https://leetcode-cn.com/problems/sum-of-distances-in-tree/solution/shu-zhong-ju-chi-zhi-he-by-leetcode/
 */

/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (N, edges) {
  if (N === 1) {
    return [0];
  }
  const graph = [];
  edges.forEach((nodes) => {
    if (!graph[nodes[0]]) {
      graph[nodes[0]] = new Set();
    }
    if (!graph[nodes[1]]) {
      graph[nodes[1]] = new Set();
    }
    graph[nodes[0]].add(nodes[1]);
    graph[nodes[1]].add(nodes[0]);
  });

  const ans = new Array(N);
  ans.fill(0);

  // 以下标为根的树的结点个数（包括根节点）
  const count = new Array(N);
  count.fill(1);

  dfs(0, -1);
  dfs2(0, -1);

  return ans;

  function dfs(node, parent) {
    for (let child of graph[node].values()) {
      if (child === parent) {
        continue;
      }
      dfs(child, node);
      count[node] += count[child];
      // 所有子节点到根节点的和
      ans[node] += ans[child] + count[child];
    }
  }

  function dfs2(node, parent) {
    for (let child of graph[node].values()) {
      if (child === parent) {
        continue;
      }
      ans[child] = ans[node] - count[child] + N - count[child];
      dfs2(child, node);
    }
  }
};

sumOfDistancesInTree(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]);