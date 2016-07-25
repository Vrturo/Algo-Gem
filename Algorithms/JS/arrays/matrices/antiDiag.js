// return a matrix of size n * n with 1's covering the anti diagonal and 0's covering the rest

function createMatrix( rows ){
  var result = [];

  for ( var i = 0; i < rows; i++ ) {
      result.push( [] );
      for ( var j = 0; j < rows; j++ ) {
         result[i][j] = 0;
      }
  }

  return result;
}

function antiDiag( matrix ){
  var result = matrix,
      j = matrix.length -1;

  for ( var i = 0; i < matrix.length; i++ ) {
      matrix[i][j] = 1;
      j--;
  }

  return matrix;
}

var arr = createMatrix(3);
console.log( antiDiag( arr ) );

