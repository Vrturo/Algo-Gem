// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// For example,

// Consider the following matrix:

// [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]

// Given target = 3, return true.

/**
 * @param {array[][]} matrix
 * @param {number} target
 * @return {boolean}
 */




var searchMatrix = function(matrix, target) {
    var rLo = 0,
        rHi = matrix.length-1,
        cLo = 0,
        cHi,
        mid;

    while( rHi>=rLo ){
        mid = Math.floor(rHi/2);
        cHi  = matrix[mid].length-1;
        if( matrix[mid][cLo] === target ||  matrix[mid][cHi] === target) return true;
        if( matrix[mid][cLo] < target && matrix[mid][cHi] > target ) return checkRow(matrix[mid], cLo, cHi); // in current array
        if( matrix[mid][cLo] > target ) return searchMatrix(  matrix.splice(rLo, mid), target ); //  check rows before current
        return searchMatrix(  matrix.splice(mid+1), target ); // check rows after current
    }

    function checkRow(arr, l, r){
        while( l<=r ){
            if( arr[l] === target || arr[r] === target ) return true;
            l++;
            r--;
        }
        return false;
    }
    return false;
};
