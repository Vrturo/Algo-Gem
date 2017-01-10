// All factors

// Given a number N, find all factors of N.

// Example:

// N = 6
// factors = [1, 2, 3, 6]

// Make sure the returned array is sorted.


/**
 * @param {number} A
 * @return {array []}
 */

function allFactors(A){
    var result = [];
    for(var i = 1; i<=A; i++){
        if(A % i === 0) result.push(i);
    }
    return result
}
