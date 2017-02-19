// Redundant Braces

// Write a program to validate if the input string has redundant braces?

// Input will be always a valid expression

// and operators allowed are only + , * , - , /

// Example:

// ((a + b)) has redundant braces so answer will be true
// (a + (a + b)) doesn't have have any redundant braces so answer will be false

// param A : string
// return an integer

// create stack to keep track of elements per brace pair
// create a count var to know if too little elemnts are in each brace pair
// loop through string
  // keep pushing elements onto the stack till we encounter ')'
  // When element is ')', start popping elements till a matching '(' is found
  // If the number of elements popped are less than 2 we know we have a redundant brace
    // return false
// if loop doesnt return false we don't have any redundant braces, so return true


function braces(A) {
  const stack = [];
  let count = 0;
  let last;
  for (var i = 0; i < A.length; i += 1) {
    if (A[i] === ')') {
      last = stack.pop();
      while (last !== '(' && stack.length) {
        last = stack.pop();
        count += 1;
      }
      if (count < 2) return false;
    } else {
      stack.push(A[i]);
    }
  }
  return true;
}

var test = "((a+b))";
console.log(braces(test))

// ----------------------------------------------------

function bracesTwo(A) {
  var a = A.length;
  var x = 0,
      y = 0,
      present = false;
  var hasChar = false,
      stackArr = [],
      correct = [],
      indexArr = [];
  for (var i = 0; i < a; i += 1) {
    if (A[i]=='(') {
      stackArr.push(1);
      correct.push(i);
    }
    if (A[i] === ')') {
      present = false;
      y = correct.pop();
      for (x = y; x < i; x += 1) {
        if (A[x] === "+" || A[x] === "-" || A[x] === "*" || A[x] === "/") {
          if (indexArr.indexOf(x) === -1) {
            present = true;
            indexArr.push(x);
          }
        }
      }
      if (!present) return false;
    }
  }
  return true;
}

test = "(a+b))";
console.log(bracesTwo(test))
