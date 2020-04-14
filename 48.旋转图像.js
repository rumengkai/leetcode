/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 *
 * https://leetcode-cn.com/problems/rotate-image/description/
 *
 * algorithms
 * Medium (67.45%)
 * Likes:    416
 * Dislikes: 0
 * Total Accepted:    66.6K
 * Total Submissions: 98.3K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个 n × n 的二维矩阵表示一个图像。
 * 
 * 将图像顺时针旋转 90 度。
 * 
 * 说明：
 * 
 * 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
 * 
 * 示例 1:
 * 
 * 给定 matrix = 
 * [
 * ⁠ [1,2,3],
 * ⁠ [4,5,6],
 * ⁠ [7,8,9]
 * ],
 * 
 * 原地旋转输入矩阵，使其变为:
 * [
 * ⁠ [7,4,1],
 * ⁠ [8,5,2],
 * ⁠ [9,6,3]
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 给定 matrix =
 * [
 * ⁠ [ 5, 1, 9,11],
 * ⁠ [ 2, 4, 8,10],
 * ⁠ [13, 3, 6, 7],
 * ⁠ [15,14,12,16]
 * ], 
 * 
 * 原地旋转输入矩阵，使其变为:
 * [
 * ⁠ [15,13, 2, 5],
 * ⁠ [14, 3, 4, 1],
 * ⁠ [12, 6, 8, 9],
 * ⁠ [16, 7,10,11]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 使用另一个矩阵
// var rotate = function (matrix) {
// 	let len = matrix.length
// 	const t = JSON.parse(JSON.stringify(matrix))
// 	for (let i = 0; i < len; i++) {
// 		for (let k = 0; k < len; k++) {
// 			matrix[i][k] = t[len - 1 - k][i]
// 		}
// 	}
// 	return matrix
// };
var rotate = function (matrix) {
	let len = matrix.length
	let n = Math.ceil(len / 2)
	// 上下翻转
	for (let i = 0; i < n; i++) {
		for (let k = 0; k < len; k++) {
			[matrix[i][k], matrix[len - 1 - i][k]] = [matrix[len - 1 - i][k], matrix[i][k]]
		}
	}
	// 对角线翻转
	for (let i = 0; i < len; i++) {
		for (let k = i + 1; k < len; k++) {
			[matrix[i][k], matrix[k][i]] = [matrix[k][i], matrix[i][k]]
		}
	}
	return matrix
};
// @lc code=end

