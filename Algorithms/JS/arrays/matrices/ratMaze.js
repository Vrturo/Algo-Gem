// Given a maze, NxN matrix. A rat has to find a path from source to des­ti­na­tion.
// maze[0][0] (left top corner)is the source and maze[N-1][N-1](right bot­tom cor­ner) is des­ti­na­tion.
// There are few cells which are blocked, means rat can­not enter into those cells.
// Rat can move in any direc­tion ( left, right, up and down).

// Input: A 2D-matrix with 0’s and 1’s fill in it.
// 0 means that cell is blocked and 1 means rat can move to that cell.

// Output: Print solution matrix


function RatInMaze( n ) {
    this.solution = [];
    for(var i = 0 ; i < n; i++) {
        this.solution[i] = [];
        for (var j = 0; j < n; j++) {
            this.solution[i][j] = 0;
        }
    }
}

RatInMaze.prototype.findPath = function( maze, x, y, n, direction ){
    // check if maze[x][y] is feasible to move
    if( x === n-1 && y === n-1 ){//we have reached
      this.solution[x][y] = 1;
      return true;
    }
    if( this.isSafeToGo(maze, x, y, n) ) {
      // move to maze[x][y]
      this.solution[x][y] = 1;
      // now rat has four options, either go right OR go down or left or go up
      if( direction !== "up" && this.findPath(maze, x+1, y, n, "down")) return true; //go down

      //else go down
      if( direction !== "left" && this.findPath(maze, x, y+1, n,"right") ) return true; //go right

      if( direction !== "down" && this.findPath(maze, x-1, y, n, "up") ) return true;//go up

      if( direction !== "right" && this.findPath(maze, x, y-1, n, "left") ) return true; //go left
      //if none of the options work out BACKTRACK undo the move
      this.solution[x][y] = 0;
      return false;
    }
    return false;
}

RatInMaze.prototype.solveMaze = function( maze, n ){
    if( this.findPath(maze, 0, 0, n, "down") ) console.log(this.solution, n);
}


RatInMaze.prototype.isSafeToGo = function( maze, x, y, n ){
    // check if x and y are in limits and cell is not blocked
    if (x >= 0 && y >= 0 && x < n  && y < n && maze[x][y] != 0) return true;

    return false;
}

var n = 5;
var maze = [ [ 1, 0, 1, 1,1 ], [ 1, 1, 1, 0,1 ], [ 0, 0,0, 1, 1 ],
        [ 0, 0, 0, 1,0 ],[ 0, 0,0, 1, 1 ] ];
r = new RatInMaze(n);
r.solveMaze(maze, n);
