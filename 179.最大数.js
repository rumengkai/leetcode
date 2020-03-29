/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
// 比较 ab 与 ba的大小，按降序排列；
// 再将数组转化为字符串。
var largestNumber = function(nums) {
  nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
  return nums[0] ? nums.join("") : "0";
};
// @lc code=end
