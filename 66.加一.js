/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	const len = digits.length;
	for (let i = len - 1; i >= 0; i--) {
		digits[i]++;
		digits[i] %= 10;
		if (digits[i] != 0)
			return digits;
	}
	digits.unshift(1);
	return digits;
};
// @lc code=end

