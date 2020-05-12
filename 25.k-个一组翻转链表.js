/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let prev = dummyHead;
  let tail = dummyHead;

  while (true) {
    let count = 0;
    while (tail.next && count !== k) {
      tail = tail.next;
      count++;
    }
    if (count !== k) break;

    let head1 = prev.next;

    while (prev.next !== tail) {
      let cur = prev.next;
      prev.next = cur.next;
      cur.next = tail.next;
      tail.next = cur;
    }

    prev = head1;
    tail = head1;
  }

  return dummyHead.next;
};
// @lc code=end
