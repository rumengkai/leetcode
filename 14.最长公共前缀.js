/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function (strs) {
// 	let len = strs.length
// 	if (len == 0) {
// 		return ''
// 	}
// 	if (len == 1) {
// 		return strs[0]
// 	}
// 	let coms = ''
// 	let i = 0
// 	let flag = true
// 	while (true) {
// 		let t = ''
// 		if (strs[0][i]) {
// 			t = strs[0][i]
// 		} else {
// 			break
// 		}
// 		for (let j = 0; j < len; j++) {
// 			if (strs[j][i] != t) {
// 				flag = false
// 				break
// 			};
// 		}
// 		if (!flag) {
// 			break
// 		}
// 		coms += t
// 		i++
// 	}
// 	return coms
// };
// var longestCommonPrefix = function (strs) {
// 	if (strs.length == 0)
// 		return "";
// 	let ans = strs[0];
// 	for (let i = 1; i < strs.length; i++) {
// 		let j = 0;
// 		for (; j < ans.length && j < strs[i].length; j++) {
// 			if (ans[j] != strs[i][j])
// 				break;
// 		}
// 		ans = ans.substr(0, j);
// 		if (ans === "")
// 			return ans;
// 	}
// 	return ans;
// };

var longestCommonPrefix = function (strs) {
	if (!strs.length) return '';
	let [a, ...b] = strs;
	let result = '';
	for (let i = 0; i < a.length; i++) {
		let flag = b.every(item => item[i] === a[i]);
		if (flag) result += a[i];
		else break;
	}
	return result;
};
// @lc code=end

