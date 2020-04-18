/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let res = [];
  let i = 0;
  let j = 0;
  let n = matrix.length - 1;
  if (n < 0) return [];
  let m = matrix[0].length - 1;
  let turn = m == 0 ? "d" : "r";
  let boundl = 0;
  let boundr = m;
  let boundu = 0;
  let boundd = n;
  let total = (m + 1) * (n + 1);
  for (let a = 0; a < total; a++) {
    res.push(matrix[i][j]);
    if (turn == "r") {
      j++;
      if (j == boundr) {
        boundu++;
        turn = "d";
      }
    } else if (turn == "d") {
      i++;
      if (i == boundd) {
        boundr--;
        turn = "l";
      }
    } else if (turn == "l") {
      j--;
      if (j == boundl) {
        boundd--;
        turn = "u";
      }
    } else if (turn == "u") {
      i--;
      if (i == boundu) {
        boundl++;
        turn = "r";
      }
    }
  }
  return res;
};

// @lc code=end
