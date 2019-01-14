// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
// Valid operators are +, -, *, /. Each operand may be an integer or another expression.
// Note:
// Division between two integers should truncate toward zero.
// The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
  const stack = [];
  tokens.forEach(token => {
    let n1, n2;
    switch (token) {
      case '+':
        stack.push(stack.pop() + stack.pop());
        break;
      case '-':
        stack.push(-stack.pop() + stack.pop());
        break;
      case '*':
        stack.push(stack.pop() * stack.pop());
        break;
      case '/':
        stack.push(parseInt(1 / stack.pop() * stack.pop()));
        break;
      default:
        stack.push(Number(token))
        break;
    }
  });
  return stack[0];
};

const tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];

console.log(evalRPN(tokens)); // 22