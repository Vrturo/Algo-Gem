// Redundant Braces

// Write a program to validate if the input string has redundant braces?

// Input will be always a valid expression

// and operators allowed are only + , * , - , /

// Example:

// ((a + b)) has redundant braces so answer will be true
// (a + (a + b)) doesn't have have any redundant braces so answer will be false

// param A : string
// return an integer


function braces(A) {
    var count = 0;
    var stack = [],
        last;
      for (var i = 0; i < A.length; i += 1) {
          if (A[i] === ')') {
              last = stack.pop();
              console.log(stack)
              while (last !== '(' && stack.length) {
                  last = stack.pop();
                  count += 1;
              }
              if (count < 2) return 1;
          } else {
              stack.push(A[i]);
          }
      }
      return 0;
}
var test = "((a+b))";
console.log(braces(test))
