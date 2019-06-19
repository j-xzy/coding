/**
 * 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
 * 给出两个整数 x 和 y，计算它们之间的汉明距离。
 * 
 * 输入: x = 1, y = 4
 * 输出: 2
 * 解释:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
          ↑   ↑
  上面的箭头指出了对应二进制位不同的位置。
 */

/**
* @param {number} x
* @param {number} y
* @return {number}
*/
var hammingDistance = function (x, y) {
  let count = 0;
  while (x !== 0 || y !== 0) {
    count += (x % 2) ^ (y % 2);
    x = Math.floor(x / 2);
    y = Math.floor(y / 2);
  }
  return count;
};

// test
console.log(hammingDistance(1, 4) === 2);