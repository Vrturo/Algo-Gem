// you have a standard 8x8 chessboard, empty but for a single knight on some square.
// Emit a series of legal knight moves that result in the knight visiting every square on the chessboard exactly once.
// Note that it is not a requirement that the tour be "closed";
// that is, the knight need not end within a single move of its start position.

// Input and output may be textual or graphical, according to the conventions of the programming environment.
// If textual, squares should be indicated in algebraic notation.
// The output should indicate the order in which the knight visits the squares, starting with the initial position.
// The form of the output may be a diagram of the board with the squares numbered according to visitation sequence,
// or a textual list of algebraic coordinates in order, or even an actual animation of the knight moving around the chessboard.

// Input: starting square

// Output: move sequence



function knightTour(x, y, moveNum) {
  if (moveNum === N*N) {
    return true;
  }

  for (var i = 0; i < 8; i++) {
    var nextX = x + X[i];
    var nextY = y + Y[i];

    /*
    Check if knight is still in the board
    Check that knight does not visit an already visited square
    */
    if (nextX>=0 && nextX<N && nextY>=0 && nextY<N && board[nextX][nextY]===-1) {
        board[nextX][nextY] = moveNum;

        var nextMoveNum = moveNum + 1;
        if( knightTour(nextX,nextY, nextMoveNum) === true ){
          return true;
        } else {
          console.log('No place to move from ' + nextX + ',' +nextY + ': Backtrack');
          board[nextX][nextY] = -1; // backtrack
        }
    } else {
        console.log( (nextX + ',' + nextY + ' is not a valid move') );
    }
  }
  return false;
}


var N = 3;
var board = new Array (N);
for (var i = board.length - 1; i >= 0; i--) {
  board[i] = new Array (N);
}

for (var i = board.length - 1; i >= 0; i--) {
  for (var j = board[i].length - 1; j >= 0; j--) {
    board[i][j] = -1;
  }
}

/*
Define the next move of the knight
*/
var X = [ 2, 1, -1, -2, -2, -1,  1,  2 ];
var Y = [ 1, 2,  2,  1, -1, -2, -2, -1 ];

var pos = new Array (2);
pos[0] = pos[1] = -1;

board[0][0] = 0; // start from this position
pos[0] = 0;
pos[0] = 0;

