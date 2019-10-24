/**
回忆一下祖玛游戏。现在桌上有一串球，颜色有红色(R)，黄色(Y)，蓝色(B)，绿色(G)，还有白色(W)。 现在你手里也有几个球。

每一次，你可以从手里的球选一个，然后把这个球插入到一串球中的某个位置上（包括最左端，最右端）。接着，如果有出现三个或者三个以上颜色相同的球相连的话，就把它们移除掉。重复这一步骤直到桌上所有的球都被移除。

找到插入并可以移除掉桌上所有球所需的最少的球数。如果不能移除桌上所有的球，输出 -1 。

示例:
输入: "WRRBBW", "RB" 
输出: -1 
解释: WRRBBW -> WRR[R]BBW -> WBBW -> WBB[B]W -> WW （翻译者标注：手上球已经用完，桌上还剩两个球无法消除，返回-1）

输入: "WWRRBBWW", "WRBRW" 
输出: 2 
解释: WWRRBBWW -> WWRR[R]BBWW -> WWBBWW -> WWBB[B]WW -> WWWW -> empty

输入:"G", "GGGGG" 
输出: 2 
解释: G -> G[G] -> GG[G] -> empty 

输入: "RBYYBBRRB", "YRBGB" 
输出: 3 
解释: RBYYBBRRB -> RBYY[Y]BBRRB -> RBBBRRB -> RRRB -> B -> B[B] -> BB[B] -> empty 
标注:

你可以假设桌上一开始的球中，不会有三个及三个以上颜色相同且连着的球。
桌上的球不会超过20个，输入的数据中代表这些球的字符串的名字是 "board" 。
你手中的球不会超过5个，输入的数据中代表这些球的字符串的名字是 "hand"。
输入的两个字符串均为非空字符串，且只包含字符 'R','Y','B','G','W'。
 */

let ans = Infinity;

/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function (board, hand) {
  ans = Infinity;
  const m = {};
  [].forEach.call(hand, (s) => {
    m[s] = (m[s] || 0) + 1
  });
  backTrace(board, m, hand.length, 0);
  return ans === Infinity ? -1 : ans;
};

/**
 * 
 * @param {*} board 当前桌子上的球
 * @param {*} hand 手上的球map
 * @param {*} handCount 手上球个数
 * @param {*} ballCount 用了几个球
 */
function backTrace(board, hand, handCount, ballCount) {
  if (board.length === 0) {
    // 桌上球为空
    ans = Math.min(ans, ballCount);
    return;
  }
  if (handCount <= 0 || ballCount >= ans || ans === 0) {
    // 手上球没、使用的球已经大于等于结果
    return;
  }
  let left = -1;
  for (let i = 0; i < board.length; ++i) {
    // 向相邻颜色不同的球中插入
    if (board[i] !== board[i + 1]) {
      // 计算差几个
      const lack = 3 - (i - left);
      if (hand[board[i]] >= lack) {
        hand[board[i]] -= lack;
        let b = '';
        for (let n = 0; n < lack; ++n) {
          b += board[i];
        }
        let s = board.slice(0, i + 1) + b + board.slice(i + 1);
        s = boom(s);
        backTrace(s, hand, handCount - lack, ballCount + lack);
        hand[board[i]] += lack;
      }
      left = i;
    }
  }
}

function boom(s) {
  let c = 0;
  let left = 0;
  let right = 0;
  while (right <= s.length) {
    if (s[left] === s[right]) {
      ++c;
      ++right;
    } else {
      if (c >= 3) {
        return boom(s.slice(0, left) + s.slice(right));
      }
      left = right;
      c = 0;
    }
  }
  return s;
}

findMinStep('RRWWRRW', 'WR')