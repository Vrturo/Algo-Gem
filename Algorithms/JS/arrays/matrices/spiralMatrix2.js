// Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

// For example,
// Given n = 3,

// You should return the following matrix:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]


var generateMatrix = function(n) { //104 ms runtime
    var result = [],
        index = 0;

    for (;index < n; index++ ) { //create n * n array
      result.push( new Array(n) );
    }

    var i = 0,
        j = 0,
        directionX = 0,
        directionY = 1;
        index = 1;

    while( index <= Math.pow(n,2) ) {
      result[i][j] = index++; // set element to current index
      if( (directionX === 0 && directionY === 1) && (j === n-1 || result[i][j+1] !== undefined) ){ // right -> down
        directionX = 1;
        directionY = 0;
      }
      else if( (directionX === 1 && directionY === 0) && (i === n-1 || result[i+1][j] !== undefined) ){ // down -> right
        directionX = 0;
        directionY = -1;
      }
      else if( (directionX === 0 && directionY === -1) && (j === 0 || result[i][j-1] !== undefined) ){// right -> left
        directionX = -1;
        directionY = 0;
      }
      else if( (directionX === -1 && directionY ===0) && (i === 0 || result[i-1][j] !== undefined) ){ // left -> up
        directionX = 0;
        directionY = 1;
      }
      i += directionX; // increment or decrement direction of i
      j += directionY; // increment or decrement direction of j
    }

    return result;
};
