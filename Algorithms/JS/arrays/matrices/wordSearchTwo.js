// Given a 2D board and a list of words from the dictionary, find all words in the board.

// Each word must be constructed from letters of sequentially adjacent cell,
// where "adjacent" cells are those horizontally or vertically neighboring.
// The same letter cell may not be used more than once in a word.

// For example,
// Given words = ["oath","pea","eat","rain"] and board =

// [
//   ['o','a','a','n'],
//   ['e','t','a','e'],
//   ['i','h','k','r'],
//   ['i','f','l','v']
// ]
// Return ["eat","oath"].
// Note:
// You may assume that all inputs are consist of lowercase letters a-z.


// --------------------UNFINSISHED-----------

var findWords = function(board, words) {
    var cache = {};

    function check(x, y){
        if( board[x-1][y] ) // top
        if( board[x-1][y+1] ) // tr diag
        if( board[x][y+1] ) // right
        if( board[x+1][y-1] ) // br diag
        if( board[x][y+1] ) // bottom
        if( board[x+1][y-1] ) // bl diag
        if( board[x][y-1] ) //left
        if( board[x-1][y-1] ) // tl diag
    }

                if( board[i-1] ){
                    if( board[i-1][j] === 1 ) count+=1 // vertical t check
                    if( board[i-1][j+1] ){ if( board[i-1][j+1] === 1 ) count+=1 }// rdiag t check
                    if( board[i-1][j-1] ){ if( board[i-1][j-1] === 1 ) count+=1 }// ldiag t check
                }
                if( board[i+1] ){
                    if( board[i+1][j] === 1 ) count+=1 // vertical b check
    }
    var counter = 0;
    while( counter < words.length){
        var word = words[counter];
        for( var i=0; i<board.length; i++ ){
            for( var j=0; j<board[i].length; j++ ){
               if( word[0] === board[i][j] ){
                   if( check(x, y) )
               }
            }
        }

        counter++;
    }


};
