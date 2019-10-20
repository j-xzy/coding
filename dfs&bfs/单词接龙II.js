/**
给定两个单词（beginWord 和 endWord）和一个字典 wordList，找出所有从 beginWord 到 endWord 的最短转换序列。转换需遵循如下规则：

每次转换只能改变一个字母。
转换过程中的中间单词必须是字典中的单词。
说明:

如果不存在这样的转换序列，返回一个空列表。
所有单词具有相同的长度。
所有单词只由小写字母组成。
字典中不存在重复的单词。
你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
示例 1:

输入:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

输出:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]
示例 2:

输入:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

输出: []

解释: endWord "cog" 不在字典中，所以不存在符合要求的转换序列。
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return [];
  }
  const dic = {};
  wordList.forEach((word) => {
    for (let i = 0; i < word.length; ++i) {
      const newWord = word.substring(0, i) + '*' + word.substring(i + 1, word.length);
      const m = dic[newWord] || [];
      m.push(word);
      dic[newWord] = m;
    }
  });
  const queue = [beginWord];
  const visited = { [beginWord]: true };
  const paths = [[beginWord]];
  const ans = [];
  let flag = false;
  while (queue.length > 0) {
    let size = queue.length;
    const v = [];
    while (size--) {
      const word = queue.shift();
      const path = paths.shift();
      for (let i = 0; i < word.length; ++i) {
        const newWord = word.substring(0, i) + '*' + word.substring(i + 1, word.length);
        if (!dic[newWord]) {
          continue;
        }
        for (let n = 0; n < dic[newWord].length; ++n) {
          const w = dic[newWord][n];
          if (w === endWord) {
            flag = true;
            ans.push([...path, w]);
          } else if (!visited[w]) {
            v.push(w);
            paths.push([...path, w]);
            queue.push(w);
          }
        }
      }
    }
    v.forEach((w)=>{
      visited[w] = true;
    });
    if (flag) {
      break;
    }
  }
  return ans;
};

findLadders('red', 'tax', ["ted","tex","red","tax","tad","den","rex","pee"]);