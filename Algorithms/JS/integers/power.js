/**
 *     Given a base and an exponent, create a function to find the power using
 *     Helper Method Recursion
 *
 * Input:   Two Integers, base and exponent
 * Output:  Integer
 *
 * Example: power(3, 4) => 81
 **/

 // create helper function that takes in:
 //  count var that lets us know how many times we're multiplying
 //  work that is used as a build up var and we will return when we've multiplied b amount of times
 //  set base case as
//     if count is equal to b amount
//        return work
//     else call helper on another count and work being multiplied again


function power(a, b){

  function helper( count, work ){
     if( count === b ){
        return work;
     } else {
        return helper( count+1, work * a );
     }
  }
  return helper(0, 1)
}

console.log(power(3,1))
