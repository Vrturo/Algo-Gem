/**
 * Given an array of integers, create an array of two-item arrays using Helper Method Recursion
 *
 * Input:   Array of Integers
 * Output:  Array of two-item Arrays
 *
 * Example: arrayPairs([1, 2, 3, 4, 5, 6])  =>    [[1,2], [3,4], [5,6]]
 * Example: arrayPairs([1, 2, 3, 4, 5])     =>    [[1,2], [3,4], [5, undefined]]
 **/


// create result array to return at the end
// create a helper function that takes:
  // an index to keep track of what element we're on
  // a build up array that fluctuates dpeending if filled or not
  // the result array to push our buildUp in when its full

  // set base case
    // when i is greater than arr's index
  // else
    // if index is even
      // push the element in the current array's index into our buildUp
      // call helper on the next item on array and pass the buildUp and result array
    // else
      // push the element in the current array's index into our buildUp
      // reset buildUp because we know if index is odd our buildUp is full
      // call helper on the next item on array and pass the buildUp and result array


function arrayPairs(arr){
  var result = [];

  function helper(i, buildUp, res){
    if( i > arr.length ){
      return;
    } else {
      if( i % 2 === 0 ){
        buildUp.push(arr[i]);
        helper(i+1, buildUp, res);
      } else {
        buildUp.push(arr[i])
        res.push(buildUp);
        helper(i+1, [], res)
      }
    }
  }
  helper( 0, [], result );
  return result;
}

var ex = [1, 2, 3, 4, 5, 6, 7];
console.log(arrayPairs(ex))
