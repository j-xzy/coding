/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
 * 注意你不能在买入股票前卖出股票。
 * 
 * 示例 1:
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
 * 
 * 示例 2:
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 */

// dp解法

// dp[i][0],dp[i][1] 代表第i天不持有股票、持有股票的利润
// dp[n][0] 就为题解

// dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
// 第i天不持有等于 前一天也不持有 或 前一天持有但是今天卖出 的最大值

// dp[i][1] = max(dp[i-1][1], -prices[i])
// 第i天持有等于 前一天也持有 或 今天买入 的最大值

// base： dp[0][0] = 0, dp[0][1] = -prices[0]

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0;
  }
  const dp = [[0, -prices[0]]];
  for (let day = 1; day < prices.length; ++day) {
    dp[day] = [
      Math.max(dp[day - 1][0], dp[day - 1][1] + prices[day]),
      Math.max(dp[day - 1][1],  -prices[day])
    ];
  }
  return dp[dp.length - 1][0];
};

// #region 简单解法
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = Infinity;
  let profit = 0;
  prices.forEach((price) => {
    if (price < min) {
      min = price;
    }
    profit = Math.max(profit, price - min);
  });
  return profit;
};
// #endregion
