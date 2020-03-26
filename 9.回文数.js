/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// 方法一，字符串
// var isPalindrome = function (x) {
// 	let s = String(x)
// 	let len = s.length
// 	let l = Math.ceil(len / 2)
// 	for (let i = 0; i <= l; i++) {
// 		if (s[i] != s[len - i - 1]) {
// 			return false
// 		}
// 	}
// 	return true
// };
// 方法二，非字符串，数字反转
var isPalindrome = function (x) {
	if (x === 0) {
		return true
	} else if (x < 0 || !x) {
		return false
	}
	let y = 0
	let t = x
	while (t > 0) {
		y = y * 10 + t % 10
		t = Math.floor(t / 10)
	}
	if (y === x) {
		return true
	} else {
		return false
	}
};
// @lc code=end

