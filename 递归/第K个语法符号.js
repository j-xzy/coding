/**
 * 在第一行我们写上一个 0。接下来的每一行，将前一行中的0替换为01，1替换为10。
 * 给定行数 N 和序数 K，返回第 N 行中第 K个字符。（K从1开始）
 * 
 * 例子:
 * 输入: N = 1, K = 1
 * 输出: 0
 * 
 * 输入: N = 2, K = 1
 * 输出: 0
 * 
 * 输入: N = 2, K = 2
 * 输出: 1
 * 
 * 输入: N = 4, K = 5
 * 输出: 1
 * 
 * 解释:
 * 第一行: 0
 * 第二行: 01
 * 第三行: 0110
 * 第四行: 01101001
 *        1234567812345678
 * 注意：
 * N 的范围 [1, 30].
 * K 的范围 [1, 2^(N-1)].
 */


// 递归（父变体）
/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function (N, K) {
  if (N === 1) {
    return 0;
  }
  const v = kthGrammar(N - 1, Math.ceil(K / 2));
  if (v === 0) {
    if (K % 2 === 0) {
      return 1;
    } else {
      return 0;
    }
  } else {
    if (K % 2 === 0) {
      return 0;
    } else {
      return 1;
    }
  }
};


// 暴力法
/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function (N, K) {
  const arr = [0];
  for (let i = 1; i < N; ++i) {
    for (let j = Math.pow(2, i); j > 0; j = j - 2) {
      const value = arr[j / 2 - 1];
      if (value === 0) {
        arr[j - 2] = 0;
        arr[j - 1] = 1;
      } else {
        arr[j - 2] = 1;
        arr[j - 1] = 0;
      }
    }
  }
  return arr[K - 1];
};
