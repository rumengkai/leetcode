/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
// 递归实现
// var inorderTraversal = function (root) {
// 	function f (node) {
// 		if (node == null) {
// 			return []
// 		}
// 		return f(node.left).concat(node.val, f(node.right))
// 	}
// 	return f(root)
// };
// 迭代实现，利用栈暂存数据
// 如果left节点存在, 就入栈, 然后跳left
// 如果left和right都不存在, 则保存当前节点, 然后出栈, 并让left等于null
// 如果right节点存在, 并且left为null, 则保存当前节点, 然后跳right
var inorderTraversal = function (root) {
	let res = [], stack = []
	while (root || stack.length) {
		if (root.left) {
			stack.push(root)
			root = root.left
		} else if (!root.left && !root.right) {
			res.push(root.val)
			root = stack.pop()
			root && (root.left = null)
		} else if (root.right) {
			res.push(root.val)
			root = root.right
		}
	}
	return res
};
// @lc code=end

