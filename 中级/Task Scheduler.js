/**
 * 给定一个用字符数组表示的 CPU 需要执行的任务列表。其中包含使用大写的 A - Z 字母表示的26 种不同种类的任务。任务可以以任意顺序执行，
 * 并且每个任务都可以在 1 个单位时间内执行完。CPU 在任何一个单位时间内都可以执行一个任务，或者在待命状态。
 * 然而，两个相同种类的任务之间必须有长度为 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。
 * 你需要计算完成所有任务所需要的最短时间。
 * 
 * 示例 1：
 * 输入: tasks = ['A','A','A','B','B','B'], n = 2
 * 输出: 8
 * 执行顺序: A -> B -> (待命) -> A -> B -> (待命) -> A -> B.
 * 
 * 注：
 * 任务的总个数为 [1, 10000]。
 * n 的取值范围为 [0, 100]。
 */

// 结果取决于出现任务数最多的那个

/**
* @param {character[]} tasks
* @param {number} n
* @return {number}
*/
var leastInterval = function (tasks, n) {
  if (n === 0) {
    return tasks.length;
  }

  const map = {};
  let maxCount = Number.MIN_VALUE;
  tasks.forEach((item) => {
    if (map[item] === undefined) {
      map[item] = 1;
    } else {
      map[item] = map[item] + 1;
    }
    maxCount = Math.max(map[item], maxCount);
  });

  let c = 0;
  for (const key in map) {
    if (map[key] === maxCount) {
      ++c;
    }
  }
  return Math.max((maxCount - 1) * (n + 1) + c, tasks.length);
};

// test
leastInterval(["A", "A", "B", "B", "C", "C"], 1);
// [A,B,]

console.log(leastInterval(["A", "A", "A", "B", "B", "C"], 1) === 6);
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 0) === 6);