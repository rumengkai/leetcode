/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var mergeTwoLists = function (l1, l2) {
// 	let l3 = new ListNode()
// 	let point = l3
// 	while (l1 || l2) {
// 		if (!l1) {
// 			point.next = l2
// 			l2 = null
// 		} else if (!l2) {
// 			point.next = l1
// 			l1 = null
// 		} else if (l1.val < l2.val) {
// 			point.next = new ListNode(l1.val)
// 			point = point.next
// 			l1 = l1.next
// 		} else {
// 			point.next = new ListNode(l2.val)
// 			point = point.next
// 			l2 = l2.next
// 		}
// 	}
// 	l3 = l3.next
// 	return l3
// };
// 递归
var mergeTwoLists = function (l1, l2) {
	if (l1 === null) {
		return l2;
	}
	if (l2 === null) {
		return l1;
	}
	if (l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	} else {
		l2.next = mergeTwoLists(l1, l2.next);
		return l2;
	}
};

// @lc code=end

