/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// PAYPALISHIRING
/**
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 */
// 这是第一次想到的方法，将整体转换为二维数组，然后旋转得到，但是效率底，内存消耗大
// O(n*n)
// var convert = function(s, numRows) {
//     var len = s.length
//     if (len<2||len==''|| numRows ==1) {
//         return s
//     }
//     var w = Math.ceil(len/(2*numRows-2))*(numRows-1)
//     var arr = new Array()
//     for (let i = 0; i < w; i++) {
//         arr[i] = new Array()
//         for (let j = 0; j < numRows; j++) {
//             if (i%(numRows-1)==0) {
//                 arr[i][j] = s.slice(0,1)
//                 s=s.slice(1)
//             } else if (j == numRows- i % ( numRows - 1 ) - 1) {
//                 arr[i][j] = s.slice(0,1)
//                 s=s.slice(1)
//             } else {
//                 arr[i][j] = 0
//             }          
//         }        
//     }
//     var res = ''
//     for (let i = 0; i < numRows; i++) {
//         for (let j = 0; j < w; j++) {
//             if (arr[j][i]!=0&&arr[j][i]!='') {
//                 res+=arr[j][i]
//             }            
//         }
//     }
//     return res
// };
// 统一左移，O(n)
var convert = function(s, numRows) {
    var len = s.length
    var pointer = true // 为true时，向下，为false时，向上
    if (len<2||len==''|| numRows ==1) {
        return s
    }
    var row = Math.min(len,numRows)
    var res = new Array()
    for (let i = 0; i < row; i++) {
        res[i] = ''
    }
    var i = 0
    for(const e of s){
        res[i] += e
        if (i>=row-1&&pointer==true) {
            pointer = !pointer
        }
        if (i==0&&pointer==false) {
            pointer = !pointer
        }
        i+=pointer?1:-1
    }
    var ans = res.join('')
    return ans
};
// @lc code=end



