/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 暴力破解法
// var threeSumClosest = function(nums, target) {
//   let t = Math.abs(nums[0] + nums[1] + nums[2] - target);
//   let last = nums[0] + nums[1] + nums[2];
//   let len = nums.length;
//   for (let i = 0; i < len - 2; i++) {
//     for (let j = i + 1; j < len - 1; j++) {
//       for (let k = j + 1; k < len; k++) {
//         let t2 = Math.abs(nums[i] + nums[j] + nums[k] - target);
//         if (t2 < t) {
//           t = t2;
//           last = nums[i] + nums[j] + nums[k];
//         }
//       }
//     }
//   }
//   return last;
// };
// 先排序
var threeSumClosest = function(nums, target) {
  let len = nums.length;
  nums = nums.sort((x, y) => x - y);
  let res = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < len; i++) {
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R];
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      } else if (sum > target) {
        R--;
      } else if (sum < target) {
        L++;
      } else if (sum === target) {
        return sum;
      }
    }
  }
  return res;
};

// @lc code=end
