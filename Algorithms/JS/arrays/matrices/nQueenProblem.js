// Objec­tive : In chess, a queen can move as far as she pleases, hor­i­zon­tally, ver­ti­cally, or diag­o­nally.
// A chess board has 8 rows and 8 columns.
// The stan­dard 8 by 8 Queen’s prob­lem asks how to place 8 queens on an ordi­nary chess board
// so that none of them can hit any other in one move.

// Here we are solv­ing it for N queens in NxN chess board.


var iterations = 0

var printBoard = function (columns) {
  var n = columns.length,
      row = 0,
      col = 0;

  while (row < n) {
    while (col < n) {
      process.stdout.write(columns[row] === col ? 'Q ' : '# ')
      col++;
    }

    process.stdout.write('\n');
    col = 0;
    row++;
  }
}

var hasConflict = function (columns) {
  var len = columns.length-1,
      last = columns[len],
      previous = len - 1;

  while (previous >= 0) {
    if (columns[previous] === last) return true;
    if (last - (len) === columns[previous] - previous) return true;
    if (last + (len) === columns[previous] + previous) return true;
    previous--;
  }
  return false;
}

var placeNextQueen = function (total, queens, columns) {
  if (queens === 0) return columns;
  columns = columns || [];

  for (var column = 0; column < total; column++) {
    columns.push(column);
    iterations++;
    if ( !hasConflict(columns) && placeNextQueen(total, queens - 1, columns) ) return columns;
    columns.pop(column);
  }
  return null;
}

printBoard(placeNextQueen(10, 10));
console.log('\niterations: ', iterations);
