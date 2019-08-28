/**
 * A和B几堆石子在做游戏。偶数堆石子排成一行，每堆都有正整数颗石子 piles[i] 。
 * 游戏以谁手中的石子最多来决出胜负。石子的总数是奇数，所以没有平局。
 * A和李轮流进行，A先开始。 每回合，玩家从行的开始或结束处取走整堆石头。 这种情况一直持续到没有更多的石子堆为止，此时手中石子最多的玩家获胜。
 * 假设A和李都发挥出最佳水平，当A赢得比赛时返回 true ，当李赢得比赛时返回 false 。
 * 
 * 示例：
 * 输入：[5,3,4,5]
 * 输出：true
 * 解释：
 * A先开始，只能拿前 5 颗或后 5 颗石子 。
 * 假设他取了前 5 颗，这一行就变成了 [3,4,5] 。
 * 如果李拿走前 3 颗，那么剩下的是 [4,5]，A拿走后 5 颗赢得 10 分。
 * 如果李拿走后 5 颗，那么剩下的是 [3,4]，A拿走后 4 颗赢得 9 分。
 * 这表明，取前 5 颗石子对A来说是一个胜利的举动，所以我们返回 true 。
 * 
 * 提示：
 * 2 <= piles.length <= 500
 * piles.length 是偶数。
 * 1 <= piles[i] <= 500
 * sum(piles) 是奇数。
 */

// 题解： https://leetcode-cn.com/problems/stone-game/solution/jie-jue-bo-yi-wen-ti-de-dong-tai-gui-hua-tong-yong/
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  const dps = [];
  const len = piles.length;
  for (let r = 0; r < len; ++r) {
    dps.push([]);
    for (let c = 0; c < len; ++c) {
      dps[r].push([]);
    }
  }
  for (let l = 0; l < len; ++l) {
    for (let r = 0; r < len; ++r) {
      const c = l + r;
      if (c >= len) {
        break;
      }
      if (r === c) {
        dps[r][c] = [piles[r], 0];
      } else {
        const left = piles[r] + dps[r + 1][c][1];
        const right = piles[c] + dps[r][c - 1][1];
        if (left > right) {
          dps[r][c] = [left, dps[r + 1][c][0]];
        } else {
          dps[r][c] = [right, dps[r][c - 1][0]];
        }
      }
    }
  }
  return dps[0][len - 1][0] - dps[0][len - 1][1] > 0;
};
stoneGame([3, 9, 1, 2]);

/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  return true;
};