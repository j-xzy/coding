/**
 * 你将获得 K 个鸡蛋，并可以使用一栋从 1 到 N  共有 N 层楼的建筑。
 * 每个蛋的功能都是一样的，如果一个蛋碎了，你就不能再把它掉下去。
 * 你知道存在楼层 F ，满足 0 <= F <= N 任何从高于 F 的楼层落下的鸡蛋都会碎，从 F 楼层或比它低的楼层落下的鸡蛋都不会破。
 * 每次移动，你可以取一个鸡蛋（如果你有完整的鸡蛋）并把它从任一楼层 X 扔下（满足 1 <= X <= N）。
 * 你的目标是确切地知道 F 的值是多少。
 * 无论 F 的初始值如何，你确定 F 的值的最小移动次数是多少？
 * 
 * 示例 1：
 * 输入：K = 1, N = 2
 * 输出：2
 * 解释：
 * 鸡蛋从 1 楼掉落。如果它碎了，我们肯定知道 F = 0 。
 * 否则，鸡蛋从 2 楼掉落。如果它碎了，我们肯定知道 F = 1 。
 * 如果它没碎，那么我们肯定知道 F = 2 。
 * 因此，在最坏的情况下我们需要移动 2 次以确定 F 是多少。
 * 
 * 示例 2：
 * 输入：K = 2, N = 6
 * 输出：3
 * 
 * 示例 3：
 * 输入：K = 3, N = 14
 * 输出：4
 */

// 暴力记忆dp 复杂度O(K*N*N)
//  f(k,n) = min(1<=x<=n)(max(f(k-1, x - 1),f(k, n - x)))
// x为扔的楼层，碎了 ? 鸡蛋数量减一，楼层数量为x-1 : 鸡蛋数量不变，楼层数量为n-x
// 因为是最差情况，所以得取以上两种情况的最大值
// 遍历所有扔的情况，假如从1楼开始扔的、假如从2楼开始扔...假如从n楼开始扔，取f(k,n)最小值
/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function (K, N) {
  const map = {};
  return dp(K, N);

  function dp(k, n) {
    // 鸡蛋小于等于1的时候就只有扔n次才行（从1楼开始扔到n楼，这样才能保证找到 F 楼层）
    // 楼层等于0，扔0次，等于1，扔一次
    if (k <= 1 || n <= 1) {
      return n;
    }
    if (map[stamp(k, n)] !== undefined) {
      return map[stamp(k, n)];
    }
    let min = Infinity;

    // 遍历所有扔的情况，假如从1楼开始扔的、假如从2楼开始扔...假如从n楼开始扔，取最小值
    for (let i = 1; i <= n; ++i) {
      // 从i楼扔，如果碎了需要多少步、不碎需要多少步，取其最大值 步数加一
      const max = Math.max(dp(k - 1, i - 1), dp(k, n - i)) + 1;
      // 取最小值
      min = Math.min(min, max);
    }
    map[stamp(k, n)] = min;
    return min;
  }

  function stamp(k, n) {
    return k + '#' + n;
  }
};

// 自底向上dp O(K*N*N)
/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function (K, N) {
  if (K <= 1 || N <= 1) {
    return N;
  }
  const dp = [[], []];
  for (let n = 0; n <= N; ++n) {
    dp[1][n] = n;
  }
  for (let k = 2; k <= K; ++k) {
    dp.push([0, 1]);
  }
  for (let n = 2; n <= N; ++n) {
    for (let k = 2; k <= K; ++k) {
      let min = Infinity;
      for (let i = 1; i <= n; ++i) {
        min = Math.min(min, 1 + Math.max(dp[k - 1][i - 1], dp[k][n - i]));
      }
      dp[k][n] = min;
    }
  }
  return dp[K][N];
};


// 二分查找dp 复杂度O(K*N*logN)
//  f(k,n) = max(f(k-1, x - 1),f(k, n - x)
// 与暴力dp类似，但是 不用遍历所有扔的情况
// 注意到，f(k,n)是一个随n递增的函数， f(k-1,x-1) 随着x递增, f(k, n - x)随着x递减
// 对于一个x， f(k, n - x) ? x太小 : x太大, 所以可以二分寻找x,
// 一个100层， 如果从98层开始扔，那么一定是 f(k-1,97)(1-97层) 的值 大于 f(k, 2)(99,100层)
// 实际上就是要找到 摔坏与不摔坏最小移动次数相等的楼层x

/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
let map = {};
var superEggDrop = function (k, n) {
  // 鸡蛋小于等于1的时候就只有扔n次才行（从1楼开始扔到n楼，这样才能保证找到 F 楼层）
  // 楼层等于0，扔0次，等于1，扔一次
  if (k <= 1 || n <= 1) {
    return n;
  }
  const key = n * 1000 + k;
  if (map[key] !== undefined) {
    return map[key];
  }

  let start = 1;
  let end = n;
  let startValue;
  let endValue;

  // 二分寻找x
  while (start < end) {
    const mid = Math.floor((end + start) / 2);
    startValue = superEggDrop(k - 1, mid - 1); // 摔坏
    endValue = superEggDrop(k, n - mid); // 没有摔坏
    if (startValue < endValue) {
      start = mid + 1;
    } else if (startValue > endValue) {
      end = mid;
    } else {
      start = end = mid;
    }
  }
  // console.log(`k:${k};n:${n};start:${start};end:${end};startValue:${startValue};endValue:${endValue}`);
  const value = Math.max(startValue, endValue) + 1;
  map[key] = value;

  return value;
};