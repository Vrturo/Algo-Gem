// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// 11110
// 11010
// 11000
// 00000
// Answer: 1

// Example 2:

// 11000
// 11000
// 00100
// 00011
// Answer: 3


var numIslands = function (grid) { // 156 ms runtime
    var islands = 0,
        row,
        column;

    // find land pieces
    for ( row = 0; row < grid.length; row++ ) {
        for ( column = 0; column < grid[row].length; column++ ) {
            if ('1' === grid[row][column] ) {
                walk( grid, row, column );
                islands++;
            }
        }
    }
    return islands;
};

// do dfs walf and mark visited land pieces
function walk( grid, row, col ) {
    if ('1' === grid[row][col]) {
        grid[row][col] = 'visited'; // mark land piece as visited
        /* left*/       if( col > 0 ) walk( grid, row, col - 1 );
        /* right */     if( col < grid[row].length - 1 ) walk( grid, row, col + 1 );
        /* top */       if( row > 0) walk(grid, row - 1, col );
        /* bottom */    if( row < grid.length - 1 ) walk( grid, row + 1, col );
    }
}


// ------------------------------------
