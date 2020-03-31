/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 与12题的思路反过来就是

var romanToInt = function (s) {
	let arr = {
		'M': 1000,
		'D': 500,
		'C': 100,
		'L': 50,
		'X': 10,
		'V': 5,
		'I': 1,
	}
	s = s.replace('CM', 'DCCCC')
	s = s.replace('CD', 'CCCC')
	s = s.replace('XC', 'LXXXX')
	s = s.replace('XL', 'XXXX')
	s = s.replace('IX', 'VIIII')
	s = s.replace('IV', 'IIII')
	var num = 0
	for (const e of s) {
		num += arr[e]
	}
	return num
};
// @lc code=end

