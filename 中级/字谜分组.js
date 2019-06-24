/**
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例:
 * 输入: ["eat", "tea", "tan ", "ate", "nat", "bat"],
 * 
 * 输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
 * 说明：
 所有输入均为小写字母。
 不考虑答案输出的顺序。
 */

// #region 解法1

// 思路：双重循环
// O(N*N*K) K为字符串最大长度

/**
* @param {string[]} strs
* @return {string[][]}
*/
var groupAnagrams1 = function (strs) {
  const result = [];
  const used = [];
  for (let i = 0; i < strs.length; ++i) {
    if (used[i]) {
      continue;
    }
    const temp = [strs[i]];
    for (let j = i + 1; j < strs.length; ++j) {
      if (isSame(strs[i], strs[j])) {
        used[j] = true;
        temp.push(strs[j]);
      }
    }
    result.push(temp);
  }

  return result;
};

function isSame(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const length = str1.length;
  const map1 = new Map();
  const map2 = new Map();
  for (let i = 0; i < length; ++i) {
    if (map1.has(str1[i])) {
      map1.set(str1[i], map1.get(str1[i]) + 1);
    } else {
      map1.set(str1[i], 1);
    }

    if (map2.has(str2[i])) {
      map2.set(str2[i], map2.get(str2[i]) + 1);
    } else {
      map2.set(str2[i], 1);
    }
  }

  for (const [value, count] of map1) {
    if (map2.get(value) !== count) {
      return false;
    }
  }

  return true;
}

// #endregion

// #region 解法2

// 思路：以排序后的只服从为key的map
// O(N*K*logK)  K为字符串最大长度

/**
* @param {string[]} strs
* @return {string[][]}
*/
var groupAnagrams2 = function (strs) {
  const result = new Map();
  strs.forEach((str) => {
    const key = str.split('').sort().join('');
    if (result.has(key)) {
      result.set(key, [...result.get(key), str])
    } else {
      result.set(key, [str]);
    }
  });

  return Array.from(result.values());
};

// #endregion

// #region 解法3

// 思路：以26个字符串出现顺序次数为key的map
// O(N*K)  K为字符串最大长度
/**
* @param {string[]} strs
* @return {string[][]}
*/
var groupAnagrams2 = function (strs) {
  const result = new Map();
  strs.forEach((str) => {
    const count = [];
    for (let i = 0; i < str.length; ++i) {
      const n = str[i].charCodeAt(0) - 97;
      if (typeof count[n] !== 'undefined') {
        count[n] = count[n] + 1;
      } else {
        count[n] = 1;
      }
    }
    let key = '';
    for (let i = 0; i < 26; ++i) {
      if (count[i]) {
        key += count[i];
      } else {
        key += 0;
      }
      key += '#';
    }
    if (result.has(key)) {
      result.set(key, [...result.get(key), str])
    } else {
      result.set(key, [str]);
    }
  });

  return Array.from(result.values());
};

// #endregion

// #region 解法4

// 思路：算术基本定理，又称为正整数的唯一分解定理，即：每个大于1的自然数，要么本身就是质数，要么可以写为2个以上的质数的积，而且这些质因子按大小排列之后，写法仅有一种方式。
// 利用这个，我们把每个字符串都映射到一个正数上。

// O(N*K)  K为字符串最大长度

/**
* @param {string[]} strs
* @return {string[][]}
*/
var groupAnagrams2 = function (strs) {
  const result = new Map();
  const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103];

  strs.forEach((str) => {
    let key = 1;
    for (let i = 0; i < str.length; ++i) {
      const n = str[i].charCodeAt(0) - 97;
      key = key * prime[n]
    }
    if (result.has(key)) {
      result.set(key, [...result.get(key), str])
    } else {
      result.set(key, [str]);
    }
  });

  return Array.from(result.values());
};

// #endregion

groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]);