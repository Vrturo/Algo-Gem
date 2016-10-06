// Given an array of words and a length L,
// format the text such that each line has exactly L characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line.
// Pad extra spaces ' ' when necessary so that each line has exactly L characters.

// Extra spaces between words should be distributed as evenly as possible.
// If the number of spaces on a line do not divide evenly between words,
// the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left justified and no extra space is inserted between words.

// For example,
// words: ["This", "is", "an", "example", "of", "text", "justification."]
// L: 16.

// Return the formatted lines as:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]
// Note: Each word is guaranteed not to exceed L in length.

var fullJustify = function(words, maxWidth) {
    // if( maxWidth<1 ) return [""];
    // if( words.length <= 1 ) return [addSpaces( maxWidth )];
    var result = [],
        currentRow = "",
        rowLength = 0,
        currentWord,
        temp;
    for( var i=0; i<words.length; i++ ){
        currentWordLength = words[i].length;
        if( rowLength+currentWordLength <= maxWidth ){ // if current word fits in row
            currentRow += words[i]; // add wrod to row
            rowLength += currentWordLength; // add to the row length
        } else { // if current word
            temp = maxWidth - rowLength; // get how many spaces are needed to fill
            currentRow = addSpaces(temp) + currentRow; // fill row with spaces
            result.push(currentRow); // push row into result
            currentRow = words[i];
            rowLength = words[i].length;
        }
    }
    if( !result[result.length-1].includes( words[words.length-1] ) ){ // if the last row doesnt include the last word
        temp = maxWidth - rowLength;
        currentRow = addSpaces(temp) + currentRow;
        result.push( currentRow );

    }
    return result;
};

function addSpaces( n ){
    return " ".repeat(n);
}
