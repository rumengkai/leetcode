/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// var countAndSay = function (n) {
// 	let nums = 0
// 	let s = ''
// 	let arr = ['1']
// 	let t = ''
// 	for (let i = 0; i < n - 1; i++) {
// 		const tempArr = arr[arr.length - 1]
// 		for (let j = 0; j < tempArr.length; j++) {
// 			const e = tempArr[j]
// 			if (!s) {
// 				s = e
// 			}
// 			nums++
// 			if (e != tempArr[j + 1]) {
// 				t += nums + s
// 				nums = 0
// 				s = ''
// 			}
// 		}
// 		arr.push(t)
// 		t = ''
// 		s = ''
// 		nums = 0
// 	}
// 	return arr[n - 1]
// };
var countAndSay = function (n) {
	let nums = 0 // 个数
	let s = '' // 单个字符串
	let res = '1' // 保留前一项
	let t = '' // 临时转存
	for (let i = 0; i < n - 1; i++) {
		const len = res.length
		for (let j = 0; j < len; j++) {
			const e = res[j]
			s = s == '' ? e : s
			nums++
			if (e != res[j + 1]) {
				t += nums + s
				nums = 0
				s = ''
			}
		}
		res = t
		t = ''
	}
	return res
};
// var countAndSay = function (n) {
// 	let prev = '1'
// 	for (let i = 1; i < n; i++) {
// 		prev = prev.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
// 	}
// 	return prev
// };
// @lc code=end

