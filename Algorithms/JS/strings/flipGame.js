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
        if( current !== 'no combo' ) result.push( current );
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
        return 'no combo';
    }
    result = result.filter(function(item, pos) {
        return result.indexOf(item) == pos;
    });
    return counter < 1 ? [] : result;
};
