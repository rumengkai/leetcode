/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  }
  let len1 = haystack.length;
  let len2 = needle.length;
  if (len1 === len2) {
    if (haystack === needle) {
      return 0;
    } else {
      return -1;
    }
  }
  let len3 = len1 - len2 + 1;
  for (let i = 0; i < len3; i++) {
    // 优化，先找到首字母相等，再做判断
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, len2 + i) === needle) {
        return i;
      }
    }
  }
  return -1;
};
// var strStr = function (haystack, needle) {
//   return haystack.indexOf(needle);
// };

// @lc code=end
