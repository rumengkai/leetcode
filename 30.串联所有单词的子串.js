/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// var findSubstring = function (s, words) {
//   if (!words || !words.length) return [];
//   let wordLen = words[0].length;
//   let res = [];
//   let len = words.join("").length;
//   let left = 0;
//   let right = len;
//   let wordMap = {};
//   for (let w of words) {
//     wordMap[w] ? wordMap[w]++ : (wordMap[w] = 1);
//   }
//   for (const e of s) {
//     let t = s.slice(left, right);
//     let wm = Object.assign({}, wordMap);
//     for (let i = 0; i < t.length; i += wordLen) {
//       let w = t.slice(i, i + wordLen);
//       if (wm[w]) {
//         wm[w]--;
//       } else {
//         break;
//       }
//     }
//     if (Object.values(wm).every((n) => n === 0)) {
//       res.push(left);
//     }
//     left++;
//     right++;
//   }
//   return res;
// };
// var findSubstring = function (s, words) {
//   if (!words || !words.length) return [];
//   let wordLen = words[0].length;
//   let allWordsLen = wordLen * words.length;
//   let ans = [],
//     wordMap = {};
//   for (let w of words) {
//     wordMap[w] ? wordMap[w]++ : (wordMap[w] = 1);
//   }
//   for (let i = 0; i < s.length - allWordsLen + 1; i++) {
//     let wm = Object.assign({}, wordMap);
//     for (let j = i; j < i + allWordsLen - wordLen + 1; j += wordLen) {
//       let w = s.slice(j, j + wordLen);
//       if (wm[w]) {
//         wm[w]--;
//       } else {
//         break;
//       }
//     }
//     if (Object.values(wm).every((n) => n === 0)) ans.push(i);
//   }
//   return ans;
// };

//
// var findSubstring = function (s, words) {
//   if (!s || !words || !words.length) return [];
//   let windows = {},
//     needs = {},
//     oneWordLen = words[0].length;
//   for (let w of words) {
//     needs[w] ? needs[w]++ : (needs[w] = 1);
//   }
//   let l = 0,
//     r = 0,
//     count = 0,
//     needsKeyLen = Object.keys(needs).length,
//     ans = [];
//   for (let i = 0; i < oneWordLen; i++) {
//     windows = {};
//     r = l = i;
//     count = 0;
//     while (r <= s.length - oneWordLen) {
//       let w1 = s.slice(r, r + oneWordLen);
//       r += oneWordLen;
//       if (!needs[w1]) {
//         windows = {};
//         l = r;
//         count = 0;
//         continue;
//       }
//       windows[w1] ? windows[w1]++ : (windows[w1] = 1);
//       if (windows[w1] === needs[w1]) count++;
//       while (count === needsKeyLen) {
//         if (r - l === oneWordLen * words.length) ans.push(l);
//         let w2 = s.slice(l, l + oneWordLen);
//         l += oneWordLen;
//         if (needs[w2]) {
//           windows[w2]--;
//           if (windows[w2] < needs[w2]) count--;
//         }
//       }
//     }
//   }
//   return ans;
// };

// @lc code=end
