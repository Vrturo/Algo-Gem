// Given an integer, write a function to determine if it is a power of two.

var isPowerOfTwo = function(n) {
    if(n < 1){
        return false;
    }
        return (0 === ((n - 1) & n));
};
