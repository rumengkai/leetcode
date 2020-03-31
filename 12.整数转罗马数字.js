/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
// 循环替换
var intToRoman = function (num) {
	let arr = [
		{ s: 'M', v: 1000 },
		{ s: 'D', v: 500 },
		{ s: 'C', v: 100 },
		{ s: 'L', v: 50 },
		{ s: 'X', v: 10 },
		{ s: 'V', v: 5 },
		{ s: 'I', v: 1 },
	]
	let s = ''
	for (let i = 0; i < 7; i++) {
		let t = arr[i]
		while (Math.floor(num / t.v)) {
			s += t.s
			num -= t.v
		}
	}
	s = s.replace('DCCCC', 'CM')
	s = s.replace('CCCC', 'CD')
	s = s.replace('LXXXX', 'XC')
	s = s.replace('XXXX', 'XL')
	s = s.replace('VIIII', 'IX')
	s = s.replace('IIII', 'IV')
	return s
};
// @lc code=end

