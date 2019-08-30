/**
 * 爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。
 * 最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：
 * 选出任一 x，满足 0 < x < N 且 N % x == 0 。
 * 用 N - x 替换黑板上的数字 N 。
 * 如果玩家无法执行这些操作，就会输掉游戏。
 * 只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 false。假设两个玩家都以最佳状态参与游戏。
 * 
 * 示例 1：
 * 输入：2
 * 输出：true
 * 解释：爱丽丝选择 1，鲍勃无法进行操作。
 * 
 * 示例 2：
 * 输入：3
 * 输出：false
 * 解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。
 * 
 * 提示：
 * 1 <= N <= 1000
 */

// 动态规划
// dp[n]代表数字为n的情况下，先拿的输赢情况
// dp[n-x]若为false，那么dp[n]为true n % x == 0 
// 由于针对一个n，x可以有很多个，所以循环查找所有x
/**
* @param {number} N
* @return {boolean}
*/
var divisorGame = function (N) {
  const dp = [true, false, true];
  for (let i = 3; i <= N; ++i) {
    dp[i] = false;
    for (let j = 0; j < i; ++j) {
      if (i % j === 0 && dp[i-j] === false) {
        dp[i] = true;
      }
    }
  }
  return dp[N];
};

// 数学法： 奇数的因子是奇数，偶数的可能是奇数也可能是偶数，奇数减奇数等于偶数
// 最终总会到N=2的情况
// 如果N为偶数，爱丽丝每次拿1，鲍勃只能一直拿奇数，爱丽丝胜
// 如果N为奇数，爱丽丝拿了之后，剩下偶数偶数，鲍勃每次拿一，鲍勃胜
/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
  return N % 2 === 0;
};