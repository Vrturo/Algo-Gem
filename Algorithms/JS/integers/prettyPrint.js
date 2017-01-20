// PRETTYPRINT

// Print concentric rectangular pattern in a 2d matrix.
// Let us show you some examples to clarify what we mean.

// Example 1:

// Input: A = 4.
// Output:

// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4
// Example 2:

// Input: A = 3.
// Output:

// 3 3 3 3 3
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3
// The outermost rectangle is formed by A, then the next outermost is formed by A-1 and so on.

// You will be given A as an argument to the function you need to implement, and you need to return a 2D array.

function prettyPrint(A){
      var matrix = [],
          x = 2*A-2,
          y = A;


      function genMat(k,n,m){
          var x = k,
              y = n;
          for(var i=k; i<2*n-1;i++){
              for(var j=k; j<2*n-1; j++){
                  if( i===x||j===x||i===y||j===y){
                      if(matrix[i][j] === 0) matrix[i][j] = m;
                  }
              }
          }
      }

      for(var i=0;i<2*A-1;i++){ // create empty matrix
          matrix[i] = [];
          for(var j=0;j<2*A-1;j++){
              matrix[i][j]=0;
          }
      }
      for(i=0; i<A; i++){
          genMat(i,x,y);  // Construction of outer box
          x--;
          y--;
      }
      return matrix
}

console.log( prettyPrint(3) )
