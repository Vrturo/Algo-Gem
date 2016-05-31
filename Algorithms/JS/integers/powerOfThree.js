// Given an integer, write a function to determine if it is a power of three.

var isPowerOfThree = function(n) {
    return Math.log10(n) / Math.log10(3) % 1 === 0;
};

var isPowerOfThree = function(n) {
    return n.toString(3).replace(/0/g, '') === '1';
};

var isPowerOfThree = function(n) {
    return n.toString(3).split("").reduce((prev,curr)=>parseInt(prev)+parseInt(curr))==1;
};
