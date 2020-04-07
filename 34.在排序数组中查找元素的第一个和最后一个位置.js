/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function (nums, target) {
// 	let res = []
// 	let left = 0
// 	let right = nums.length - 1
// 	while (left <= right) {
// 		if (nums[left] == target) {
// 			res.push(left)
// 		}
// 		if (nums[right] == target) {
// 			res.push(right)
// 		}
// 		left++
// 		right--
// 	}
// 	console.log("searchRange -> res", res)
// 	// for (let i = 0; i < nums.length; i++) {
// 	// 	if (nums[i] == target) {
// 	// 		res.push(i)
// 	// 	}
// 	// }

// 	if (res.length == 0) {
// 		return [-1, -1]
// 	} else {
// 		return [Math.min(...res), Math.max(...res)]
// 	}
// };
// 二分法先找出相等的值，然后再向前后寻找相同值的索引
var searchRange = function (nums, target) {
	let low = 0;
	let m = -1
	let hight = nums.length - 1;
	while (low <= hight) {
		let mid = parseInt((hight + low) / 2);
		if (target > nums[mid]) {
			low = mid + 1;
		} else if (target < nums[mid]) {
			hight = mid - 1;
		} else {
			m = mid
			break
		}
	}
	let i1 = m + 1
	while (nums[m] === nums[i1] && i1 < nums.length) {
		i1++
	}
	let i2 = m - 1
	while (nums[m] === nums[i2] && i2 >= 0) {
		i2--
	}
	if (m == -1) {
		return [-1, -1]
	} else {
		return [i2 + 1, i1 - 1]
	}
};
// @lc code=end

