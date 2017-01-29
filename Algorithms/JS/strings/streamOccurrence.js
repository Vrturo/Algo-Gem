Given an stream of strings as input, return the highest occuring string in the stream.
Assume the stream interface only has the following public methods:

hasNext() --> returns a boolean
getNext() --> returns the next string

Example:
Input: 'a' --> 'bb' --> 'ccc' --> 'z' --> 'ccc' --> 'bb' --> 'a' --> 'dd'
Return: 'z'

If there are multiple strings that ocurr once, return the first unique string.

function highestOccurence(input){
    var map = {},
        current = input.getNext(),
        result = [0, current];

    while( input.hasNext() ){
        current = input.getNext();
        if( map[current] ){
            map[current]++;
            if( map[current] > result[0] ) result = [map[current], current]
        } else {
            map[current] = 1;
        }
    }

    return result[1];
}

// -----------------------------------------------------------------------------

Given an stream of strings as input, return the first unique string in the stream.
Assume the stream interface only has the following public methods:

hasNext() --> returns a boolean
getNext() --> returns the next string

Example:
Input: 'a' --> 'bb' --> 'ccc' --> 'z' --> 'ccc' --> 'bb' --> 'a' --> 'dd'
Return: 'z'

function uniqueOccurence(input){
    var map = {},
        max = 0,
        current;

    while( input.hasNext() ){
        current = input.getNext();
        if( map[current] ){
            map[current]++;
        } else {
            map[current] = 1;
        }
    }

    for( var k in map ){
       if( map[k] === 1 ) return k;
    }
}
