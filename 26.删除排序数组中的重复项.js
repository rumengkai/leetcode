/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 利用map
// var removeDuplicates = function (nums) {
// 	var o = new Map()
// 	for (const e of nums) {
// 		o.set(e, '')
// 	}
// 	let res = [...o]

// 	let len = res.length

// 	for (let i = 0; i < len; i++) {
// 		nums[i] = res[i][0]
// 	}

// 	return len
// };
// var removeDuplicates = function (nums) {
// 	let arr = []
// 	for (const e of nums) {
// 		if (arr.indexOf(e) == -1) {
// 			arr.push(e)
// 			nums[arr.length - 1] = e
// 		}
// 	}
// 	return arr.length
// };
// var removeDuplicates = function (nums) {
// 	let i = 0
// 	for (const e of nums) {
// 		if (nums.slice(0,i).indexOf(e) == -1) {
// 			nums[i] = e
// 			i++
// 		}
// 	}
// 	return i
// };
var removeDuplicates = function (nums) {
	let i = 0
	let len = nums.length
	for (let j=0;j<len;j++) {
		if (nums[j] != nums[j+1]) {
			nums[i] = nums[j]
			i++
		}
	}
	return i
};
// @lc code=end

