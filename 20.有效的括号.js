/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	s = s.match(/\[|\]|\{|\}|\(|\)/g)
	if (!s || s.length === 0) {
		return true
	}
	let len = s.length
	let arr = [s[0]]
	let o = {
		')': '(',
		'}': '{',
		']': '[',
	}
	for (let i = 1; i < len; i++) {
		if (arr.length > 0 && arr[arr.length - 1] == o[s[i]]) {
			arr.pop()
		} else {
			arr.push(s[i])
		}
	}
	if (arr.length == 0) {
		return true
	} else {
		return false
	}
};
// @lc code=end

