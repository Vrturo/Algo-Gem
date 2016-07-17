// Given a non-negative number represented as an array of digits, plus one to the number.

// The digits are stored such that the most significant digit is at the head of the list.

// input:
// [1, 0]

// output:
// 11

var plusOne = function(digits) { // 130ms runtime
    var carry = 1;

    for( var i = digits.length-1; i >= 0; i-- ){
        digits[i] = digits[i] + carry;
        digits[i] = ( digits[i]>=10 ) ? ( carry=1, digits[i]-10 ) : ( carry=0, digits[i] );
    }
    if( carry ) digits.unshift(1); // [9] plus one [1, 0] digits[0]=10

    return digits;
};


var plusOne = function(digits) { // 132ms runtimeu
    var result = []
        carry = 1;
        n = digits.length-1;

    for(i=n; i>=0; i--){

        sum = ( carry+digits[i] )%10;
        carry = Math.floor( ( carry+digits[i] )/10 );
        result[n] = sum;
        n--;

    }

    if( carry!==0 ) result.unshift( carry );

    return result;
};
