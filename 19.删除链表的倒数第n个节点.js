/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head, n) {
// 	var arr = []
// 	arr.push(head.val)
// 	while (true) {
// 		if (head.next) {
// 			arr.push(head.next.val)
// 			head = head.next
// 		} else {
// 			break;
// 		}
// 	}
// 	var res = null
// 	if (arr.length == 1) {
// 		return res
// 	}
// 	arr = arr.slice(0, arr.length - n).concat(arr.slice(arr.length - n + 1))
// 	function main (arr) {
// 		if (arr.length) {
// 			var val = arr.shift()
// 			var o = {
// 				val: val,
// 				next: main(arr)
// 			}
// 			return o
// 		} else {
// 			return null
// 		}
// 	}
// 	res = main(arr)
// 	return res
// };

// 快慢双指针
var removeNthFromEnd = function (head, n) {
	let preHead = new ListNode(-1);
	preHead.next = head;
	let fast = preHead;
	let slow = preHead;
	while (n != 0) {
		fast = fast.next;
		n--;
	}
	while (fast.next != null) {
		fast = fast.next;
		slow = slow.next;
	}
	slow.next = slow.next.next;
	return preHead.next;
};

// @lc code=end

