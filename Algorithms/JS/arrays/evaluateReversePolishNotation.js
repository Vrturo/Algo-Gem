// Evaluate Reverse Polish Notation

// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, /. Each operand may be an integer or another expression.

// Examples:

//   ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
//   ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
// [ "2", "3", "+", "4", "5", "+", "+", "6", "7", "+", "*", "2", "*" ] ->  (((2 + 3) + (4 + 5)) * (6 + 7)) * 2 -> 364

const evalRPN = function rpn(tokens) {
  let a;
  let b;
  const stack = [];
  for (let i = 0; i < tokens.length; i += 1) {
    if (tokens[i] === '+') {
      stack.push(stack.pop() + stack.pop());
    } else if (tokens[i] === '/') {
      b = stack.pop();
      a = stack.pop();
      stack.push(Math.floor(a / b));
    } else if(tokens[i] === '*') {
      stack.push((stack.pop() * stack.pop()));
    } else if(tokens[i] === '-') {
      b = stack.pop();
      a = stack.pop();
      stack.push(a - b);
    } else {
      stack.push(Number(tokens[i]));
    }
  }
  return stack.pop();
};
