/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 利用数组
// var isValidSudoku = function (board) {
// 	let t1 = [] // 列数据
// 	let t2 = [] // 小方格数据
// 	for (let i = 0; i < 9; i++) {
// 		const row = board[i]
// 		for (let j = 0; j < 9; j++) {
// 			// 行数据
// 			const e = board[i][j]
// 			if (e != '.' && row.indexOf(e) != j) {
// 				return false
// 			}

// 			// 列数据
// 			if (!t1[j]) {
// 				t1[j] = new Array()
// 			}
// 			if (e != '.' && t1[j].indexOf(e) != -1) {
// 				return false
// 			}
// 			t1[j].push(e)


// 			// 处理小方格
// 			if (!t2[j]) {
// 				t2[j] = new Array()
// 			}
// 			let k
// 			k = parseInt(i / 3) * 3 + parseInt(j / 3)
// 			if (e != '.' && t2[k].indexOf(e) != -1) {
// 				return false
// 			}
// 			t2[k].push(e)
// 		}
// 	}

// 	return true
// };

// 利用map
const isValidSudoku = function (board) {
	const col = new Map(); // 列数据
	const box = new Map(); // 小方格数据
	for (let i = 0; i < 9; i++) {
		const row = board[i];
		for (let j = 0; j < 9; j++) {
			const e = board[i][j];
			if (e !== '.') {
				k = ~~(i / 3) * 3 + ~~(j / 3);
				if (row.indexOf(e) != j || col.get(`${j}-${e}`) || box.get(`${k}-${e}`)) { // 存在重复
					return false;
				}
				col.set(`${j}-${e}`, true);
				box.set(`${k}-${e}`, true);
			}
		}
	}
	return true;
};

// var isValidSudoku = function (board) {
// 	// 三个方向判重
// 	let rows = {};
// 	let columns = {};
// 	let boxes = {};
// 	// 遍历数独
// 	for (let i = 0; i < 9; i++) {
// 		for (let j = 0; j < 9; j++) {
// 			let num = board[i][j];
// 			if (num != '.') {
// 				// 子数独序号
// 				let boxIndex = parseInt((i / 3)) * 3 + parseInt(j / 3);
// 				if (rows[i + '-' + num] || columns[j + '-' + num] || boxes[boxIndex + '-' + num]) {
// 					return false;
// 				}
// 				// 以各自方向 + 不能出现重复的数字 组成唯一键值，若出现第二次，即为重复
// 				rows[i + '-' + num] = true;
// 				columns[j + '-' + num] = true;
// 				boxes[boxIndex + '-' + num] = true;
// 			}
// 		}
// 	}
// 	return true;
// };

// @lc code=end
