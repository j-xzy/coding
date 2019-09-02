/**
 *给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
 * 注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 
 * 示例 1:
 * 输入: [2,4,1], k = 2
 * 输出: 2
 * 解释: 在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2。
 * 
 * 示例 2:
 * 输入: [3,2,6,5,0,3], k = 2
 * 输出: 7
 * 解释: 在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4。
 * 随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3。
 */

// dp[i][k][0]、dp[i][k][1]表示第i天交易了k次不持有、持有股票的最大利润

// 迁徙方程：
// dp[i][k][0] = max(dp[i - 1][k][0], dp[i - 1][k - 1][1] + prices[i])
// dp[i][k][1] = max(dp[i - 1][k][1], dp[i - 1][k][0] - prices[i])


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (prices.length < 2 || k === 0) {
    return 0;
  }
  if(k >= prices.length / 2) {
    return maxProfitNoLimit(prices);
  }
  const dp = [[[0, -prices[0]]]];
  for (let n = 1; n <= k; ++n) {
    dp[0].push([]);
    dp[0][n] = [
      -Infinity,
      -Infinity
    ];
  }
  let max = 0;
  for (let day = 1; day < prices.length; ++day) {
    dp.push([]);
    for (let n = 0; n <= k; ++n) {
      if (n === 0) {
        dp[day][0] = [
          0,
          Math.max(dp[day - 1][0][1], -prices[day])
        ];
      } else {
        dp[day][n] = [
          Math.max(dp[day - 1][n][0], dp[day - 1][n - 1][1] + prices[day]),
          Math.max(dp[day - 1][n][1], dp[day - 1][n][0] - prices[day])
        ]
      }
      max = Math.max(dp[day][n][0], max);
    }
  }
  return max;
};

var maxProfitNoLimit = function (prices) {
  if (prices.length === 0) {
    return 0;
  }
  const dp = [[0, -prices[0]]];
  for (let day = 1; day < prices.length; ++day) {
    dp[day] = [
      Math.max(dp[day - 1][0], dp[day - 1][1] + prices[day]),
      Math.max(dp[day - 1][1], dp[day - 1][0] - prices[day])
    ];
  }
  return dp[dp.length - 1][0];
};

maxProfit(1, [3, 2, 6, 5, 0, 3])