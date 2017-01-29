Amazon Final Technical Interview. Software Development Engineer, Traffic Management role

10 min Intro
Why do you want to work at Amazon?
10 min on an algo question (no coding, jsut explaining)
  - Given an x amount of correctly spelled words, A user wants you to build a program that does a spell check on emails
    You may choose whichever way you want to organize or build this application
20 min on algorithm question
15 min of OO Design Questions

// Algorithm


Given an stream of strings as input, return the highest occuring string in the stream.
Assume the stream interface only has the following public methods:

hasNext() --> returns a boolean
getNext() --> returns the next string

Example:
Input: 'a' --> 'bb' --> 'ccc' --> 'z' --> 'ccc' --> 'bb' --> 'a' --> 'dd'
Return: 'z'

If there are multiple strings that ocurr once, return the first unique string.

function occurence(input){
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

    for( var k in map ){ // isnt
       if( map[k] === 1 ) return k; // constant
    }
}

