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
        i,
        j;

    for ( i = 0; i < board.length; i++ ) {
      result.push( [] );
    }

    for( i = 0; i < board.length; i++ ){ //
        for( j = 0; j < board[i].length; j++ ){ // cell
                // var row = board[i],
                //     cell = board[i][j];
                result[i][j] = 0;
                if( board[i][j+1] === 1 || board[i][j-1] === 1 ) result[i][j] = 1; // horizontal check
                if( board[i+1][j] === 1 || board[i-1][j] === 1) result[i][j] = 1; // vertical check
                if( board[i+1][j+1] === 1 || board[i-1][j+1] === 1) result[i][j] = 1; // rdiag check
                if( board[i-1][j-1] === 1 || board[i+1][j-1] === 1) result[i][j] = 1; // ldiag check


        }// end cell
    } // end row
    return result;
};
// i = row; j = cell
// horizontal[i][j] j + 1 || j - 1
// vertical[i][j] i + 1 || i - 1
// rdiag[i][j] i+1 && j+1 || i-1 && j+1
// rdiag[i][j] i-1 && j-1 || i+1 && j-1
//[00,01,02]
//[10,11,12]
//[20,21,22]
