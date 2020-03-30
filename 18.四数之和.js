/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 思路
// 与16题类似，16是固定第一个数，另外两个数用左右指针
// 此题固定两个数，另外两个数同样用移动的双指针寻找，更新比较与 target 的大小
// 固定的两个数用双循环
// 注意剪枝和去重

// var fourSum = function(nums, target) {
//   let res = [];
//   let n = nums.length;

//   if (nums == null || n < 4) {
//     return res;
//   }

//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < n - 3; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;
//     if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
//     if (nums[i] + nums[n - 1] + nums[n - 2] + nums[n - 3] < target) continue;
//     for (let j = i + 1; j < n - 2; j++) {
//       if (j - i > 1 && nums[j] === nums[j - 1]) continue;
//       if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
//       if (nums[i] + nums[j] + nums[n - 1] + nums[n - 2] < target) continue;
//       let left = j + 1;
//       let right = n - 1;
//       while (left < right) {
//         let tmpRes = nums[i] + nums[j] + nums[left] + nums[right];
//         if (tmpRes === target) {
//           res.push([nums[i], nums[j], nums[left], nums[right]]);
//           while (left < right && nums[left] === nums[left + 1]) left++;
//           while (left < right && nums[right] === nums[right - 1]) right--;
//           left++;
//           right--;
//         } else if (tmpRes > target) {
//           right--;
//         } else {
//           left++;
//         }
//       }
//     }
//   }
//   return res;
// };
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * 我的思路：比三数之和多加了 一重循环
 * 双指针
 */
var fourSum = function(nums, target) {
  let lens = nums.length;
  let res = []; //存放结果
  //数组不存在或者长度小于0
  if (nums == null || lens < 4) return res;
  //数组存在
  //先排序
  nums.sort((a, b) => a - b);

  var l2 = nums[lens - 2] + nums[lens - 1];
  var l3 = nums[lens - 1] + nums[lens - 2] + nums[lens - 3];
  if (l3 + nums[lens - 4] < target) {
    return res;
  }
  // i,j,left,right 分别表示四个数，从小到大排列
  let i, j, left, right;
  let sum = 0;
  for (i = 0; i < lens - 3; i++) {
    //第一个数
    while (i > 0 && nums[i] == nums[i - 1]) i++;
    // 添加代码优化-----
    let min = nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3];
    if (min > target) break; //第一层，如果最小值就大于target
    let max = nums[i] + l3;
    if (max < target) continue; //第一层，如果最大值就小于target
    // ---------------
    for (j = i + 1; j < lens - 2; j++) {
      //第二个数
      while (j > i + 1 && nums[j] == nums[j - 1]) j++;
      // 添加代码优化-----
      min = nums[i] + nums[j] + nums[j + 1] + nums[j + 2];
      if (min > target) break; //第二层，如果最小值就大于target
      max = nums[i] + nums[j] + l2;
      if (max < target) continue; //第二层，如果最大值就小于target
      // ---------------
      left = j + 1;
      right = lens - 1;
      while (left < right) {
        sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum == target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          while (left < right && nums[left] == nums[left - 1]) left++;
          right--;
          while (left < right && nums[right] == nums[right + 1]) right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return res;
};

// @lc code=end
