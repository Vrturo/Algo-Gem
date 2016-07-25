// return a matrix of size n * n populated with 0's

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



