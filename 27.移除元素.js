/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//     let len = nums.length
//     for (let i = 0; i < len; i++) {
//         if (nums[i]===val) {
//             nums.splice(i,1)
//             len--
//             i--
//         }
//     }
//     return len
// };
// var removeElement = function(nums, val) {
//     let ans = 0;
//     for(const num of nums) {
//         if(num != val) {
//             nums[ans] = num;
//             ans++;
//         }
//     }
//     return ans;
// };
// var removeElement = function (nums, val) {
//   let i = 0;
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[j] != val) {
//       nums[i] = nums[j];
//       i++;
//     }
//   }
//   return i;
// };
// 双指针
var removeElement = function (nums, val) {
  let i = 0;
  let n = nums.length;
  while (i < n) {
    if (nums[i] == val) {
      nums[i] = nums[n - 1];
      // reduce array size by one
      n--;
    } else {
      i++;
    }
  }
  return n;
};

// @lc code=end
