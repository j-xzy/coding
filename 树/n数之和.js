/**
从给定的无序、不重复的数组data中，取出n个数，使其相加和为sum
不需要找到所有的解，找到一个解即可
 */

function getResult(data, n, sum) {
  let ans;
  dfs(0, sum, []);
  return ans;

  function dfs(start, rest, path) {
    if (ans) {
      return;
    }
    if (path.length > n) {
      return;
    }
    if (n - path.length > data.length - start) {
      return;
    }
    if (path.length === n && rest === 0) {
      return ans = path;
    }
    for (let i = start; i < data.length; ++i) {
      dfs(i + 1, rest - data[i], [...path, data[i]]);
    }
  }
}

getResult([2, 3, 5, 7], 3, 15)