/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	if (!nums.length) return -1;
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		let mid = left + Math.floor((right - left) / 2);
		if (nums[left] === target) return left;
		if (nums[right] === target) return right;
		if (nums[mid] === target) return mid;
		if (nums[mid] > target) {
			if (nums[left] < nums[right]) {
				right = mid - 1;
				continue;
			}
			if (target < nums[left]) {
				if (nums[mid] > nums[left]) {
					left = mid + 1;
				} else {
					right = mid - 1;
				}
			} else if (target > nums[left]) {
				right = mid - 1;
			}
		} else if (nums[mid] < target) {
			if (nums[left] < nums[right]) {
				left = mid + 1;
				continue;
			}
			if (target < nums[left]) {
				left = mid + 1;
			} else if (target > nums[left]) {
				if (nums[mid] > nums[left]) {
					left = mid + 1;
				} else {
					right = mid - 1;
				}
			}
		}
	}
	return -1;
};

// @lc code=end

