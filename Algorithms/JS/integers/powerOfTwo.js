// Given an integer, write a function to determine if it is a power of two.




// if n is less than 1 return false
// return boolean
// check if 0 is equal to n minus 1 and n

var isPowerOfTwo = function(n) {
    if(n < 1){
        return false;
    }
    return (0 === ((n - 1) & n));
};
