/**
 * 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​
 * 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
 * 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
 * 
 * 示例:
 * 输入: [1,2,3,0,2]
 * 输出: 3 
 * 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0;
  }
  const dp = [[0, -prices[0]], [Math.max(0, prices[1] - prices[0]), Math.max(-prices[1], -prices[0])]];
  for (let day = 2; day < prices.length; ++day) {
    dp[day] = [
      Math.max(dp[day - 1][0], dp[day - 1][1] + prices[day]),
      Math.max(dp[day - 1][1], dp[day - 2][0] - prices[day])
    ];
  }
  return dp[dp.length - 1][0];
};

maxProfit([1, 2, 3, 0, 2]);