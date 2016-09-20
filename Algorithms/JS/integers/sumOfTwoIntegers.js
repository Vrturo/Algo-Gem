// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

// Example:
// Given a = 1 and b = 2, return 3.


var getSum = function(a, b) { // 92 ms runtime
    if (b === 0){
        return a;
    } else {
        return getSum( a ^ b, (a & b) << 1); // Sum of two bits can be obtained by performing XOR (^) of the two bits.
                                              // Carry bit can be obtained by performing AND (&) of two bits.
    }
};
