/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function (digits) {
// 	let o = {
// 		2: 'abc',
// 		3: 'def',
// 		4: 'ghi',
// 		5: 'jkl',
// 		6: 'mno',
// 		7: 'pqrs',
// 		8: 'tuv',
// 		9: 'wxyz',
// 	}
// 	let len = digits.length
// 	if (len == 0) {
// 		return []
// 	}
// 	let res = []
// 	let i = 0
// 	function _str (i, s) {
// 		if (i == len) {
// 			res.push(s);
// 			return;
// 		}
// 		var tmp = o[digits[i]]
// 		for (let r = 0; r < tmp.length; r++) {
// 			_str(i + 1, s + tmp[r]);
// 		}
// 	}
// 	_str(i, '')
// 	return res
// };
// 循环
var letterCombinations = function (digits) {
	const maps = {
		2: "abc",
		3: "def",
		4: "ghi",
		5: "jkl",
		6: "mno",
		7: "pqrs",
		8: "tuv",
		9: "wxyz"
	}
	const res = [];
	for (let num of digits) {
		let w = maps[num];
		if (res.length > 0) {
			let tmp = [];
			for (let i = 0; i < res.length; i++) {
				let wl = w.length;
				for (let j = 1; j < wl; j++) {
					tmp.push(res[i] + w[j])
				}
				res[i] += w[0];
			}
			res.push(...tmp)
		} else {
			res.push(...w);
		}
	}
	return res;

};

// 算法BFS 广度优先搜索
// var letterCombinations = function (digits) {
// 	const len = digits.length;
// 	if (!len) return [];
// 	const record = {
// 		2: ['a', 'b', 'c'],
// 		3: ['d', 'e', 'f'],
// 		4: ['g', 'h', 'i'],
// 		5: ['j', 'k', 'l'],
// 		6: ['m', 'n', 'o'],
// 		7: ['p', 'q', 'r', 's'],
// 		8: ['t', 'u', 'v'],
// 		9: ['w', 'x', 'y', 'z']
// 	}
// 	const queue = record[digits[0]].slice(0);
// 	let i;
// 	let level = 1;
// 	while (level < len) {
// 		i = queue.length;
// 		while (i--) {
// 			const front = queue.shift();
// 			const selects = record[digits[level]];
// 			selects.forEach(select => queue.push(front + select));
// 			console.log(queue)
// 		}
// 		level++;
// 	}
// 	return queue;
// };

// @lc code=end

