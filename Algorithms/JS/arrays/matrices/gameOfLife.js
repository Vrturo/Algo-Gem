// According to the Wikipedia's article: "The Game of Life, also known simply as Life,
// is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// Given a board with m by n cells, each cell has an initial state live (1) or dead (0).
// Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules
// (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population..
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// Write a function to compute the next state (after one update) of the board given its current state.

var gameOfLife = function(board) {
    var result = [],
        m = board.length,
        n,
        i,
        j;

    for ( i = 0; i < m; i++ ) { //dup amount of arrays
      result.push( [] );
    }

    for( i = 0; i < m; i++ ){ //
        for( j = 0; j < board[i].length; j++ ){ // cell
                // var row = board[i],
                //     cell = board[i][j];
                var count = 0;
                if( board[i][j+1] )
                    if( board[i][j+1] === 1 ) count+=1 // horizontal r check
                if( board[i][j-1] )
                    if( board[i][j-1] === 1 ) count+=1 // horizontal l check
                if( board[i-1] ){
                    if( board[i-1][j] === 1 ) count+=1 // vertical t check
                    if( board[i-1][j+1] ){ if( board[i-1][j+1] === 1 ) count+=1 }// rdiag t check
                    if( board[i-1][j-1] ){ if( board[i-1][j-1] === 1 ) count+=1 }// ldiag t check
                }
                if( board[i+1] ){
                    if( board[i+1][j] === 1 ) count+=1 // vertical b check
                    if( board[i+1][j+1] ){ if( board[i+1][j+1] === 1 ) count+=1 }// rdiag b check
                    if( board[i+1][j-1] ){ if( board[i+1][j-1] === 1 ) count+=1 }// ldiag t check
                }
                result[i][j] = 0;
                if( (count === 2 || count === 3) && board[i][j] === 1 ) result[i][j] = 1;
                if( board[i][j] === 0 && count === 3 ) result[i][j] = 1;



        }// end cell
    } // end row

    for (m = 0; m < board.length; m++) {
        for (n = 0; n < board[m].length; n++) {
            board[m][n] = result[m][n];
        }
    }
};
var arr = [
          [1,0,1],
          [1,0,0],
          [0,0,0]
          ]
console.log( gameOfLife(arr) );
// i = row; j = cell
// horizontal[i][j] j + 1 || j - 1
// vertical[i][j] i + 1 || i - 1
// rdiag[i][j] i+1 && j+1 || i-1 && j+1
// rdiag[i][j] i-1 && j-1 || i+1 && j-1
//[00,01,02]
//[10,11,12]
//[20,21,22]
