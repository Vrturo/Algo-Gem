// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

// Example:
// Given num = 16, return true. Given num = 5, return false.

// Follow up: Could you solve it without loops/recursion?


var isPowerOfFour = function(num) {
    return Math.log10(num) / Math.log10(4) % 1 === 0;
};
