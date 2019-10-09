/**
假设你有一个特殊的键盘包含下面的按键：

Key 1: (A)：在屏幕上打印一个 'A'。

Key 2: (Ctrl-A)：选中整个屏幕。

Key 3: (Ctrl-C)：复制选中区域到缓冲区。

Key 4: (Ctrl-V)：将缓冲区内容输出到上次输入的结束位置，并显示在屏幕上。

现在，你只可以按键 N 次（使用上述四种按键），请问屏幕上最多可以显示几个 'A'呢？

样例 1:

输入: N = 3
输出: 3
解释: 
我们最多可以在屏幕上显示三个'A'通过如下顺序按键：
A, A, A
 

样例 2:

输入: N = 7
输出: 9
解释: 
我们最多可以在屏幕上显示九个'A'通过如下顺序按键：
A, A, A, Ctrl A, Ctrl C, Ctrl V, Ctrl V
 

注释:
1 <= N <= 50
结果不会超过 32 位有符号整数范围。
 */

/**
 * @param {number} N
 * @return {number}
 */
var maxA = function (N) {
  const dp = [0];
  for (let i = 1; i <= N; ++i) {
    dp[i] = dp[i - 1] + 1;
    // j为若干Ctrl-V的起点
    for (let j = 2; j <= i; ++j) {
      dp[i] = Math.max(
        dp[i],
        dp[j - 2] * (i - j + 1)
      );
    }
  }
  return dp[N];
};

/**
 * @param {number} N
 * @return {number}
 */
var maxA = function (N) {
  const memo = {};
  return dp(N, 0, 0);

  function dp(n, cacheNum, screenNum) {
    if (n <= 0) {
      return screenNum;
    }
    if (memo[`${n}#${cacheNum}#${screenNum}`] !== undefined) {
      return memo[`${n}#${cacheNum}#${screenNum}`];
    }
    const ans = Math.max(
      dp(n - 1, cacheNum, screenNum + 1), // A
      dp(n - 1, cacheNum, screenNum + cacheNum), // Ctrl-V
      dp(n - 2, screenNum, screenNum) // Ctrl-A + Ctrl-C 肯定连续
    );
    memo[`${n}#${cacheNum}#${screenNum}`] = ans;
    return ans;
  }
};
