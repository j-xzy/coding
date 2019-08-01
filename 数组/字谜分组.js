/**
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 示例:
 * 
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * 输出:
 * [
 *  ["ate","eat","tea"],
 *  ["nat","tan"],
 *  ["bat"]
 * ]
 * 
 * 说明：
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 */

/**
* @param {string[]} strs
* @return {string[][]}
*/
var groupAnagrams = function (strs) {
  const map = {};
  const aCode = 97;
  for (let i = 0; i < strs.length; ++i) {
    const countMap = {};
    const str = strs[i];
    for (let n = 0; n < str.length; ++n) {
      const c = str.charCodeAt(n) - aCode;
      if (countMap[c] !== undefined) {
        countMap[c] = countMap[c] + 1;
      } else {
        countMap[c] = 1;
      }
    }
    let hash = '';
    for (let i = 0; i < 26; ++i) {
      if(countMap[i] === undefined) {
        hash += '0#';
      }else {
        hash += `${countMap[i]}#`;
      }
    }
    if(map[hash]) {
      map[hash].push(str);
    }else {
      map[hash] = [str];
    }
  }
  const result = [];
  for(let k in map) {
    result.push(map[k]);
  }
  return result;
};
