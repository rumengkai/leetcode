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

// var search = function (nums, target) {
// 	let l = 0
// 	let r = nums.length - 1
// 	while (l <= r) {
// 		let mid = r + l >> 1         // 取中间索引
// 		if (nums[mid] === target) return mid  // 找到了 直接返回
// 		// 如果第一个元素 小于等于 中间元素 表示 左边的是增序的 如[4,5,6,7,0,1,2]
// 		if (nums[l] <= nums[mid]) {
// 			// 如果target 小于 中间元素, 大于第一个元素 ,说明target处于 [l, mid]间
// 			if (nums[mid] > target && nums[l] <= target) {
// 				r = mid - 1
// 			} else {  // 否则处于 [mid + 1, r]中
// 				l = mid + 1
// 			}
// 		} else {
// 			// 否则 右边是增序的 如[6,7,0,1,2,4,5]
// 			// 如果target 大于中间元素 小于最后元素, 说明处于[mid + 1, r]中
// 			if (nums[mid] < target && nums[r] >= target) {
// 				l = mid + 1
// 			} else {
// 				// 否则处于[l, mid - 1]中
// 				r = mid - 1
// 			}
// 		}
// 	}
// 	return -1
// };
// @lc code=end

