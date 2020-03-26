/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	let result = [];
	let len = intervals.length;
	if (len == 0) {
		return [];
	}
	intervals.sort((a, b) => a[0] - b[0]);
	let i = 0;
	while (i < len) {
		let currLeft = intervals[i][0];
		let currRight = intervals[i][1];
		while (i < len - 1 && intervals[i + 1][0] <= currRight) {
			i++;
			currRight = Math.max(intervals[i][1], currRight);
		}
		result.push([currLeft, currRight]);
		i++;
	}
	return result;
};
// @lc code=end

