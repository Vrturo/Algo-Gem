// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

// For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.


/**
 * @param {number} n
 * @return {number}
 */



var numSquares = function(n) {
    var possible = [0],
        len, temp;
    while( possible.length <= n ){
        len = possible.length;
        temp = n;
        for( var i=1; i*i<=len; i++ ){
            if( temp > possible[len-i*i]+1 ){
                temp = possible[len-i*i]+1;
            }
        }
        possible.push( temp );
    }
    return possible[n];
};
