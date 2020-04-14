/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (57.76%)
 * Likes:    264
 * Dislikes: 0
 * Total Accepted:    51K
 * Total Submissions: 87.8K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,1,2]
 * 输出:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var swap = function (nums, i, j) {
	if (i === j)
		return;
	[nums[i], nums[j]] = [nums[j], nums[i]]
};

var cal = function (nums, first, result) {
	if (nums.length === first) {
		result.push([...nums]);
		return;
	}

	const map = new Map();
	for (let i = first; i < nums.length; i++) {
		if (!map.get(nums[i])) {
			map.set(nums[i], true);
			swap(nums, first, i);
			cal(nums, first + 1, result);
			swap(nums, first, i);
		}
	}
};
var permuteUnique = function (nums) {
	if (nums == null)
		return;

	const res = [];
	cal(nums, 0, res);
	return res;
};

// var permuteUnique = function (nums) {
// 	let n = nums.length;
// 	let res = [];
// 	let tmpPath = [];
// 	let backtrack = (tmpPath) => {
// 		if (tmpPath.length == n) {
// 			res.push(tmpPath);
// 			return;
// 		}
// 		for (let i = 0; i < n; i++) {
// 			// 计算出现次数
// 			let n = nums.filter((item) => item == nums[i]).length
// 			let y = tmpPath.filter((item) => item == nums[i]).length
// 			if (!tmpPath.includes(nums[i]) || y < n) {
// 				tmpPath.push(nums[i]);
// 				backtrack(tmpPath.slice());
// 				tmpPath.pop();
// 			}
// 		}
// 	}
// 	backtrack(tmpPath);
// 	// 二维数组去重
// 	let tempObj = {};
// 	let r = []
// 	for (let n in res) {
// 		let itemString = res[n].join("");
// 		if (!tempObj[itemString]) {
// 			r.push(res[n])
// 		}
// 		tempObj[itemString] = true;
// 	}
// 	return r;
// };
// @lc code=end

