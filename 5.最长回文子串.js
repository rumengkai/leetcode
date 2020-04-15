/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * 我的解法，中心扩展法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	var len = s.length;
	if (len < 2) {
		return s
	}
	var res = [0, 0]
	function find (left, right) {
		if (s[left] != s[right]) {
			return [left, left]
		}
		while (left >= 0 && right < len && s[left] == s[right]) {
			if (s[left - 1] != s[right + 1] || left - 1 < 0 || right >= len) {
				return [left, right]
			} else {
				left--
				right++
			}
		}
		return [left, right]
	}
	for (let i = 0; i < len; i++) {
		var a1 = find(i, i + 1) // 如果中间是相同的字母
		var a2 = find(i, i) // 如果中间是一个字母
		var temp
		if (a1[1] - a1[0] > a2[1] - a2[0]) {
			temp = a1
		} else {
			temp = a2
		}
		if (temp[1] - temp[0] > res[1] - res[0]) {
			res = temp
		}
	}
	return s.slice(res[0], res[1] + 1)
};

/**
 * leetcode 解法，中心扩展法，效率高
 * @param {*} s
 */
// var longestPalindrome = function(s) {
//     if(!s || s.length < 2){
//         return s;
//     }
//     let start = 0,end = 0;
//     let n = s.length;
//     // 中心扩展法
//     let centerExpend = (left,right) => {
//         while(left >= 0 && right < n && s[left] == s[right]){
//             left--;
//             right++;
//         }
//         return right - left - 1;
//     }
//     for(let i = 0;i < n;i++){
//         let len1 = centerExpend(i,i);
//         let len2 = centerExpend(i,i+1);
//         // 两种组合取最大回文串的长度
//         let maxLen = Math.max(len1,len2);
//         if(maxLen > end - start){
//             // 更新最大回文串的首尾字符索引
//             start = i - ((maxLen - 1) >> 1);
//             end = i + (maxLen >> 1);
//         }
//     }
//     return s.substring(start,end+1);
// };
// 备注：>> 1,位移运算符，意思是：除2

// @lc code=end

