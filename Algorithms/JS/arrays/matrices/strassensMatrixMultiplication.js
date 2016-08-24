// Given two square matrices A and B of size n x n each, find their multiplication matrix.

// Naive method
function multiply( mA, mB ){

  var result = new Array(mA.length);

  for( var i = 0; i < result.length; i++ ){
      result[i] = new Array( mB[i].length );
      for( var j = 0; j < mA.length; j++ ){
        result[i][j] = 0;
        for( var k = 0; k < mB.length; k++ ){
          result[i][j] += mA[i][k] * mB[k][j];
        };
      }
  }

  return result;
}

// Naive method
function multiplyMatrix(m1, m2) {
    var result = [];
    for(var j = 0; j < m2.length; j++) {
          result[j] = [];
          for(var k = 0; k < m1[0].length; k++) {
              var sum = 0;
              for(var i = 0; i < m1.length; i++) {
                  sum += m1[i][k] * m2[j][i];
              }
              result[j].push(sum);
          }
    }
    return result;
}

function strassens( a, b ){

  var result = [];
  var rows = a.length;
  for( var i  = 0; i < rows; i++ ){
       result[i] = [];
  }
  /** base case **/
  if (n === 1){
    result[0][0] = a[0][0] * b[0][0]
  } else{
      var A11 = [];
      var A12 = [];
      var A21 = [];
      var A22 = [];
      var B11 = [];
      var B12 = [];
      var B21 = [];
      var B22 = [];

    for( var i = 0; i < (rows/2); i++ ){
      var A11 = [i] = [];
      var A12 = [i] = [];
      var A21 = [i] = [];
      var A22 = [i] = [];
      var B11 = [i] = [];
      var B12 = [i] = [];
      var B21 = [i] = [];
      var B22 = [i] = [];
    }

    /** Dividing matrix A into 4 halves **/
      split(A, A11, 0 , 0);
      split(A, A12, 0 , n/2);
      split(A, A21, n/2, 0);
      split(A, A22, n/2, n/2);

      /** Dividing matrix B into 4 halves **/
      split(B, B11, 0 , 0);
      split(B, B12, 0 , n/2);
      split(B, B21, n/2, 0);
      split(B, B22, n/2, n/2);

      function split( a, b, inde )

      // public void split(int[][] P, int[][] C, int iB, int jB)
//     {
//         for(int i1 = 0, i2 = iB; i1 < C.length; i1++, i2++)
//             for(int j1 = 0, j2 = jB; j1 < C.length; j1++, j2++)
//                 C[i1][j1] = P[i2][j2];
//     }

  }
  console.log(result);
}
var one = [[1,2], [3,4]];
var two = [[1,2], [3,4]];
strassens(one, two);
// /** Function to multiply matrices **/
//     public int[][] multiply(int[][] A, int[][] B)
//     {
//         int n = A.length;
//         int[][] R = new int[n][n];
//         /** base case **/
//         if (n == 1)
//             R[0][0] = A[0][0] * B[0][0];
//         else
//         {
//             int[][] A11 = new int[n/2][n/2];
//             int[][] A12 = new int[n/2][n/2];
//             int[][] A21 = new int[n/2][n/2];
//             int[][] A22 = new int[n/2][n/2];
//             int[][] B11 = new int[n/2][n/2];
//             int[][] B12 = new int[n/2][n/2];
//             int[][] B21 = new int[n/2][n/2];
//             int[][] B22 = new int[n/2][n/2];

//             /** Dividing matrix A into 4 halves **/
//             split(A, A11, 0 , 0);
//             split(A, A12, 0 , n/2);
//             split(A, A21, n/2, 0);
//             split(A, A22, n/2, n/2);
//             /** Dividing matrix B into 4 halves **/
//             split(B, B11, 0 , 0);
//             split(B, B12, 0 , n/2);
//             split(B, B21, n/2, 0);
//             split(B, B22, n/2, n/2);

//             /**
//               M1 = (A11 + A22)(B11 + B22)
//               M2 = (A21 + A22) B11
//               M3 = A11 (B12 - B22)
//               M4 = A22 (B21 - B11)
//               M5 = (A11 + A12) B22
//               M6 = (A21 - A11) (B11 + B12)
//               M7 = (A12 - A22) (B21 + B22)
//             **/

//             int [][] M1 = multiply(add(A11, A22), add(B11, B22));
//             int [][] M2 = multiply(add(A21, A22), B11);
//             int [][] M3 = multiply(A11, sub(B12, B22));
//             int [][] M4 = multiply(A22, sub(B21, B11));
//             int [][] M5 = multiply(add(A11, A12), B22);
//             int [][] M6 = multiply(sub(A21, A11), add(B11, B12));
//             int [][] M7 = multiply(sub(A12, A22), add(B21, B22));

//             *
//               C11 = M1 + M4 - M5 + M7
//               C12 = M3 + M5
//               C21 = M2 + M4
//               C22 = M1 - M2 + M3 + M6
//             *
//             int [][] C11 = add(sub(add(M1, M4), M5), M7);
//             int [][] C12 = add(M3, M5);
//             int [][] C21 = add(M2, M4);
//             int [][] C22 = add(sub(add(M1, M3), M2), M6);

//             /** join 4 halves into one result matrix **/
//             join(C11, R, 0 , 0);
//             join(C12, R, 0 , n/2);
//             join(C21, R, n/2, 0);
//             join(C22, R, n/2, n/2);
//         }
//         /** return result **/
//         return R;
//     }
//     /** Funtion to sub two matrices **/
//     public int[][] sub(int[][] A, int[][] B)
//     {
//         int n = A.length;
//         int[][] C = new int[n][n];
//         for (int i = 0; i < n; i++)
//             for (int j = 0; j < n; j++)
//                 C[i][j] = A[i][j] - B[i][j];
//         return C;
//     }
//     /** Funtion to add two matrices **/
//     public int[][] add(int[][] A, int[][] B)
//     {
//         int n = A.length;
//         int[][] C = new int[n][n];
//         for (int i = 0; i < n; i++)
//             for (int j = 0; j < n; j++)
//                 C[i][j] = A[i][j] + B[i][j];
//         return C;
//     }
//     /** Funtion to split parent matrix into child matrices **/
//     public void split(int[][] P, int[][] C, int iB, int jB)
//     {
//         for(int i1 = 0, i2 = iB; i1 < C.length; i1++, i2++)
//             for(int j1 = 0, j2 = jB; j1 < C.length; j1++, j2++)
//                 C[i1][j1] = P[i2][j2];
//     }
//     /** Funtion to join child matrices intp parent matrix **/
//     public void join(int[][] C, int[][] P, int iB, int jB)
//     {
//         for(int i1 = 0, i2 = iB; i1 < C.length; i1++, i2++)
//             for(int j1 = 0, j2 = jB; j1 < C.length; j1++, j2++)
//                 P[i2][j2] = C[i1][j1];
//     }






//[1,2]
//[3,4]
