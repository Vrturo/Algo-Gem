// Factorialize a Number

// Return the factorial of the provided integer.

// If the integer is represented with the letter n,
// a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120


// Input: Integer
// 5
//10

// Output: Integer
// ex. 120
// 3628800


// create a build up var starting at 1, that increases as it gets multiplied to meet the factorial output
// loop from bottom up till factorial number is reach
  // buildUp is multiplied each time by the current number
// return buildUp

function factorialize(num) {
  var buildUp = 1;
  for(var i = 2; i <= num; i += 1) {
    buildUp *= i;
  }
  return buildUp;
}

console.log(factorialize(5));

