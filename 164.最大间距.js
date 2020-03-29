/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  nums.sort((a, b) => a - b);
  let max = 0;
  let len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    if (nums[i + 1] - nums[i] > max) {
      max = nums[i + 1] - nums[i];
    }
  }
  return max;
};
// @lc code=end
