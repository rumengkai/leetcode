/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * 暴力破解法
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     var n = 0
//     var l = ''
//     for (let i = 0; i < s.length; i++) {
//         if (l.indexOf(s[i])!=-1) {
//             l = s[i]
//         }
//         for (let j = i; j < s.length; j++) {
//             if (l.indexOf(s[j])==-1) {
//                 l = s.slice(i,j+1)
//                 if (j-i+1>n) {
//                     n = l.length
//                 } 
//             } else {
//                 l = s[j]
//                 if (i!=j) {
//                     break
//                 }
//             }
//         }        
//     }
//     return n
// };

/**
 * 暴力破解法
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0
    }
    var n = 1 
    var l = '' // 最长串
    for (let i = 0; i < s.length; i++) {
        var index = l.indexOf(s[i])
        if (index!=-1) {
            l = l.slice(index+1)+s[i] // 将切割前一个重复项下一项至当前
        } else{
            l += s[i]  // 拼接字符串
        }
        if (n<l.length) {
            n=l.length
        }
    }
    return n
};
// @lc code=end

