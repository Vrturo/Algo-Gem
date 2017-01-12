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


// ---------------------------------------------------

// create a result variable with with 1 in it, every number has a factorial of 1 so start with it
// create a loop as long as A but starting from 2
// 1 is already in the result array so start the check from 2
  // if A modulus the current index is equal to zero the number is a factorial so we push it into the result array
// return the result array at the end


function allFactors(A){
    var result = [1];

    for(var i = 2; i<=A; i++){
        if(A % i === 0) result.push(i);
    }
    return result;
}


console.log(allFactors(2))
// ---------------------------------------------------------

// create a result variable to store all facorials in it
// create a loop as long as A, starting from 1
  // if A modulus the current index is equal to zero the number is a factorial, so we push it into the result array
// return the result array at the end


function allFactors(A){
    var result = [];
    for(var i = 1; i<=A; i++){
        if(A % i === 0) result.push(i);
    }
    return result
}
