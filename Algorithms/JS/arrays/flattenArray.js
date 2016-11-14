/**
 * Flatten a nested array using Helper Method of Recursion
 *
 * Input:   Array of Integers and Arrays
 * Output:  Array of Integers
 *
 * Example: flatten([1, [2, 3, [4]], 5, [[6]]]) => [1, 2, 3, 4, 5, 6]
 **/

function flatten(arr){
  var result = [];

  function helper(currObj, res){
    for( var i = 0; i<currObj.length; i++ ){
      if( typeof currObj[i] === 'number'){
        res.push( currObj[i] );
      } else {
        helper( currObj[i], res )
      }
    }
  }
  helper(arr, result);
  return result;
}

var ex = [1, [2, 3, [4]], 5, [[6]]];
console.log( flatten(ex) );
