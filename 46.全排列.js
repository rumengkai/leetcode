/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (74.49%)
 * Likes:    609
 * Dislikes: 0
 * Total Accepted:    102K
 * Total Submissions: 136.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function (nums) {
// 	let n = nums.length;
// 	let res = [];
// 	let tmpPath = [];
// 	let backtrack = (tmpPath) => {
// 		if (tmpPath.length == n) {
// 			res.push(tmpPath);
// 			return;
// 		}
// 		for (let i = 0; i < n; i++) {
// 			if (!tmpPath.includes(nums[i])) {
// 				tmpPath.push(nums[i]);
// 				backtrack(tmpPath.slice());
// 				tmpPath.pop();
// 			}
// 		}
// 	}
// 	backtrack(tmpPath);
// 	return res;
// };



/**
 * @description 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const len = nums.length;
	const res = [];
	dfs([], 0, len, nums, res);
	return res;
};
/**
 *  
 * @param {number[]} cur 
 * @param {number} index 
 * @param {number} len 
 * @param {number[]} nums 
 * @param {[]} res 
 */
var dfs = (cur, index, len, nums, res) => {
	if (cur.length === len) {
		res.push(cur.concat());
		return;
	}
	for (let i = index; i < nums.length; i++) {
		swap(nums, i, index);
		cur.push(nums[index]);
		dfs(cur, index + 1, len, nums, res);
		cur.pop();
		swap(nums, i, index);
	}
}

var swap = (nums, i, j) => {
	[nums[i], nums[j]] = [nums[j], nums[i]];
}

// @lc code=end

