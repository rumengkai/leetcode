/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	var nums3 = [];
	function arr (nums1, nums2) {
		if (nums1[0] == undefined) {
			nums3 = nums3.concat(nums2);
			return nums3;
		}
		if (nums2[0] == undefined) {
			nums3 = nums3.concat(nums1);
			return nums3;
		}
		if (nums1[0] < nums2[0]) {
			nums3.push(nums1[0]);
			nums1.shift();
			return arr(nums1, nums2);
		} else {
			nums3.push(nums2[0]);
			nums2.shift();
			return arr(nums1, nums2);
		}
	}
	var arr3 = arr(nums1, nums2);
	var l = arr3.length;
	if (l % 2 == 0) {
		return (arr3[l / 2 - 1] + arr3[l / 2]) / 2;
	} else {
		return arr3[(l - 1) / 2];
	}
};
