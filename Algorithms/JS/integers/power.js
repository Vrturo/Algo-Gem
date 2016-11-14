/**
 *     Given a base and an exponent, create a function to find the power using
 *     Helper Method Recursion
 *
 * Input:   Two Integers, base and exponent
 * Output:  Integer
 *
 * Example: power(3, 4) => 81
 **/

function power(a, b){
  var result = 1;

  function helper( n, count ){
     if( count >= b ){
        result = n;
     } else {
      helper(n*a, count+1);
     }
  }
  helper(result, 0)
  return result;
}

console.log(power(3,4))
