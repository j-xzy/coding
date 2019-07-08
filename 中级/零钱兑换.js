/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 示例 1:
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3 
 * 解释: 11 = 5 + 5 + 1
 * 
 * 示例 2:
 * 输入: coins = [2], amount = 3
 * 输出: -1
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 */

// 思路：动态规划

// f(11) = min(f(6),f(9),f(10)) + 1
// f(6) = min(f(1),f(4),f(5)) + 1
// f(1) = min(f(0)) + 1;

// #region 1 自底向上

// f(0) = 0;
// f(1) = min(f(0)) + 1
// f(2) = min(f(0), f(1)) + 1
// f(3) = min(f(0),f(1), f(2)) + 1

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const f = [0];
  for (let i = 1; i <= amount; ++i) {
    f[i] = Infinity;
    for (let n = 0; n < coins.length; ++n) {
      const v = f[i - coins[n]];
      if (typeof v === 'undefined') {
        continue;
      }
      f[i] = Math.min(f[i], v + 1);
    }
  }
  return f[amount] === Infinity ? -1 : f[amount];
};

// #endregion

// #region 2 自顶向下

// 减枝

// f(11) = min(f(6),f(9),f(10)) + 1
// f(6) = min(f(1),f(4),f(5)) + 1
// f(1) = min(f(0)) + 1;

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange2 = function (coins, amount) {
  const cache = [0];
  coins.sort((a, b) => a - b);
  const v = coinChange2Core(amount);
  return v === Infinity ? -1 : v;

  function coinChange2Core(num) {
    if (typeof cache[num] !== 'undefined') {
      return cache[num];
    }
    let min = Infinity;
    for (let i = 0; i < coins.length; ++i) {
      const rest = num - coins[i];
      if (rest >= 0) {
        min = Math.min(min, coinChange2Core(rest) + 1);
      } else {
        break;
      }
    }
    cache[num] = min;
    return min;
  }
};

// #endregion

// #region 3 深度优先

/*dfs方法*/
var coinChange3 = function (coins, amount) {
  coins.sort((a, b) => a - b);
  var res = Number.MAX_VALUE;
  coinExchange(amount, 0, coins.length - 1);
  return res === Number.MAX_VALUE ? -1 : res;

  function coinExchange(rest, count, index) {
    if (index < 0 || count + Math.floor(rest / coins[index]) >= res)
      return;
    if (rest % coins[index] === 0) {
      res = Math.min(res, count + rest / coins[index]);
      return;
    }
    for (var i = Math.floor(rest / coins[index]); i >= 0; i--) {
      coinExchange(rest - coins[index] * i, count + i, index - 1);
    }
  }
};

// #endregion

console.log(coinChange3([2, 5, 10, 1], 27) === 4);
console.log(coinChange3([1, 2], 3) === 2);
console.log(coinChange3([1, 2, 5], 9) === 3);
console.log(coinChange3([2], 3) === -1);
