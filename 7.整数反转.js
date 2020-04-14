/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// 首先想到的方法，转成字符串，然后翻转，最后转成number输出
// var reverse = function(x) {
//     if (x>0) {
//         x += ''
//         x = x.split('')
//         x = x.reverse()
//         x = x.join('')
//         x *= 1
//     } else if(x<0){
//         x *= -1
//         x += ''
//         x = x.split('')
//         x = x.reverse()
//         x = x.join('')
//         x *= -1
//     } else {
//         return 0
//     }
//     if (x>Math.pow(2,31)-1||x<-Math.pow(2,31)) {
//         return 0
//     } else {
//         return x
//     }
// };
// 还是下面这个写的优雅，但是效率低，
// var reverse = function(x) {
//     const border = 2**31
//     const max = border - 1
//     const min = -border

//     const result = (x > 0 ? 1 : -1) * String(x).split('').filter(x => x !== '-').reverse().join('')
//     return result > max || result < min ? 0 : result
// };

var reverse = function (x) {
	let fh = "",
		re;
	if (x < 0) {
		fh = "-";
		x = 0 - x;
	}
	re = String(x)
		.split("")
		.reverse()
		.join("");
	if (
		re.length > 10 ||
		(re.length === 10 && re > (fh === "-" ? "2147483648" : "2147483647"))
	) {
		return 0;
	} else {
		return fh + re;
	}
};

// @lc code=end
