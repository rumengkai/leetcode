/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 *
 * https://leetcode-cn.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (60.43%)
 * Likes:    376
 * Dislikes: 0
 * Total Accepted:    24K
 * Total Submissions: 39.5K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * 编写一个程序，通过已填充的空格来解决数独问题。
 * 
 * 一个数独的解法需遵循如下规则：
 * 
 * 
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * 
 * 
 * 空白格用 '.' 表示。
 * 
 * 
 * 
 * 一个数独。
 * 
 * 
 * 
 * 答案被标成红色。
 * 
 * Note:
 * 
 * 
 * 给定的数独序列只包含数字 1-9 和字符 '.' 。
 * 你可以假设给定的数独只有唯一解。
 * 给定数独永远是 9x9 形式的。
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/**
 * deep clone
 */
var deepClone = function (obj) {
	if (typeof obj !== 'object' || obj === null) {
		return obj;
	}
	let ret = Array.isArray(obj) ? [] : {};
	for (let k in obj) {
		ret[k] = deepClone(obj[k]);
	}
	return ret;
}

var solveSudoku = function (board) {
	let _q = [], _hash = {}, allow = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
	// 初始化
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] == '.') {
				// 初始化空格的所有可能值
				_hash[i * 9 + j] = Object.assign([], allow);
			} else {
				// 已填入的值
				_hash[i * 9 + j] = [board[i][j]];
			}
			_q.push(i * 9 + j);
		}
	}
	// 只有唯一解，否则会死循环
	function slove (q, hash) {
		while (q.length > 0) {
			let len = q.length;
			// 队尾删除避免索引混乱 （顺序好像也是可以的。。）
			for (let idx = len - 1; idx >= 0; idx--) {
				if (hash[q[idx]].length == 0) {
					return false; // 无任何可能取值，本次无解
				}
				if (hash[q[idx]].length == 1) {
					// 还原索引位置
					let i = Math.floor(q[idx] / 9), j = q[idx] % 9;
					board[i][j] = hash[q[idx]][0];
					delete hash[q[idx]];
					q.splice(idx, 1);
					// 删除关联位置的可能取值
					for (let a in hash) {
						let r = Math.floor(a / 9), c = a % 9;
						if (r == i || c == j || (Math.floor(i / 3) == Math.floor(r / 3) && Math.floor(j / 3) == Math.floor(c / 3))) {
							// delete
							let exist = hash[a].indexOf(board[i][j]);
							if (exist !== -1) {
								hash[a].splice(exist, 1);
							}
						}
					}
				} else {
					len--;  // 计数，
				}
			}
			// 出现多个位置多个可能取值，进入步骤【5】
			if (len == 0) {
				// 出现每个位置都有多个可能值，逐个假设尝试求解
				for (let n = 0; n < hash[q[0]].length; n++) {
					// 克隆状态，循环尝试求解
					// 之前用了Object.assign()浅拷贝导致我调试了n久
					let cloneHash = deepClone(hash);
					let cloneQ = deepClone(q);
					// 预先设定一个值
					cloneHash[cloneQ[0]] = [hash[q[0]][n]];
					if (slove(cloneQ, cloneHash)) {
						return true;    // 解题成功，否则回溯进入下一个循环
					}
				}
				// 所有可能值都失败，无解
				return false;
			}
		}
		return true;
	}
	slove(_q, _hash)
	return board;
};
// @lc code=end

