// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// For example,
// Given the following matrix:

// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// You should return [1,2,3,6,9,8,7,4,5].


var spiralOrder = function(matrix, shrink, arr) { // 132ms runtime
  if(!arr) arr = [];
  if(!matrix || !matrix[0]) return arr; // if matrix doesnt exist or is empty return arr
  if(!shrink) shrink = 0;

  var height = matrix.length - 2 * shrink, // -2 because of matrix arr and length
      width = matrix[0].length - 2 * shrink;

  if( height === 0 || width === 0 ) return arr;

  if( width === 1) {
    for( var i = shrink; i < shrink + height; i++ ) arr.push(matrix[i][shrink + width - 1]);
    return arr;
  }

  if(height === 1){
    for(var i = shrink; i < shrink + width; i++) arr.push(matrix[shrink][i]);
    return arr;
  }

  for(var i = shrink; i < shrink + width - 1; i++) arr.push( matrix[shrink][i] );
  for(var i = shrink; i < shrink + height - 1; i++) arr.push( matrix[i][shrink + width - 1] );
  for(var i = shrink + width - 1; i > shrink; i--) arr.push( matrix[shrink + height - 1][i] );
  for(var i = shrink + height - 1; i > shrink; i--) arr.push( matrix[i][shrink] );

  return spiralOrder( matrix,shrink + 1,arr );
};


function spiralOrder(input, result) {
    if (input.length == 0) {
        return result;
    }

    // add the first row to result
    result = result.concat(input.shift());

    // add the last element of each remaining row
    input.forEach(function(rightEnd) {
        result.push(rightEnd.pop());
    });

    // add the last row in reverse order
    result = result.concat(input.pop().reverse());

    // add the first element in each remaining row (going upwards)
    var tmp = [];
    input.forEach(function(leftEnd) {
        tmp.push(leftEnd.shift());
    });
    result = result.concat(tmp.reverse());

    return spiralOrder(input, result);
}
