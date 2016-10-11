// You are playing the following Flip Game with your friend:
// Given a string that contains only these two characters: + and -,
// you and your friend take turns to flip two consecutive "++" into "--".
// The game ends when a person can no longer make a move and therefore the other person will be the winner.

// Write a function to compute all possible states of the string after one valid move.

// For example, given s = "++++", after one move, it may become one of the following states:

// [
//   "--++",
//   "+--+",
//   "++--"
// ]
// If there is no valid move, return an empty list [].

var generatePossibleNextMoves = function(s) {
    var result = [],
        counter = 0,
        i=0;

    while( i<s.length-1){
        var current = check(i);
        if( current ) result.push( current );
        i++;
    }
    function check( index ){
        var string = s.slice().split("");
        for( var j=index; j<s.length; j++ ){
            if( string[j] === '+' && string[j+1]=== '+' ){
                counter++;
                string.splice.apply( string,[j,1].concat( '-'.split('') ) );
                string.splice.apply( string,[j+1,1].concat( '-'.split('') ) );
                return string.join("");
            }
        }
        return false;
    }
    result = result.filter(function(item, pos) {
        return result.indexOf(item) == pos;
    });
    return counter < 1 ? [] : result;
};

// --------------------------------------

var generatePossibleNextMoves = function(s) {
    var result = [];
    for( var i=0; i<s.length-1; i++ ){
        var string = s.split("");
        for( var j=i; j<s.length; j++ ){
            if( string[j] === '+' && string[j+1]=== '+' ){
                string[j] = '-';
                string[j+1] = '-';
                result.push( string.join("") );
                break;
            }
        }
    }
    result = uniq(result);
    return result;
};

function uniq(arr) {
    var seen = {},
        out = [],
        len = arr.length,
        j = 0;
    for(var i = 0; i < len; i++) {
         var item = arr[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
}
