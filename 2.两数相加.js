/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
var addTwoNumbers = function (l1, l2) {
	const dummy = new ListNode()
	let o = dummy // o 相当于指针，每次改变指针指向dummy的next
	let t = 0 // 代表是否进位
	while (l1 || l2 || t) {
		var sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + t
		o.next = new ListNode(sum % 10)
		if (sum > 9) {
			t = 1
		} else {
			t = 0
		}
		if (l1) l1 = l1.next
		if (l2) l2 = l2.next
		o = o.next
	}
	return dummy.next



	// let p1 = l1
	// let p2 = l2
	// let carry = 0
	// const dummy = new ListNode()
	// let pointer = dummy
	// while (p1 || p2 || carry) {
	//     const num1 = p1 ? p1.val : 0
	//     const num2 = p2 ? p2.val : 0
	//     const sum = num1 + num2 + carry
	//     if (sum > 9) {
	//     pointer.next = new ListNode(sum % 10)
	//     carry = 1
	//     } else {
	//     pointer.next = new ListNode(sum)
	//     carry = 0
	//     }
	//     if (p1) p1 = p1.next
	//     if (p2) p2 = p2.next
	//     pointer = pointer.next
	// }
	// return dummy.next

};
// @lc code=end

