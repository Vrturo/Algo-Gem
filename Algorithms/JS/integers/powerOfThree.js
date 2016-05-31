// Given an integer, write a function to determine if it is a power of three.

var isPowerOfThree = function(n) {
    return Math.log10(n) / Math.log10(3) % 1 === 0;
};
