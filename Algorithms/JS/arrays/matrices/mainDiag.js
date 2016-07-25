// return a matrix of size n * n with 1's covering the main diagonal and 0's covering the rest

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

function mainDiag( matrix ){
    var result = matrix;

  for ( var i = 0; i < matrix.length; i++ ) {
      var j = i;
      matrix[i][j] = 1;
  }

  return matrix;
}

function antiDiag( matrix ){
  var result = matrix;

  for ( var i = 0; i < matrix.length; i++ ) {
      var j = i;
      matrix[i][j] = 1;
  }

  return matrix;
}

var arr = createMatrix(3);
console.log( antiDiag( arr ) );

