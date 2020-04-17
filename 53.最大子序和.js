/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (50.15%)
 * Likes:    1830
 * Dislikes: 0
 * Total Accepted:    205K
 * Total Submissions: 408.5K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力穷举法
// var maxSubArray = function (nums) {
// 	let res = nums[0]
// 	let len = nums.length
// 	let t = 0
// 	for (let i = 0; i < len; i++) {
// 		t = nums[i]
// 		if (res < t) res = t
// 		for (let k = i + 1; k < len; k++) {
// 			t += nums[k]
// 			if (t > res) res = t
// 		}
// 	}
// 	return res
// };
// 正数增益
// [-3,-2,-3]
var maxSubArray = function (nums) {
	let ans = nums[0];
	let sum = 0;
	for (const num of nums) {
		if (sum > 0) {
			sum += num;
		} else {
			sum = num;
		}
		ans = Math.max(ans, sum);
	}
	return ans;
};
// @lc code=end

