// The classic Sudoku game involves a grid of 81 squares.
// The grid is divided into nine blocks, each containing nine squares.

// The rules of the game are simple:
// each of the nine blocks has to contain all the numbers 1-9 within its squares.
// Each number can only appear once in a row, column or box.

// The difficulty lies in that each vertical nine-square column,
// or horizontal nine-square line across, within the larger square,
// must also contain the numbers 1-9, without repetition or omission.



function solveSudoku(grid, row, col){
    var cell = findUnassignedLocation(grid, row, col);
    row = cell[0];
    col = cell[1];

    // base case: if no empty cell
    if (row === -1) {
        printGrid(grid);
        return true;
    }
    for ( var num = 1; num <= 9; num++ ) {
        if( noConflicts(grid, row, col, num) ) {
            grid[row][col] = num;
            if ( solveSudoku(grid, row, col) ) return "solved";
            // mark cell as empty (with 0)
            grid[row][col] = 0;
        }
    }
    // trigger back tracking
    return false;
}

function findUnassignedLocation(grid, row, col) {
    for (; row < 9 ; col = 0, row++){
        for (; col < 9 ; col++){
            if (grid[row][col] == 0) return [row, col];
        }
    }
    return [-1, -1];
}


function noConflicts(grid, row, col, num) {
    return rowCheck(grid, row, num) && colCheck(grid, col, num) && boxCheck(grid, row, col, num);
}

function rowCheck(grid, row, num) {
    for ( var col = 0; col < 9; col++ ){
        if ( grid[row][col] === num ) return false;
    }
    return true;
}
function colCheck(grid, col, num) {
    for ( var row = 0; row < 9; row++ ){
        if ( grid[row][col] === num ) return false;
    }
    return true;
}
function boxCheck(grid, row, col, num) {
    row = Math.floor(row / 3) * 3;
    col = Math.floor(col / 3) * 3;

    for (var r = 0; r < 3; r++){
        for (var c = 0; c < 3; c++){
            if ( grid[row + r][col + c] === num ) return false;
        }
    }
    return true;
}
function printGrid(grid) {
    var res = "";

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            res += grid[i][j];
        }
        res += "\n";
    }
    console.log(res);
}

var puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

console.log(solveSudoku(puzzle, 0, 0))
