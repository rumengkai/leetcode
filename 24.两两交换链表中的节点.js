
/*
 * @lc app=leetcode.cn id=24 lang=java
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
	const dummyHead = new ListNode(0)
	dummyHead.next = head
	console.log(dummyHead)

	let prev = dummyHead
	let first = prev.next

	while (first && first.next) {
		let second = first.next
		let next = second.next

		second.next = first
		first.next = next
		prev.next = second

		prev = first
		first = first.next
	}

// return dummyHead.next
// };
// 递归，java版本
// 1，2，3，4
// 2，1，4，3
// class Solution {
// public ListNode swapPairs (ListNode head) {
// if (head == null || head.next == null) {
// return head;
// }
// ListNode next = head.next;
// head.next = swapPairs(next.next);
// next.next = head;
// return next;
// }
// }

// 非递归解法
// class Solution {
// 	public ListNode swapPairs(ListNode head) {
// 		ListNode pre = new ListNode(0);
// 		pre.next = head;
// 		ListNode temp = pre;
// 		while (temp.next != null && temp.next.next != null) {
// 			ListNode start = temp.next;
// 			ListNode end = temp.next.next;
// 			temp.next = end;
// 			start.next = end.next;
// 			end.next = start;
// 			temp = start;
// 		}
// 		return pre.next;
// 	}
// }

// @lc code=end
