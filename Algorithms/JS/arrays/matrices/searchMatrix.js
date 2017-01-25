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


// create variables to keep track of
  // rLo: the lowest index of the current row
  // rHi: the highest index of the current row
  // cLo: the lowest index of the current column
  // cHi: the highest index of the current column
  // mid: the index of the current row

// create a while that breaks once low row index meets high row index
  // set mid by length of rows divided by 2
  // once mid is set, grab length of current row and set it as our highest column index
  // create 4 conditionals
    // if the first or last index of our current row is the target, return true
    // if target is greater than lowest index of row AND target is less than highest index of current row
      // we can check each element in current row to see if target exists
      // decrement and increment lowest and highest index till each element is covered to see if target exists
    // if the target is less than the lowest element on the current row we can check arrays before
    // case thats left is.. the target is greater than the highest element on the current row, so we check arrays after

var searchMatrix = function(matrix, target) {
    var rLo = 0,
        rHi = matrix.length-1,
        cLo = 0,
        cHi,
        mid;

    while( rHi>=rLo ){
        mid = Math.floor(rHi/2);
        cHi  = matrix[mid].length-1;
        if( matrix[mid][cLo] === target ||  matrix[mid][cHi] === target ) return true;
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
