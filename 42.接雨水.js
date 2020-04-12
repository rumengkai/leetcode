/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let res = 0;
  let th = 0; // 保存高度
  while (left < right) {
    if (height[left] == 0) {
      left++;
      continue;
    }
    if (height[right] == 0) {
      right--;
      continue;
    }

    let h = Math.min(height[left], height[right]);
    if (h > th) {
      // 比之前高，进行计算
      let temp = 0;
      let sum = h * (right - left - 1);
      for (let j = left + 1; j < right; j++) {
        temp += height[j] > h ? h : height[j];
        temp += height[j] < th ? th - height[j] : 0;
      }
      res += sum - temp; // 去除存在高度和重复计算。
      th = h; // 更新高度
    }
    if (height[left] > height[right]) {
      right--;
    } else if (height[left] < height[right]) {
      left++;
    } else {
      left++;
      right--;
    }
  }
  return res;
};
// var trap = function (height) {
//   let total = 0;
//   height.forEach((item, index) => {
//     let leftMax = 0,
//       rightMax = 0;
//     for (var i = 0; i <= index; i++) {
//       leftMax = Math.max(height[i], leftMax);
//     }
//     for (var i = index; i < height.length; i++) {
//       rightMax = Math.max(height[i], rightMax);
//     }
//     total += Math.min(leftMax, rightMax) - item;
//   });
//   return total;
// };
// @lc code=end
