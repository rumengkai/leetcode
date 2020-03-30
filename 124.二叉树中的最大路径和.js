/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归实现，当前节点值+左右子节点值
var maxPathSum = function (root) {
	let maxSum = -Infinity;
	let helper = function (node) {
		if (node == null) return 0;
		let leftVal = Math.max(helper(node.left), 0);
		let rightVal = Math.max(helper(node.right), 0);
		let newPath = node.val + leftVal + rightVal;
		maxSum = Math.max(maxSum, newPath);
		return node.val + Math.max(leftVal, rightVal);
	}
	helper(root);
	return maxSum;
};
// @lc code=end

