/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let len = nums.length
	for (let i = 0; i < len; i++) {
		const e = nums[i];
		if (target <= e) {
			return i
		}
		if (i == len - 1) {
			return len
		}
	}
};
// @lc code=end

