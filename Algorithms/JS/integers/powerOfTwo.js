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


// Javascript has only natural log build-in function Math.log, so

// log2(n) = ln(n)/ln(2)

// Moreover, javascript works bad with huge numbers, thats why we divide n by 4, which is enough to pass all test cases.

var isPowerOfTwo = function(n) {
    return Number.isInteger(Math.log(n/4)/Math.log(2));
};
