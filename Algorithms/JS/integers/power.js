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

// write a graph structure without objects
// DFS
// post order DFS graph using recursion and while loop
// review toplogical sort
// shortest path
// dollan ford
// dynamic d.a.g.
