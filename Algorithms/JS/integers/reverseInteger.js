// Reverse digits of an integer.

// Example1: x = 123, return 321
// Example2: x = -123, return -321

// Have you thought about this?
// Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

// If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

// Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer,
// then the reverse of 1000000003 overflows. How should you handle such cases?

// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


var reverse = function(x) { // 196 ms runtime
    var strInt = JSON.stringify( x );
    if( strInt.length === 1 ) return x;

    var result = [],
        maxNumIn32Bit = Math.pow(2, 31)-1;

    for( var i = strInt.length; i--; ){
        result.push( strInt[ i ] );
    }
    result = parseInt( result.join("") );

    if ( result > maxNumIn32Bit ) return 0;
    return  x < 0 ? result = result * -1 : result;
};
