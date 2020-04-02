/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 转为数组，然后排序，再转为链表
var mergeKLists = function (lists) {
	if (!lists || lists.length == 0) return null;
	let arr = [];
	let res = new ListNode(0);
	lists.forEach(list => {
		let cur = list;
		while (cur) {
			arr.push(cur.val);
			cur = cur.next;
		}
	})
	let cur = res;
	arr.sort((a, b) => a - b).forEach(val => {
		let node = new ListNode(val);
		cur.next = node;
		cur = cur.next;
	})
	return res.next;
};
// 递归+分治，
// var mergeKLists = function (lists) {
// 	let n = lists.length;
// 	if (n == 0) return null;
// 	let mergeTwoLists = (l1, l2) => {
// 		if (l1 == null) return l2;
// 		if (l2 == null) return l1;
// 		if (l1.val <= l2.val) {
// 			l1.next = mergeTwoLists(l1.next, l2);
// 			return l1;
// 		} else {
// 			l2.next = mergeTwoLists(l1, l2.next);
// 			return l2;
// 		}
// 	}
// 	let merge = (left, right) => {
// 		if (left == right) return lists[left];
// 		let mid = (left + right) >> 1;
// 		let l1 = merge(left, mid);
// 		let l2 = merge(mid + 1, right);
// 		return mergeTwoLists(l1, l2);
// 	}
// 	return merge(0, n - 1);
// };
// @lc code=end

