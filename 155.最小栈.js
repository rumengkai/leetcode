/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 *
 * https://leetcode-cn.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (52.51%)
 * Likes:    452
 * Dislikes: 0
 * Total Accepted:    95.7K
 * Total Submissions: 181.9K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n' +
  '[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * 
 * 
 * push(x) —— 将元素 x 推入栈中。
 * pop() —— 删除栈顶的元素。
 * top() —— 获取栈顶元素。
 * getMin() —— 检索栈中的最小元素。
 * 
 * 
 * 
 * 
 * 示例:
 * 
 * 输入：
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 * 
 * 输出：
 * [null,null,null,null,-3,null,0,-2]
 * 
 * 解释：
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * pop、top 和 getMin 操作总是在 非空栈 上调用。
 * 
 * 
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
	this.stack = [];
	this.minV = Number.MAX_VALUE;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
	// update 'min'
	const minV = this.minV;
	if (x < this.minV) {
		this.minV = x;
	}
	return this.stack.push(x - minV);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	const item = this.stack.pop();
	const minV = this.minV;

	if (item < 0) {
		this.minV = minV - item;
		return minV;
	}
	return item + minV;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	const item = this.stack[this.stack.length - 1];
	const minV = this.minV;

	if (item < 0) {
		return minV;
	}
	return item + minV;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.minV;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

