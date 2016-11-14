/**
 * Given an array of integers, create an array of two-item arrays using Helper Method Recursion
 *
 * Input:   Array of Integers
 * Output:  Array of two-item Arrays
 *
 * Example: arrayPairs([1, 2, 3, 4, 5, 6])  =>    [[1,2], [3,4], [5,6]]
 * Example: arrayPairs([1, 2, 3, 4, 5])     =>    [[1,2], [3,4], [5, undefined]]
 **/

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
