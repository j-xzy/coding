/**
 * 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。
 * 你可以无限次地完成交易，但是你每次交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
 * 返回获得利润的最大值。
 * 
 * 示例 1:
 * 输入: prices = [1, 3, 2, 8, 4, 9], fee = 2
 * 输出: 8
 * 解释: 能够达到的最大利润:  
 * 在此处买入 prices[0] = 1
 * 在此处卖出 prices[3] = 8
 * 在此处买入 prices[4] = 4
 * 在此处卖出 prices[5] = 9
 * 总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
 * 
 * 注意:
 * 0 < prices.length <= 50000.
 * 0 < prices[i] < 50000.
 * 0 <= fee < 50000.
 */

// 思路: 动态规划

// dp[i][0],dp[i][1] 代表第i天不持有股票、持有股票的利润
// dp[n][0] 就为题解

// dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i] - fee)
// 第i天不持有等于 前一天也不持有 或 前一天持有但是今天卖出 的最大值

// dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
// 第i天持有等于 前一天也持有 或 前一天不持有但是今天买入 的最大值

// base： dp[0][0] = 0, dp[0][1] = -prices[0]

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  if (prices.length < 2) {
    return 0;
  }
  const dp = [[0, -prices[0]]];
  for (let day = 1; day < prices.length; ++day) {
    dp[day] = [
      Math.max(dp[day - 1][0], dp[day - 1][1] + prices[day] - fee),
      Math.max(dp[day - 1][1], dp[day - 1][0] - prices[day])
    ];
  }
  return dp[dp.length - 1][0];
};
