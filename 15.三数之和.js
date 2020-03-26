/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (20.36%)
 * Total Accepted:    34.9K
 * Total Submissions: 171.3K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
// 	var res = []
// 	var l = nums.length
// 	if (l < 3) {
// 		return res
// 	}
// 	nums = nums.sort()
// 	var f = 0 // 控制添加[0,0,0]
// 	for (let i = 0; i < l - 2; i++) {
// 		if (nums[i] > 0) break
// 		for (let j = i + 1; j < l - 1; j++) {
// 			for (let s = j + 1; s < l; s++) {
// 				if (nums[i] + nums[j] + nums[s] == 0) {
// 					var flag = 0
// 					if (res.length == 0) {
// 						if (nums[i] == 0 && nums[j] == 0) {
// 							f++
// 						}
// 						res.push([nums[i], nums[j], nums[s]])
// 					} else {
// 						// 去重添加
// 						for (let x = 0; x < res.length; x++) {
// 							var e = res[x]
// 							if (e.indexOf(nums[i]) >= 0 && e.indexOf(nums[j]) >= 0 && e.indexOf(nums[s]) >= 0) {
// 								flag++
// 								if (nums[i] == 0 && nums[j] == 0 && f == 0 && !(e[0] == 0 && e[1] == 0 && e[2] == 0)) {
// 									f++
// 									res.push([nums[i], nums[j], nums[s]])
// 								}
// 								break
// 							}
// 						}
// 						if (flag == 0) {
// 							// console.log(nums[i], nums[j], nums[s])
// 							res.push([nums[i], nums[j], nums[s]])
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// 	// 添加[0,0,0]特殊值
// 	// if (nums.indexOf(0) >= 0) {
// 	// 	nums = nums.slice(nums.indexOf(0) + 1)
// 	// 	if (nums.indexOf(0) >= 0) {
// 	// 		nums = nums.slice(nums.indexOf(0) + 1)
// 	// 		if (nums.indexOf(0) >= 0) {
// 	// 			var flag1 = false
// 	// 			for (let i = 0; i < res.length; i++) {
// 	// 				var a = res[i];
// 	// 				if (a[0] == a[1] && a[0] == 0) {
// 	// 					flag1 = true
// 	// 					break;
// 	// 				}
// 	// 			}
// 	// 			if (!flag1) {
// 	// 				res.push([0, 0, 0])
// 	// 			}
// 	// 		}
// 	// 	}
// 	// }
// 	return res
// };

var threeSum = function (nums) {
	var ans = []
	var len = nums.length

	if (nums == null || len < 3) {
		return ans
	}
	nums.sort((x, y) => {
		return x - y
	})
	for (let i = 0; i < len; i++) {
		if (nums[i] > 0) break
		if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
		var L = i + 1
		var R = len - 1
		while (L < R) {
			var sum = nums[i] + nums[L] + nums[R]
			if (sum == 0) {
				ans.push([nums[i], nums[L], nums[R]])
				while (L < R && nums[L] == nums[L + 1]) {
					L++
				}
				while (L < R && nums[R] == nums[R - 1]) {
					R--
				}
				L++
				R--
			} else if (sum < 0) {
				L++
			} else if (sum > 0) {
				R--
			}
		}
	}
	return ans
}


