// This is the text editor interface.
// Anything you type or change here will be seen by the other person in real time.

// 10-7 , 2, 5 or 7.

// 0-0, 2-0, 4-0, 6-0, 8-0, 10-0, 10-2, 10-7 1
// 0-0, 2-0, 4-0, 6-0, 8-0, 10-0, 10-2, 10-5 10-7 1

// 0-0, 2-0, 4-0, 6-0, 8-0, 10-0, 10-7
// 0-0, 2-0, 4-0, 6-0, 8-0, 10-0, 10-5 10-7



// input: 2 params, (integer, integer) -> positive // not always a perfect score
// output: integer, if score isnt possible return 0



function scores(a, b){
  var points = [2, 5, 7], // all possible scores
      results = [];
  for( var i = 0; i <= a; i++ ){
    results[i] = [];
    for( var j = 0; j <= b; j++ ){
      results[i][j] = getPossible( i, j );
    }
  }
  return results[a][b];

  function getPossible(i, j){
    if( !i && !j ) return 1;
    var result = 0;
    for( var k = 0; k < points.length; k++ ){
      result += i-points[k] >= 0 ? results[i-points[k]][j] : 0;
      result += j-points[k] >= 0 ? results[i][j-points[k]] : 0;
    }
    return result;
  }
}

// ------------------------------------------------------------------------------

function scoreTally( scoreOne, scoreTwo ){
   var uniques = [1],// set uniques as buildUp array to store elements to be saved so we don't have to start again
   score = [2,5,7]; // all possible scores

  function ways( val ){
    for( var i = uniques.length; i <= val; i++ ){ // start at buildUp's length
      if( uniques[i] === undefined ){ // if we havent set it yet
        uniques[i] = 0;
        for( var j = 0; j < score.length; j++ ){
          if( i - score[j] >= 0 ){ // if current number is able to subtract to a possible score
            uniques[i] += uniques[i - score[j]]; // grabbing from prev values if they've been marked, and setting for future values
          }
        }
      }
    }
    return uniques[val];
  } // end ways

    if( scoreOne === 0 ){
      return ways(scoreTwo);
    } else if( scoreTwo === 0 ) {
      return ways(scoreOne);
    }
    if( ways(scoreOne) === 0 || ways(scoreTwo) === 0 ) return 0; // if either score is invalid return 0
    return ( ways(scoreOne)*ways(scoreTwo) );

} // end Score Tally

console.log( scoreTally(10, 0) );// 1. [0-2], [0-4], [0-6], [0-8], [0-10] 2. [0-5], [0-10]
console.log( scoreTally(0, 7) ); // 1. [0-2], [0-7] 2. [0-7] 3. [0-5], [0-7]

