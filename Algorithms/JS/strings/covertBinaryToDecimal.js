// Convert binary ('101') to it's decimal equivelant( 5)

// 0   00
// 1   01
// 2   10
// 3   11
// 4   100
// 5   101
// 6   110
// 7   111
// 8   1000
// 9   1001
// 10  1010


// Input: String
// ex. '101'

// Output: Integer
// 5


function parse( string ){
    return parseInt( string, 2 ); // The parseInt function converts strings to numbers,
                                  // and it takes a second argument specifying the base in which the string representation is:
}

// -----------------------------------

function parse( string ){
    var numbers = string.split(""),
        counter = 0,
        sum = 0,
        power;
    for( var i=numbers.length; i<=0; i-- ){
        var integer = ParseInt( numbers[i] );
        power = Math.pow( 2, counter );
        sum += power*integer;
        counter++;
    }
    return sum;
}
