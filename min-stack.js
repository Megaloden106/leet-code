// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

/**
 * initialize your data structure here.
 */
const MinStack = function() {
  this.stack = [];
  this.min = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  const min = this.getMin();
  if (min !== undefined) {
    this.min.push(Math.min(x, min));
  } else {
    this.min.push(x);
  }
  console.log(this.min)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1];
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.min.length > 0) {
    return this.min[this.min.length - 1];
  }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const stack = new MinStack();
stack.push(0);
stack.push(1);
stack.push(0);
console.log(stack.getMin());
stack.pop();
console.log(stack.getMin());
