/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 *
 * https://leetcode-cn.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (33.53%)
 * Likes:    418
 * Dislikes: 0
 * Total Accepted:    39K
 * Total Submissions: 115.7K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 * 
 * 示例:
 * 
 * 输入: [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
 * 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 * 
 * 
 * 说明:
 * 
 * 假设你总是可以到达数组的最后一个位置。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 递归，思路应该对着，但就是超时了
// var jump = function (nums) {
// 	let resArr = [] // 保留所有可能结果
// 	if (nums.length <= 1) {
// 		return 0
// 	}
// 	function drump (arr, tempArr) {
// 		if (arr[0] >= arr.length - 1) {
// 			if (arr[0] >= 1 && arr.length > 1) {
// 				tempArr.push(1)
// 			}
// 			resArr.push(tempArr)
// 			return
// 		}
// 		for (let i = 1; i <= arr[0]; i++) {
// 			let t = new Array(...tempArr)
// 			t.push(1)
// 			drump(arr.slice(i), t)
// 		}
// 	}
// 	if (nums[0] >= nums.length - 1) {
// 		return 1
// 	}
// 	for (let i = 1; i <= nums[0]; i++) {
// 		let tempArr = []
// 		tempArr.push(1)
// 		drump(nums.slice(i), tempArr)
// 	}
// 	let res = resArr[0] ? resArr[0].length : 0
// 	for (const e of resArr) {
// 		if (e.length < res) {
// 			res = e.length
// 		}
// 	}
// 	return res
// };
// 优化之后，还是超时，
// var jump = function (nums) {
// 	let res = 0 // 保留所有可能结果
// 	if (nums.length <= 1) {
// 		return 0
// 	}
// 	function drump (arr, temp) {
// 		if (arr[0] >= arr.length - 1) {
// 			if (arr[0] >= 1 && arr.length > 1) {
// 				temp++
// 			}
// 			res == 0 ? res = temp : ''
// 			res = Math.min(res, temp)
// 			return
// 		}
// 		for (let i = 1; i <= arr[0]; i++) {
// 			let t = temp
// 			drump(arr.slice(i), ++t)
// 		}
// 	}
// 	if (nums[0] >= nums.length - 1) {
// 		return 1
// 	}
// 	for (let i = 1; i <= nums[0]; i++) {
// 		drump(nums.slice(i), 1)
// 	}
// 	return res
// };
var jump = function (nums) {
	var steps = 0;
	var canJumpMax = 0;
	var last_canJumpMax = 0;
	var len = nums.length;
	for (var i = 0; i < len - 1; i++) {
		canJumpMax = Math.max(canJumpMax, i + nums[i]);
		if (last_canJumpMax == i) {
			last_canJumpMax = canJumpMax;
			steps++;
		}
		if (last_canJumpMax >= len - 1) {
			break;
		}
	}
	return steps;
};
// @lc code=end

