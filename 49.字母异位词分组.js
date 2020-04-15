/* eslint-disable no-unused-vars */
/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode-cn.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (61.17%)
 * Likes:    322
 * Dislikes: 0
 * Total Accepted:    65.6K
 * Total Submissions: 107.3K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例:
 * 
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * 说明：
 * 
 * 
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 切割字符串，循环比较
// var groupAnagrams = function (strs) {
// 	let len = strs.length
// 	let temp = []
// 	let res = []
// 	for (let i = 0; i < len; i++) {
// 		let item = strs[i]
// 		let s = item.split('').sort().join('')
// 		let index = temp.indexOf(s)
// 		if (index > -1) {
// 			res[index].push(item)
// 			continue;
// 		}
// 		temp.push(s)
// 		res.push([item])
// 	}
// 	return res
// };
// 利用hash
// var groupAnagrams = function (strs) {
// 	let hash = new Map()
// 	let len = strs.length
// 	for (let i = 0; i < len; i++) {
// 		let str = strs[i].split('').sort().join()
// 		if (hash.has(str)) {
// 			let temp = hash.get(str)
// 			temp.push(strs[i])
// 			hash.set(str, temp)
// 		} else {
// 			hash.set(str, [strs[i]])
// 		}
// 	}

// 	return [...hash.values()]
// };


var groupAnagrams = function (strs) {
	let tmp = {};
	for (let val of strs) {
		let t = val.split("").sort().join("");
		if (tmp[t]) tmp[t].push(val);
		else tmp[t] = [val];
	}
	let result = [];
	for (let key in tmp)
		result.push(tmp[key]);

	return result;
};

// @lc code=end

