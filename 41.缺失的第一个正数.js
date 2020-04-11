/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let i = 1;
  while (nums.indexOf(i) > -1) {
    i++;
  }
  return i;
};
// @lc code=end
