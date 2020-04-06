/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var nextPermutation = function (nums) {
//   let len = nums.length;
//   let flag = false;
//   // 倒序遍历
//   for (let i = len - 1; i > 0; i--) {
//     if (nums[i - 1] < nums[i]) {
//       let k = nums.slice(i).findIndex((a) => a <= nums[i - 1]);
//       if (k > -1) {
//         [nums[i - 1], nums[i + k - 1]] = [nums[i + k - 1], nums[i - 1]];
//       } else {
//         [nums[i - 1], nums[len - 1]] = [nums[len - 1], nums[i - 1]];
//       }
//       flag = true;
//       // 将剩余数组从小到大排序
//       while (i < len - 1) {
//         let s = nums.slice(i); // 剩余数组
//         let t = s.indexOf(Math.min(...s)); // 找到剩余数组中最小值得索引t+i
//         [nums[i], nums[t + i]] = [nums[t + i], nums[i]];
//         i++;
//       }
//       break;
//     }
//   }
//   if (!flag) {
//     nums.sort((a, b) => a - b);
//   }
//   return nums;
// };
// var nextPermutation = function (nums) {
//   let len = nums.length;
//   let flag = false;
//   // 倒序遍历
//   for (let i = len - 1; i > 0; i--) {
//     if (nums[i - 1] < nums[i]) {
//       let k = nums.slice(i).findIndex((a) => a <= nums[i - 1]);
//       if (k > -1) {
//         [nums[i - 1], nums[i + k - 1]] = [nums[i + k - 1], nums[i - 1]];
//       } else {
//         [nums[i - 1], nums[len - 1]] = [nums[len - 1], nums[i - 1]];
//       }
//       flag = true;
//       // 将剩余数组从小到大排序
//       nums.splice(i, len - i, ...nums.slice(i).sort((a, b) => a - b));
//       break;
//     }
//   }
//   if (!flag) {
//     nums.sort((a, b) => a - b);
//   }
//   return nums;
// };
// var nextPermutation = function (nums) {
//   let len = nums.length;
//   let flag = false;
//   // 倒序遍历
//   for (let i = len - 1; i > 0; i--) {
//     if (nums[i - 1] < nums[i]) {
//       let k = nums.slice(i).findIndex((a) => a <= nums[i - 1]);
//       if (k > -1) {
//         [nums[i - 1], nums[i + k - 1]] = [nums[i + k - 1], nums[i - 1]];
//       } else {
//         [nums[i - 1], nums[len - 1]] = [nums[len - 1], nums[i - 1]];
//       }
//       flag = true;
//       // 将剩余数组从小到大排序，冒泡排序
//       for (let j = i; j < len; j++) {
//         for (let k = i; k < len - 1; k++) {
//           if (nums[k] > nums[k + 1]) {
//             [nums[k], nums[k + 1]] = [nums[k + 1], nums[k]];
//           }
//         }
//       }
//       break;
//     }
//   }
//   if (!flag) {
//     nums.sort((a, b) => a - b);
//   }
//   return nums;
// };
// var nextPermutation = function (nums) {
//   let len = nums.length;
//   if (len <= 1) return;

//   for (let i = len - 2; i >= 0; i--) {
//     if (nums[i] < nums[i + 1]) {
//       for (let j = len - 1; j > i; j--) {
//         if (nums[i] < nums[j]) {
//           [nums[i], nums[j]] = [nums[j], nums[i]];
//           break;
//         }
//       }
//       let x = i + 1,
//         y = len - 1;
//       while (x < y) {
//         [nums[x], nums[y]] = [nums[y], nums[x]];
//         x++;
//         y--;
//       }
//       break;
//     }
//     if (i === 0) {
//       let x = i,
//         y = len - 1;
//       while (x < y) {
//         [nums[x], nums[y]] = [nums[y], nums[x]];
//         x++;
//         y--;
//       }
//     }
//   }
// };
var nextPermutation = function (nums) {
  let len = nums.length;
  // 倒序遍历
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i - 1] < nums[i]) {
      let k = nums.slice(i).findIndex((a) => a <= nums[i - 1]);
      if (k > -1) {
        [nums[i - 1], nums[i + k - 1]] = [nums[i + k - 1], nums[i - 1]];
      } else {
        [nums[i - 1], nums[len - 1]] = [nums[len - 1], nums[i - 1]];
      }
      // 将剩余数组从小到大排序
      let x = i;
      let y = len - 1;
      while (x < y) {
        [nums[x], nums[y]] = [nums[y], nums[x]];
        x++;
        y--;
      }
      break;
    }
    if (i === 0) {
      let x = i;
      let y = len - 1;
      while (x < y) {
        [nums[x], nums[y]] = [nums[y], nums[x]];
        x++;
        y--;
      }
    }
  }
  return nums;
};
// @lc code=end
