/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 *
 * https://leetcode-cn.com/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (78.01%)
 * Likes:    111
 * Dislikes: 0
 * Total Accepted:    20.5K
 * Total Submissions: 26.3K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 
 * 
 * 上图为 8 皇后问题的一种解法。
 * 
 * 给定一个整数 n，返回 n 皇后不同的解决方案的数量。
 * 
 * 示例:
 * 
 * 输入: 4
 * 输出: 2
 * 解释: 4 皇后问题存在如下两个不同的解法。
 * [
 * [".Q..",  // 解法 1
 * "...Q",
 * "Q...",
 * "..Q."],
 * 
 * ["..Q.",  // 解法 2
 * "Q...",
 * "...Q",
 * ".Q.."]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var res = 0
var totalNQueens = function (n) {
	let res = []
	dfs(n, [], res)
	return res.length
}

/**
 * 递归计算 N 皇后的解
 * @param {number} n
 * @param {number[]} tmp 长度为 n 的数组，tmp[i] 代表第 i 行的皇后放置的位置
 * @param {string[]} res
 */
function dfs (n, tmp, res) {
	// 如果 tmp 长度为 n，代表所有皇后放置完毕
	if (tmp.length === n) {
		// 把这种解记录下来
		res.push(
			tmp.map(i => {
				return str(i, n)
			})
		)
		return
	}
	// 每次有 n 个选择，该次放置在第几列
	for (let j = 0; j < n; j++) {
		// 如果当前列满足条件
		if (isValid(tmp, j)) {
			// 记录当前选择
			tmp.push(j)
			// 继续下一次的递归
			dfs(n, tmp, res)
			// 撤销当前选择
			tmp.pop()
		}
	}
}
function str (k, n) {
	let str = '';
	for (let i = 0; i < n; i++) {
		if (i === k) {
			str += 'Q'
		} else {
			str += '.'
		}
	}
	return str
}
function isValid (tmp, j) {
	let i = tmp.length
	for (let x = 0; x < i; x++) {
		let y = tmp[x]
		if (y === j || x - y === i - j || x + y === i + j) {
			return false
		}
	}
	return true
}

// @lc code=end
