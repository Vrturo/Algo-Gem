// Objec­tive : In chess, a queen can move as far as she pleases, hor­i­zon­tally, ver­ti­cally, or diag­o­nally.
// A chess board has 8 rows and 8 columns.
// The stan­dard 8 by 8 Queen’s prob­lem asks how to place 8 queens on an ordi­nary chess board
// so that none of them can hit any other in one move.

// Here we are solv­ing it for N queens in NxN chess board.


var iterations = 0

var print_board = function (columns) {
  var n = columns.length,
      row = 0,
      col = 0;

  while (row < n) {
    while (col < n) {
      process.stdout.write(columns[row] === col ? 'Q ' : '# ')
      col++
    }

    process.stdout.write('\n')
    col = 0
    row++
  }
}

var has_conflict = function (columns) {
  var len = columns.length,
      last = columns[len - 1],
      previous = len - 2;

  while (previous >= 0) {
    if (columns[previous] === last) return true;
    if (last - (len - 1) === columns[previous] - previous) return true;
    if (last + (len - 1) === columns[previous] + previous) return true;
    previous--;
  }

  return false
}

var place_next_queen = function (total, queens, columns) {
  if (queens === 0) return columns;
  columns = columns || [];

  for (var column = 0; column < total; column++) {
    columns.push(column);
    iterations++;
    if ( !has_conflict(columns) && place_next_queen(total, queens - 1, columns) ) return columns;

    columns.pop(column);
  }

  return null
}

print_board(place_next_queen(10, 10))
console.log('\niterations: ', iterations)

// -----------------------------------------------------------

function NQueens(){
    this.result = [];
    // result[i]=j; means queen at i-th row is placed at j-th column.
    // Queens placed at (x1, y1) and (x2,y2)
    // x1==x2 means same rows, y1==y2 means same columns, |x2-x1|==|y2-y1| means
    // they are placed in diagonals.
}

NQueens.prototype.canPlace = function( x2, y2 ){
    // This function will check if queen can be placed (x2,y2), or we can
    // say that Can queen at x2 row is placed at y2 column.
    // for finding the column for x2 row, we will check all the columns for
    // all the rows till x2-1.
    for (var i = 0; i < x2; i++) {
      //result[i] == y2 => columns are same
      //|i - x2| == |result[i] - y2| => in diagonals.
      if( (this.result[i] === y2) || ((i - x2) === (this.result[i] - y2)) ){
        return false;
      }
    }
    return true;
}

NQueens.prototype.placeQueens = function( x, size ){
    for (var i = 0; i < size; i++) {
      //check if queen at xth row can be placed at i-th column.
      if ( this.canPlace(x, i) ) {
        this.result[x] = i; // place the queen at this position.
        if (x === size - 1) {
          console.log("Order of " + size + " queens "
              + this.result);
        }
        this.placeQueens(x + 1, size);
      }
    }
}


// var n = 6;
// var i = new NQueens();
// i.result = new Array(6);
// i.placeQueens(0, n);

