// Evaluate Reverse Polish Notation

// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, /. Each operand may be an integer or another expression.

// Examples:

//   ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
//   ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
// [ "2", "3", "+", "4", "5", "+", "+", "6", "7", "+", "*", "2", "*" ] ->  (((2 + 3) + (4 + 5)) * (6 + 7)) * 2 -> 364

/**
 * @param {array of strings []} tokens
 * @return {number}
 */


// Stack Approach

// create two variables that will be used as pointers for order of subtraction and division
// create empty stack to start out
// loop through tokens
  // Add every token as an integer in the stack, unless it's an operation.
  // if element is an operation, pop two elements from the stack and then save the result back to it.
// After all operations are done through, the remaining element in the stack will be the result.

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
    } else if (tokens[i] === '*') {
      stack.push(stack.pop() * stack.pop());
    } else if (tokens[i] === '-') {
      b = stack.pop();
      a = stack.pop();
      stack.push(a - b);
    } else {
      stack.push(Number(tokens[i]));
    }
  }
  return stack.pop();
};

// #stack // #reversePolishNotation

const test = ['2', '3', '+', '4', '5', '+', '+', '6', '7', '+', '*', '2', '*'];
console.log(evalRPN(test));


// ----------------------------------------------------------------------
// NEEDS WORK
 // DOES NOT WORK FOR BACK TO BACK SINGLE OPERATORS

function evalRPN(A){
  const stack = [];
  let result = 0;
  let one;
  let two;
  let count = 0;
  for (var i = 0; i < A.length; i += 1) {
      if (A[i] === '+') {
          two = stack.pop();
          if (count <= 1) {
              result += two;
          } else {
              one = stack.pop();
              result += one + two;
          }
          count = 0;
      } else if (A[i] === '-') {
          two = stack.pop();
          if (count < 2) {
              result -= two
          } else {
              one = stack.pop();
              result += (one - two);
          }
          count = 0;
      } else if (A[i] === '*') {
          two = stack.pop();
          if (count < 2) {
              result *= two;
         } else {
              one = stack.pop();
              result += (one * two);
          }
          count = 0;
      } else if (A[i] === '/') {
          two = stack.pop();
          if (count < 2) {
              result = Math.floor(result / two);
          } else {
              one = stack.pop();
              result += Math.floor(one / two);
          }
          count = 0;
      } else {
          stack.push(Number(A[i]))
          count += 1;
      }
  }
  return result;
}
